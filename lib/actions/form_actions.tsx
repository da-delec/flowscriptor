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


    // Récupération des données du formulaire avec les bons noms de champs
    const ourName = formData.get("ourName") as string
    const ourCompany = formData.get("company_name") as string
    const prospectName = formData.get("prospectName") as string
    const prospectCompany = formData.get("enterpriseName") as string
    const industry = formData.get("prospect-type") as string
    const productName = formData.get("productName") as string
    const productDescription = formData.get("description") as string
    const callObjective = formData.get("selected-goal") as string
    const tone = formData.get("tone") as string
   
    const prompt = `
    Tu es un expert en cold-calling. Génère un script d'appel commercial en français basé sur les informations suivantes :
    
    - Notre nom : ${ourName}
    - Notre entreprise : ${ourCompany}
    - Nom du prospect : ${prospectName}
    - Entreprise du prospect : ${prospectCompany}
    - Secteur d'activité : ${industry}
    - Produit/Service : ${productName}
    - Description du produit : ${productDescription}
    - Objectif de l'appel : ${callObjective}
    - Ton souhaité : ${tone}
   
    IMPORTANT : Adapte ton approche selon le type de prospect :
    - Si l'entreprise du prospect est renseignée : approche B2B/professionnelle
    - Si l'entreprise du prospect est vide ou "particulier" : approche B2C/particulier
    
    Crée un script réaliste et structuré qui inclut :
    1. Salutation et présentation
    2. Introduction et contexte
    3. Proposition de valeur adaptée au prospect (B2B ou B2C)
    4. Gestion des objections courantes
    5. Call-to-action clair
    
    Le script doit être naturel, adapté au ton demandé et utiliser toutes les informations fournies pour personnaliser l'approche.
    
    IMPORTANT : Retourne UNIQUEMENT un objet JSON valide avec cette structure exacte :
    {
      "script": "Ton script commercial complet ici...",
      "objections": [
        {
          "objection": "Objection spécifique au produit/secteur",
          "response": "Réponse personnalisée adaptée au contexte"
        },
        {
          "objection": "Objection spécifique au produit/secteur", 
          "response": "Réponse personnalisée adaptée au contexte"
        },
        {
          "objection": "Objection spécifique au produit/secteur",
          "response": "Réponse personnalisée adaptée au contexte"
        }
      ]
    }
    
    Les objections doivent être spécifiques au produit/service (${productName}) et adaptées au type de prospect :
    - Pour un prospect B2B : objections liées au budget, aux processus d'achat, à la concurrence, à l'implémentation
    - Pour un prospect B2C : objections liées au prix, au besoin, à la confiance, à la concurrence
    Adapte les objections et réponses au contexte réel de ce que tu vends et à qui tu le vends.
    
    Assure-toi que toutes les guillemets sont correctement fermés et que le JSON est valide.
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