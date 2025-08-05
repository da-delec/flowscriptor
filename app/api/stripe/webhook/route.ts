import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

const getPlanFromPriceId = (priceId: string) => {
  if (priceId === "price_1RmiWmId1XgXGUQOwPPuO1VW") {
    return "STARTER";
  } else if (priceId === "price_1RmidJId1XgXGUQOKayYFpQb") {
    return "ULTRA";
  }
}

// Fonction utilitaire pour vérifier si un client Stripe existe
async function verifyStripeCustomer(customerId: string): Promise<boolean> {
  try {
    await stripe.customers.retrieve(customerId);
    return true;
  } catch (error: any) {
    if (error.code === 'resource_missing') {
      console.log(`Customer ${customerId} not found in Stripe`);
      return false;
    }
    throw error;
  }
}

// Fonction utilitaire pour nettoyer les clients Stripe manquants
async function cleanupMissingStripeCustomer(customerId: string) {
  try {
    // Mettre à jour l'utilisateur pour retirer le stripeCustomerId
    await prisma.user.updateMany({
      where: { stripeCustomerId: customerId },
      data: { 
        stripeCustomerId: "cus_000000000000000000000000",
        plan: "FREE"
      }
    });
    console.log(`Cleaned up missing Stripe customer: ${customerId}`);
  } catch (error) {
    console.error(`Error cleaning up missing Stripe customer ${customerId}:`, error);
  }
}

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature');
  const rawBody = await req.text();

  console.log('Webhook received:', {
    hasSignature: !!sig,
    signatureLength: sig?.length,
    bodyLength: rawBody.length,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET ? 'Present' : 'Missing'
  });

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    console.log('Webhook signature verified successfully');
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    console.error('Signature header:', sig);
    console.error('Webhook secret present:', !!process.env.STRIPE_WEBHOOK_SECRET);
    return NextResponse.json({ error: 'Webhook signature verification failed.' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as any;
   
      if (
        session.metadata &&
        typeof session.metadata.email === 'string' &&
        typeof session.metadata.plan === 'string'
      ) {
        const user = await prisma.user.findUnique({
          where: { email: session.metadata.email }
        });
        if (user) {
          const plan = session.metadata.plan.toUpperCase();
     
          if (plan !== "STARTER" && plan !== "ULTRA") {
            throw new Error("Plan inconnu");
          }
      
         const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: { plan:plan }
          });
          console.log("updated plan : ", updatedUser.plan);
        }
      } else {
        console.error("Webhook: metadata manquant ou invalide", session.metadata);
      }
      break;
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object as any;
      const customerId = invoice.customer as string;
      
      // Vérifier si le client existe dans Stripe
      const customerExists = await verifyStripeCustomer(customerId);
      if (!customerExists) {
        await cleanupMissingStripeCustomer(customerId);
        break;
      }
      
      const user = await prisma.user.findFirst({ where: { stripeCustomerId: customerId } });
      if (user) {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            plan: "FREE"
          }
        });
      }
      break;
    }
    case 'invoice.paid': {
      const invoice = event.data.object as any;
      const customerId = invoice.customer as string;
      
      // Vérifier si le client existe dans Stripe
      const customerExists = await verifyStripeCustomer(customerId);
      if (!customerExists) {
        await cleanupMissingStripeCustomer(customerId);
        break;
      }
      
      const user = await prisma.user.findFirst({ where: { stripeCustomerId: customerId } });
      if (user) {
        await prisma.user.update({
          where: { id: user.id },
          data:{
            scriptGenerated: 0
          }
        });
      }
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as any;
      const customerId = subscription.customer as string;
      
      // Vérifier si le client existe dans Stripe
      const customerExists = await verifyStripeCustomer(customerId);
      if (!customerExists) {
        await cleanupMissingStripeCustomer(customerId);
        break;
      }
      
      const user = await prisma.user.findFirst({ where: { stripeCustomerId: customerId } });
      if (user) {
        await prisma.user.update({
          where: { id: user.id },
          data: { plan: "FREE" }
        });
      } else {
        console.error("Webhook: metadata manquant ou invalide pour subscription.deleted", subscription.metadata);
      }
      break;
    }
    case 'customer.subscription.updated': {
      const subscription = event.data.object as any;
      const customerId = subscription.customer as string;
      
      // Vérifier si le client existe dans Stripe
      const customerExists = await verifyStripeCustomer(customerId);
      if (!customerExists) {
        await cleanupMissingStripeCustomer(customerId);
        break;
      }
      
      const user = await prisma.user.findFirst({ where: { stripeCustomerId: customerId } });
      if (user) {
       const priceId = subscription.items.data[0].price.id;
        await prisma.user.update({
          where: { id: user.id },
          data: { plan: getPlanFromPriceId(priceId) }
        });
      }
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
      break;
  }

  return NextResponse.json({ received: true });
} 