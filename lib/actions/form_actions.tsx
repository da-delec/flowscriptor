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
    The script should be in ${languages} language.
    
    IMPORTANT: Return ONLY a valid JSON object with this exact structure:
    {
      "script": "Your complete sales script here...",
      "objections": [
        {
          "objection": "It's too expensive",
          "response": "I understand that budget is a concern. Many of our clients felt the same way before seeing how much time and money they saved after using our tool."
        },
        {
          "objection": "I'm already using another solution",
          "response": "Totally understandable. Many of our customers switched after realizing how we streamline their workflow and improve team collaboration."
        },
        {
          "objection": "I don't have time to implement this right now",
          "response": "That makes sense. The good news is that our onboarding takes less than an hour, and we provide full support to make it as smooth as possible."
        }
      ]
    }
    
    Make sure all quotes are properly closed and the JSON is valid.
`
    ; 
       const completion = await openai.chat.completions.create({
        model:"gpt-4.1-nano-2025-04-14",
        messages:[
            {role:"user",
             content:prompt,   
            }
        ],
        max_completion_tokens:600,
    });
    const result = completion.choices[0].message.content ;
    
    // Vérification que result n'est pas null
    if (!result) {
        return {
            error: "Erreur lors de la génération du script. Veuillez réessayer."
        }
    }
    
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
        result: result
    }
}