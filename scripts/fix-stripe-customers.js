const { PrismaClient } = require('@prisma/client');
const Stripe = require('stripe');

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function fixStripeCustomers() {
  console.log('🔧 Début de la correction des clients Stripe...');

  try {
    // Récupérer tous les utilisateurs
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

    console.log(`📊 ${users.length} utilisateurs trouvés`);

    let fixedCount = 0;
    let errorCount = 0;
    let skippedCount = 0;

    for (const user of users) {
      try {
        // Vérifier si l'utilisateur a un stripeCustomerId valide
        if (!user.stripeCustomerId || user.stripeCustomerId === "cus_000000000000000000000000") {
          console.log(`🔧 Utilisateur ${user.email} n'a pas de client Stripe valide, création...`);
          
          // Créer un nouveau client Stripe
          const stripeCustomer = await stripe.customers.create({
            email: user.email,
            name: user.name,
            metadata: {
              userId: user.id,
              signupMethod: 'manual_fix',
              fixedAt: new Date().toISOString()
            }
          });

          // Mettre à jour l'utilisateur
          await prisma.user.update({
            where: { id: user.id },
            data: { 
              stripeCustomerId: stripeCustomer.id 
            }
          });

          console.log(`✅ Client Stripe créé pour ${user.email}: ${stripeCustomer.id}`);
          fixedCount++;
        } else {
          // Vérifier si le client Stripe existe réellement
          try {
            await stripe.customers.retrieve(user.stripeCustomerId);
            console.log(`✅ Client Stripe valide pour ${user.email}: ${user.stripeCustomerId}`);
            skippedCount++;
          } catch (error) {
            if (error.code === 'resource_missing') {
              console.log(`❌ Client Stripe manquant pour ${user.email}: ${user.stripeCustomerId}`);
              
              // Créer un nouveau client Stripe
              const stripeCustomer = await stripe.customers.create({
                email: user.email,
                name: user.name,
                metadata: {
                  userId: user.id,
                  signupMethod: 'recovery',
                  recoveredAt: new Date().toISOString()
                }
              });

              // Mettre à jour l'utilisateur
              await prisma.user.update({
                where: { id: user.id },
                data: { 
                  stripeCustomerId: stripeCustomer.id 
                }
              });

              console.log(`✅ Client Stripe recréé pour ${user.email}: ${stripeCustomer.id}`);
              fixedCount++;
            } else {
              console.error(`⚠️ Erreur lors de la vérification du client ${user.stripeCustomerId}:`, error.message);
              errorCount++;
            }
          }
        }
      } catch (error) {
        console.error(`❌ Erreur lors du traitement de ${user.email}:`, error.message);
        errorCount++;
      }
    }

    console.log('\n📈 Résumé de la correction:');
    console.log(`✅ Utilisateurs corrigés: ${fixedCount}`);
    console.log(`⏭️ Utilisateurs valides (ignorés): ${skippedCount}`);
    console.log(`⚠️ Erreurs: ${errorCount}`);

  } catch (error) {
    console.error('❌ Erreur lors de la correction:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le script si appelé directement
if (require.main === module) {
  fixStripeCustomers()
    .then(() => {
      console.log('✅ Correction terminée');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Erreur:', error);
      process.exit(1);
    });
}

module.exports = { fixStripeCustomers }; 