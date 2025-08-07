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
   
    
    
    Crée un script réaliste et structuré qui inclut :
    1. Salutation et présentation
    2. Introduction et contexte
    3. Proposition de valeur adaptée au prospect
    4. Gestion des objections courantes
    5. Call-to-action clair
    
    Le script doit être naturel, adapté au ton demandé et utiliser toutes les informations fournies pour personnaliser l'approche.
    
    IMPORTANT : Retourne UNIQUEMENT un objet JSON valide avec cette structure exacte :
    {
      "script": "Ton script commercial complet ici...",
      "objections": [
        {
          "objection": "C'est trop cher",
          "response": "Je comprends que le budget soit une préoccupation. Beaucoup de nos clients pensaient la même chose avant de voir combien de temps et d'argent ils économisaient avec notre solution."
        },
        {
          "objection": "J'utilise déjà une autre solution",
          "response": "C'est tout à fait compréhensible. Nombre de nos clients ont fait la transition après avoir réalisé comment nous optimisons leur flux de travail et améliorons la collaboration d'équipe."
        },
        {
          "objection": "Je n'ai pas le temps de mettre ça en place maintenant",
          "response": "Je comprends. La bonne nouvelle, c'est que notre intégration prend moins d'une heure et nous fournissons un support complet pour que tout se passe en douceur."
        }
      ]
    }
    
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