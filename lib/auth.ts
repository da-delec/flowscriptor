

import { betterAuth, custom } from "better-auth";
import { prisma } from "./prisma";
import { customSession } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { id } from "zod/v4/locales";
export const auth = betterAuth({
    database:prismaAdapter(prisma,{
        provider:"postgresql",
    }),
    emailAndPassword:{
        enabled:true
    },
   
    socialProviders:{
        github:{
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }
    },
   
    plugins:[
        customSession(async({user,session})=>{
            const role = await prisma.user.findUnique({
                where:{
                    id:user.id
                }
            })
            return {
                user:{
                    ...user,
                    isAdmin:role?.isAdmin
                }
            }
            
        })
    ]
   
    
   
    
},

)