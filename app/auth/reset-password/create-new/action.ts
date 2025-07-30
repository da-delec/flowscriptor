"use server"

import { authClient } from "@/lib/auth-client";
import { z } from "zod";

const ResetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(8),
});

export async function resetPasswordAction(token: string, newPassword: string) {
  try {
    // Valider les données d'entrée
    const validatedData = ResetPasswordSchema.parse({
      token,
      password: newPassword,
    });

    // Utiliser better-auth pour réinitialiser le mot de passe
    try {
      await authClient.resetPassword({
        token: validatedData.token,
        newPassword: validatedData.password,
      });
      
      return {
        success: true,
        message: "Mot de passe mis à jour avec succès",
      };
    } catch (resetError) {
      return {
        success: false,
        error: "Erreur lors de la réinitialisation du mot de passe",
      };
    }
  } catch (error) {
    console.error("Erreur lors de la réinitialisation du mot de passe:", error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Données invalides",
      };
    }

    return {
      success: false,
      error: "Erreur lors de la réinitialisation du mot de passe",
    };
  }
} 