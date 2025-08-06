import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Remplace par tes vrais price ids Stripe
const PRICE_IDS = {
  starter: "price_1RslKqEsHmXon7rkh0dZaEiP",
  ultra: "price_1RslQ7EsHmXon7rkaBFY81sD"
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("this is the body : ", body);
    
    if (!body.email || !body.stripeCustomerId || !body.plan) {
      return NextResponse.json(
        { error: "Données manquantes: email, stripeCustomerId et plan sont requis" },
        { status: 400 }
      );
    }
    
    const plan = body.plan === "ultra" ? "ultra" : "starter";
    const priceId = PRICE_IDS[plan];

    if (!priceId) {
      return NextResponse.json(
        { error: "Plan invalide" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      metadata:{
        email: body.email,
        plan: plan,
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      success_url: "https://flowscriptor-ai.vercel.app/user_dashboard/pricing/success",
      cancel_url: "https://flowscriptor-ai.vercel.app/user_dashboard",
    
      customer: body.stripeCustomerId,
    });
    
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erreur lors de la création du checkout:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du checkout" },
      { status: 500 }
    );
  }
}