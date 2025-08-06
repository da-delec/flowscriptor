const { PrismaClient } = require('@prisma/client');
const Stripe = require('stripe');

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-06-30.basil'
});

async function checkStripeCustomers() {
  try {
    console.log('🔍 Vérification des customers Stripe...\n');

    // Récupérer tous les utilisateurs avec leur stripeCustomerId
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        stripeCustomerId: true,
        plan: true,
        createdAt: true
      }
    });

    console.log(`📊 Total des utilisateurs: ${users.length}\n`);

    for (const user of users) {
      console.log(`👤 Utilisateur: ${user.name} (${user.email})`);
      console.log(`   Customer ID: ${user.stripeCustomerId}`);
      console.log(`   Plan: ${user.plan}`);
      console.log(`   Créé le: ${user.createdAt}`);

      // Vérifier si le customer existe dans Stripe
      if (user.stripeCustomerId && user.stripeCustomerId !== 'cus_000000000000000000000000') {
        try {
          const customer = await stripe.customers.retrieve(user.stripeCustomerId);
          console.log(`   ✅ Customer existe dans Stripe: ${customer.id}`);
          console.log(`   📧 Email Stripe: ${customer.email}`);
        } catch (error) {
          console.log(`   ❌ Customer N'EXISTE PAS dans Stripe: ${error.message}`);
          
          // Proposer de créer un nouveau customer
          console.log(`   🔧 Création d'un nouveau customer...`);
          try {
            const newCustomer = await stripe.customers.create({
              email: user.email,
              name: user.name,
              metadata: {
                userId: user.id,
                signupMethod: 'email'
              }
            });
            
            await prisma.user.update({
              where: { id: user.id },
              data: { stripeCustomerId: newCustomer.id }
            });
            
            console.log(`   ✅ Nouveau customer créé: ${newCustomer.id}`);
          } catch (createError) {
            console.log(`   ❌ Erreur lors de la création: ${createError.message}`);
          }
        }
      } else {
        console.log(`   ⚠️  Customer ID invalide ou manquant`);
        
        // Créer un nouveau customer
        console.log(`   🔧 Création d'un nouveau customer...`);
        try {
          const newCustomer = await stripe.customers.create({
            email: user.email,
            name: user.name,
            metadata: {
              userId: user.id,
              signupMethod: 'email'
            }
          });
          
          await prisma.user.update({
            where: { id: user.id },
            data: { stripeCustomerId: newCustomer.id }
          });
          
          console.log(`   ✅ Nouveau customer créé: ${newCustomer.id}`);
        } catch (createError) {
          console.log(`   ❌ Erreur lors de la création: ${createError.message}`);
        }
      }
      
      console.log(''); // Ligne vide pour séparer
    }

  } catch (error) {
    console.error('❌ Erreur:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkStripeCustomers(); 