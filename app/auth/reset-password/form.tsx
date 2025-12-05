"use client"
import React, { useEffect } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client' 
import { BorderBeam } from '@/components/magicui/border-beam'
import { ShineBorder } from '@/components/magicui/shine-border'
import { RippleButton } from '@/components/magicui/ripple-button'
import { MdOutlineEmail } from 'react-icons/md'

const ResetPasswordSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide"),
})
 
export function ResetPasswordForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ResetPasswordSchema>) {
    setError(null);
    setIsLoading(true);
          try {
        await authClient.requestPasswordReset({
          email: values.email,
          redirectTo: "/auth/reset-password/create-new",
        });
      setIsSuccess(true);
      toast.success("Email de réinitialisation envoyé !");
    } catch (err) {
      console.error("Erreur lors de l'envoi de l'email:", err);
      toast.error("Erreur lors de l'envoi de l'email. Vérifiez votre adresse email.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className='overflow-hidden relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-gray-100 shadow-2xl'>
        <CardHeader className="pb-6">
          <CardTitle className='text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
            Email envoyé !
          </CardTitle>
          <CardDescription className='text-center text-slate-400'>
            Vérifiez votre boîte de réception
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <MdOutlineEmail className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-slate-300">
              Nous avons envoyé un lien de réinitialisation à <strong>{form.getValues("email")}</strong>
            </p>
            <p className="text-sm text-slate-400">
              Cliquez sur le lien dans l'email pour réinitialiser votre mot de passe.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className='flex flex-col space-y-4 pt-6'>
          <RippleButton 
            className='w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl' 
            onClick={() => router.push("/auth/sign-in")}
          >
            Retour à la connexion
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
          Réinitialiser le mot de passe
        </CardTitle>
        <CardDescription className='text-center text-slate-400'>
          Entrez votre email pour recevoir un lien de réinitialisation
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-slate-300 font-medium'>Email</FormLabel>
                  <FormControl>
                    <Input 
                      className='placeholder:text-sm border-slate-600 bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 transition-all duration-200 backdrop-blur-sm' 
                      placeholder="Entrez votre email" 
                      type="email"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <RippleButton 
              className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl' 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Envoi en cours...
                </div>
              ) : (
                "Envoyer le lien de réinitialisation"
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