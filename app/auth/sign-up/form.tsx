"use client"
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod"
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
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client' 
import { BorderBeam } from '@/components/magicui/border-beam'
import LoginButton from '@/components/loginButton'
import Link from 'next/link'
import { toast } from 'sonner'
import { RippleButton } from '@/components/magicui/ripple-button'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit contenir au moins 2 caractères.",
  }),
  email: z.string(),
  password:z.string(),
})
 
export function ProfileForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
      setIsLoading(true);
      await authClient.signUp.email({
        email:values.email,
        name:values.username,
        password:values.password
      },
    {
        onSuccess:()=>{
            toast.success("Compte créé avec succès !");
            router.push("/user_dashboard/pricing")
        },
        onError:(error)=>{
         toast.error("Cette adresse email est déjà utilisée")
        }
    }).finally(() => {
        setIsLoading(false);
    });
  }
   
  return (
    <Card className='overflow-hidden relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-gray-100 shadow-2xl'>
      <CardHeader className="pb-6">
        <CardTitle className='text-2xl font-bold text-center bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent'>
          Créer un compte
        </CardTitle>
        <CardDescription className='text-center text-slate-400'>
          Commencez votre aventure avec nous
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-slate-300 font-medium'>Nom d'utilisateur</FormLabel>
                  <FormControl>
                    <Input 
                      className='placeholder:text-sm border-slate-600 bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-100 transition-all duration-200 backdrop-blur-sm' 
                      placeholder="Entrez votre nom d'utilisateur" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-slate-400 text-xs">
                    Ce sera votre nom d'affichage public.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-slate-300 font-medium'>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      className='placeholder:text-sm border-slate-600 bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-100 transition-all duration-200 backdrop-blur-sm' 
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
                      className='placeholder:text-sm border-slate-600 bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-100 transition-all duration-200 backdrop-blur-sm' 
                      placeholder="Créez votre mot de passe" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <RippleButton 
              className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl' 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Création...
                </div>
              ) : (
                "Créer mon compte"
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
            <span className="px-2 bg-slate-900 text-slate-400">Ou créez votre compte avec</span>
          </div>
        </div>
        
        <LoginButton />
        
        <div className="text-center text-sm text-slate-400">
          Vous avez déjà un compte ?{" "}
          <Link 
            className='text-purple-300 hover:text-purple-200 underline underline-offset-2 transition-colors duration-200' 
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
