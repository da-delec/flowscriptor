import { betterAuth, custom } from "better-auth";
import { prisma } from "./prisma";
import { customSession } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { id } from "zod/v4/locales";
import { stripe } from "./stripe";
import resend from "./resend";
import { NextResponse } from "next/server";

// Debug: Vérifier les variables d'environnement
console.log("🔍 Auth Configuration Debug:");
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID ? "✅ Configuré" : "❌ Manquant");
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "✅ Configuré" : "❌ Manquant");
console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID ? "✅ Configuré" : "❌ Manquant");
console.log("GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET ? "✅ Configuré" : "❌ Manquant");

export const auth = betterAuth({

    database:prismaAdapter(prisma,{
        provider:"postgresql",
    }),
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    try {
                        // Vérifier si l'utilisateur a déjà un stripeCustomerId
                        const existingUser = await prisma.user.findUnique({
                            where: { id: user.id },
                            select: { stripeCustomerId: true }
                        });

                        // Si l'utilisateur a déjà un stripeCustomerId valide, ne rien faire
                        if (existingUser?.stripeCustomerId && 
                            existingUser.stripeCustomerId !== "cus_000000000000000000000000") {
                            console.log(`User ${user.email} already has Stripe customer: ${existingUser.stripeCustomerId}`);
                            return;
                        }

                        // Créer le client Stripe
                        const stripeCustomer = await stripe.customers.create({
                            email: user.email,
                            name: user.name,
                            metadata: {
                                userId: user.id,
                                signupMethod: 'email' // ou 'social' selon le contexte
                            }
                        });

                        console.log(`Created Stripe customer for ${user.email}: ${stripeCustomer.id}`);

                        // Mettre à jour l'utilisateur avec le stripeCustomerId
                        await prisma.user.update({
                            where: { id: user.id },
                            data: { 
                                stripeCustomerId: stripeCustomer.id 
                            },
                        });

                        console.log(`Updated user ${user.email} with Stripe customer ID: ${stripeCustomer.id}`);

                    } catch (error) {
                        console.error(`Error creating Stripe customer for ${user.email}:`, error);
                        
                        // En cas d'erreur, on met quand même à jour avec l'ID par défaut
                        // pour éviter les erreurs dans le webhook
                        try {
                            await prisma.user.update({
                                where: { id: user.id },
                                data: { 
                                    stripeCustomerId: "cus_000000000000000000000000" 
                                },
                            });
                            console.log(`Set default Stripe customer ID for ${user.email} due to error`);
                        } catch (updateError) {
                            console.error(`Error updating user ${user.email} with default Stripe ID:`, updateError);
                        }
                    }
                },
            },
        },
    },
    emailAndPassword: {
        enabled: true, // Désactivé pour la nuit
        sendResetPassword: async ({user, url, token}, request) => {
            try {
                const userMail = user.email;
                const findUser = await prisma.user.findUnique({
                    where: { email: userMail },
                });
                if (!findUser) {
                    console.error("User not found for password reset:", userMail);
                    return; // On retourne simplement sans faire planter l'app
                }
                await resend.emails.send({
                    from: "FlowScriptor <noreply@flowscriptor.com>",
                    to: userMail,
                    subject: "Réinitialisation de mot de passe",
                    html: `
                    <p>Bonjour ${findUser.name}, suivez le lien pour réinitialiser votre mot de passe : ${url}</p>
                    `
                });
            } catch (error) {
                console.error("Erreur lors de l'envoi de l'email de réinitialisation:", error);
            }
        },
    }, 
    
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
             // Permettre la redirection automatique
        }
    },

    plugins: [
        customSession(async ({ user, session }) => {
            const role = await prisma.user.findUnique({
                where: {
                    id: user.id
                }
            })
            return {
                user: {
                    ...user,
                    isAdmin: role?.isAdmin,
                    plan: role?.plan,
                    scriptGenerated:role?.scriptGenerated,
                    stripeCustomerId:role?.stripeCustomerId,
                 
                }
            }
        }),
    ],
});
