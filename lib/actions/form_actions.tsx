"use server"
import { openai } from "@/lib/openai"
import { prisma } from "../prisma"
import { headers } from "next/headers"
import { auth } from "../auth"
import { LIMITATION } from "../auth-plan"
import { Plan } from "@/lib/generated/prisma/client";
export async function getDatasForm (prevState: any,formData:FormData){


    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const userPlan = session?.user.plan
const scriptGen = session?.user.scriptGenerated as number
const userLimit = LIMITATION[userPlan as Plan]

if(scriptGen >= userLimit.scriptLimit) {
    return {
        error: "Vous avez atteint la limite de scripts pour votre plan actuel. Veuillez mettre à niveau votre plan pour continuer."
    }
}


    const description = formData.get("description")
    const prospectType = formData.get("prospect-type")
    const targetName = formData.get("enterpriseName")
    const callGoal = formData.get("selected-goal")
    const tone = formData.get("tone")
    const company = formData.get("company_name")
    const languages = formData.get("language")
    const prompt = `
    You are a cold-calling expert assistant. Generate a ${languages} cold-call script based on the following:
    
    - Caller: ${company}
    - Target: ${targetName}
    - Prospect Type: ${prospectType}
    - Call Goal: ${callGoal}
    - Tone: ${tone}
    - Description: ${description}
    Structure the script like a real call: include greeting, intro, value proposition, handling objections, and call to action.
    `; 
       const completion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[
            {role:"user",
             content:prompt,   
            }
        ],
        max_completion_tokens:300,
    });
    const result = completion.choices[0].message.content;
    await prisma.user.update({
        where: {
            id: session?.user.id,
        },
        data: {
            scriptGenerated: {
                increment: 1,
            },
        },
    });
    
    return {
        result
    }
}