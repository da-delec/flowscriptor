"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveToDb(formData: FormData) {
  try {
    const title = formData.get("scriptName") as string;
    const category = formData.get("selected-goal") as string;
    const scriptprops = formData.get("scriptToSave") as string;
    const user_id = formData.get("userId") as string;
    const isClosed = formData.get("isClosed") === "true";

    // Validation des données
    if (!title || !category || !scriptprops || !user_id) {
      throw new Error("Données manquantes");
    }

    const reponse = await prisma.script.create({
      data: {
        Title: title,
        Script: scriptprops,
        Category: category,
        userId: user_id,
        isClosed: isClosed
      }
    });

    revalidatePath("/user_dashboard");
    console.log("Script sauvegardé:", title, category);
    
    return { success: true, message: "Script sauvegardé avec succès" };
  } catch (error) {
    console.error("Erreur lors de la sauvegarde:", error);
    throw new Error("Erreur lors de la sauvegarde du script");
  }
}
