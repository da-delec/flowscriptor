"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function toggleFavorite(scriptId: string) {
  try {
    // Vérifier l'authentification
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session?.user?.id) {
      return { error: "Non autorisé" };
    }

    // Récupérer le script actuel
    const currentScript = await prisma.script.findUnique({
      where: { Id: scriptId },
      select: { isFavorite: true, userId: true }
    });

    if (!currentScript) {
      return { error: "Script non trouvé" };
    }

    // Vérifier que l'utilisateur est propriétaire du script
    if (currentScript.userId !== session.user.id) {
      return { error: "Non autorisé" };
    }

    // Basculer le statut favori
    const updatedScript = await prisma.script.update({
      where: { Id: scriptId },
      data: { isFavorite: !currentScript.isFavorite },
      select: { isFavorite: true }
    });

    // Revalider le cache pour mettre à jour l'interface
    revalidatePath("/user_dashboard/script_history");

    return { 
      success: true, 
      isFavorite: updatedScript.isFavorite 
    };

  } catch (error) {
    console.error("Erreur lors du basculement du favori:", error);
    return { error: "Erreur lors de la mise à jour" };
  }
} 