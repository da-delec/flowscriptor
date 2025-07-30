"use client"
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod"
import { toast } from "sonner"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { BorderBeam } from '@/components/magicui/border-beam'
import { RippleButton } from '@/components/magicui/ripple-button'
import { MdOutlineLock } from 'react-icons/md'
import { resetPasswordAction } from './action'
const CreateNewPasswordSchema = z.object({
  password: z.string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
    .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
    .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
})
 
export function CreateNewPasswordForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const form = useForm<z.infer<typeof CreateNewPasswordSchema>>({
    resolver: zodResolver(CreateNewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof CreateNewPasswordSchema>) {
    if (!token) {
      toast.error("Token de réinitialisation manquant");
      return;
    }

    setError(null);
    setIsLoading(true);
    try {
      const result = await resetPasswordAction(token, values.password);
      
      if (result.success) {
        setIsSuccess(true);
        toast.success("Mot de passe mis à jour avec succès !");
      } else {
        setError(result.error || "Erreur lors de la mise à jour du mot de passe");
        toast.error(result.error || "Erreur lors de la mise à jour du mot de passe");
      }
    } catch (err) {
      console.error("Erreur lors de la réinitialisation:", err);
      toast.error("Erreur lors de la réinitialisation du mot de passe");
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className='overflow-hidden relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-gray-100 shadow-2xl'>
        <CardHeader className="pb-6">
          <CardTitle className='text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
            Mot de passe mis à jour !
          </CardTitle>
          <CardDescription className='text-center text-slate-400'>
            Votre mot de passe a été réinitialisé avec succès
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <MdOutlineLock className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-slate-300">
              Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className='flex flex-col space-y-4 pt-6'>
          <RippleButton 
            className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl' 
            onClick={() => router.push("/auth/sign-in")}
          >
            Se connecter
          </RippleButton>
        </CardFooter>
        
        <BorderBeam size={200} duration={6} />
        <BorderBeam size={200} delay={3} duration={6} />
      </Card>
    );
  }

  if (!token) {
    return (
      <Card className='overflow-hidden relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-gray-100 shadow-2xl'>
        <CardHeader className="pb-6">
          <CardTitle className='text-2xl font-bold text-center bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent'>
            Token invalide
          </CardTitle>
          <CardDescription className='text-center text-slate-400'>
            Le lien de réinitialisation est invalide ou expiré
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-slate-300">
              Veuillez demander un nouveau lien de réinitialisation.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className='flex flex-col space-y-4 pt-6'>
          <RippleButton 
            className='w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl' 
            onClick={() => router.push("/auth/reset-password")}
          >
            Demander un nouveau lien
          </RippleButton>
        </CardFooter>
        
        <BorderBeam size={200} duration={6} />
        <BorderBeam size={200} delay={3} duration={6} />
      </Card>
    );
  }

  return (
    <Card className='overflow-hidden relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-gray-100 shadow-2xl'>
      <CardHeader className="pb-6">
        <CardTitle className='text-2xl font-bold text-center bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent'>
          Créer un nouveau mot de passe
        </CardTitle>
        <CardDescription className='text-center text-slate-400'>
          Choisissez un nouveau mot de passe sécurisé
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {error && (
          <div className="mb-4 text-sm text-red-300 bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-3 text-center backdrop-blur-sm">
            {error}
          </div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-slate-300 font-medium'>Nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input 
                      type="password"
                      className='placeholder:text-sm border-slate-600 bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 transition-all duration-200 backdrop-blur-sm' 
                      placeholder="Entrez votre nouveau mot de passe" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-slate-300 font-medium'>Confirmer le mot de passe</FormLabel>
                  <FormControl>
                    <Input 
                      type="password"
                      className='placeholder:text-sm border-slate-600 bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 transition-all duration-200 backdrop-blur-sm' 
                      placeholder="Confirmez votre nouveau mot de passe" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="text-sm text-slate-400 bg-slate-800/30 rounded-lg p-3">
              <p className="font-medium mb-2">Votre mot de passe doit contenir :</p>
              <ul className="space-y-1 text-xs">
                <li>• Au moins 8 caractères</li>
                <li>• Au moins une majuscule</li>
                <li>• Au moins une minuscule</li>
                <li>• Au moins un chiffre</li>
              </ul>
            </div>
            
            <RippleButton 
              className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl' 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Mise à jour en cours...
                </div>
              ) : (
                "Mettre à jour le mot de passe"
              )}
            </RippleButton>
          </form>
        </Form>
      </CardContent>
      
      <CardFooter className='flex flex-col space-y-4 pt-6'>
        <div className="text-center text-sm text-slate-400">
          Vous vous souvenez de votre mot de passe ?{" "}
          <Link 
            className='text-indigo-300 hover:text-indigo-200 underline underline-offset-2 transition-colors duration-200' 
            href={"/auth/sign-in"}
          >
            Se connecter
          </Link>
        </div>
      </CardFooter>
      
      <BorderBeam size={200} duration={6} />
      <BorderBeam size={200} delay={3} duration={6} />
    </Card>
  )
} 