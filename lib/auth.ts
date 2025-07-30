import { betterAuth, custom } from "better-auth";
import { prisma } from "./prisma";
import { customSession } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { id } from "zod/v4/locales";
import { stripe } from "./stripe";
import resend from "./resend";
import { NextResponse } from "next/server";
export const auth = betterAuth({
    database:prismaAdapter(prisma,{
        provider:"postgresql",
    }),
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    const stripeCustomer = await stripe.customers.create({
                        email: user.email,
                        name: user.name,
                    });
                    const stripeCustomerId = stripeCustomer.id;
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { stripeCustomerId },
                    });
                },
            },
        },
    },
    emailAndPassword: {
        enabled: true,
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
