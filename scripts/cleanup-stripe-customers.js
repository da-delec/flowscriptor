const { PrismaClient } = require('@prisma/client');
const Stripe = require('stripe');

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function cleanupMissingStripeCustomers() {
  console.log('🔍 Début du nettoyage des clients Stripe manquants...');

  try {
    // Récupérer tous les utilisateurs avec un stripeCustomerId
    const users = await prisma.user.findMany({
      where: {
        stripeCustomerId: {
          not: "cus_000000000000000000000000"
        }
      },
      select: {
        id: true,
        email: true,
        stripeCustomerId: true,
        plan: true
      }
    });

    console.log(`📊 ${users.length} utilisateurs trouvés avec un stripeCustomerId`);

    let cleanedCount = 0;
    let errorCount = 0;

    for (const user of users) {
      try {
        // Vérifier si le client existe dans Stripe
        await stripe.customers.retrieve(user.stripeCustomerId);
        console.log(`✅ Client Stripe valide pour ${user.email}: ${user.stripeCustomerId}`);
      } catch (error) {
        if (error.code === 'resource_missing') {
          console.log(`❌ Client Stripe manquant pour ${user.email}: ${user.stripeCustomerId}`);
          
          // Nettoyer l'utilisateur
          await prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCustomerId: "cus_000000000000000000000000",
              plan: "FREE"
            }
          });
          
          cleanedCount++;
          console.log(`🧹 Utilisateur nettoyé: ${user.email}`);
        } else {
          console.error(`⚠️ Erreur lors de la vérification du client ${user.stripeCustomerId}:`, error.message);
          errorCount++;
        }
      }
    }

    console.log('\n📈 Résumé du nettoyage:');
    console.log(`✅ Clients valides: ${users.length - cleanedCount - errorCount}`);
    console.log(`🧹 Clients nettoyés: ${cleanedCount}`);
    console.log(`⚠️ Erreurs: ${errorCount}`);

  } catch (error) {
    console.error('❌ Erreur lors du nettoyage:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le script si appelé directement
if (require.main === module) {
  cleanupMissingStripeCustomers()
    .then(() => {
      console.log('✅ Nettoyage terminé');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Erreur:', error);
      process.exit(1);
    });
}

module.exports = { cleanupMissingStripeCustomers }; 