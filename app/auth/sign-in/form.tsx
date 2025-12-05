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
import LoginButton from '@/components/loginButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client' 
import { BorderBeam } from '@/components/magicui/border-beam'
import { ShineBorder } from '@/components/magicui/shine-border'
import { RippleButton } from '@/components/magicui/ripple-button'

const LoginFormSchema = z.object({
 
  email: z.string(),
  password:z.string(),
})
 
export function LoginForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    setError(null);
    setIsLoading(true);
    try {
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess: () => {
            toast.success("Connexion réussie !");
            router.push("/user_dashboard");
          },
          onError: (error) => {
            toast.error("Échec de la connexion. Vérifiez vos identifiants.");
          },
        }
      );
    } catch (err) {
      toast.error("Échec de la connexion. Vérifiez vos identifiants.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className='overflow-hidden relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-gray-100 shadow-2xl'>
      <CardHeader className="pb-6">
        <CardTitle className='text-2xl font-bold text-center bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent'>
          Connexion
        </CardTitle>
        <CardDescription className='text-center text-slate-400'>
          Accédez à votre espace personnel
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
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-slate-300 font-medium'>Mot de passe</FormLabel>
                  <FormControl>
                    <Input 
                      type="password"
                      className='placeholder:text-sm border-slate-600 bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 transition-all duration-200 backdrop-blur-sm' 
                      placeholder="Entrez votre mot de passe" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end">
              <Link 
                className='text-sm text-indigo-300 hover:text-indigo-200 underline-offset-2 transition-colors duration-200' 
                href={"/auth/reset-password"}
              >
                Mot de passe oublié ?
              </Link>
            </div>
            
            <RippleButton 
              className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl' 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Connexion...
                </div>
              ) : (
                "Se connecter"
              )}
            </RippleButton>
          </form>
        </Form>
      </CardContent>
      
      <CardFooter className='flex flex-col space-y-4 pt-6'>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-slate-900 text-slate-400">Ou connectez-vous avec</span>
          </div>
        </div>
        
        <LoginButton />
        
        <div className="text-center text-sm text-slate-400">
          Vous n'avez pas de compte ?{" "}
          <Link 
            className='text-indigo-300 hover:text-indigo-200 underline underline-offset-2 transition-colors duration-200' 
            href={"/auth/sign-up"}
          >
            Créer un compte
          </Link>
        </div>
      </CardFooter>
      
      <BorderBeam size={200} duration={6} />
      <BorderBeam size={200} delay={3} duration={6} />
    </Card>
  )
}
