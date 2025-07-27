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
import { unstable_ViewTransition as ViewTransition} from 'react'
import { BorderBeam } from '@/components/magicui/border-beam'
const LoginFormSchema = z.object({
 
  email: z.string(),
  password:z.string(),
})
 
export function LoginForm() {
  const [error, setError] = React.useState<string | null>(null);
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
    try {
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess: () => {
            toast.success("Login successful!");
            router.push("/user_dashboard");
          },
          onError: (error) => {
            toast.error("Login failed. Please check your credentials.");
          },
        }
      );
    } catch (err) {
toast.error("Login failed. Please check your credentials.");}
  }



  return (
    
    <Card className='overflow-hidden relative bg-slate-900 h-[full] max-w-[350px] w-full border border-slate-800 text-gray-100'>
      <CardHeader>
        <CardTitle className='text-lg text-slate-200'>Login to your Account</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-900/30 border border-red-700 rounded-lg px-3 py-2 text-center">
            {error}
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-2 mt-7 flex flex-col justify-center space-y-8">
       
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' text-slate-300'>Email</FormLabel>
              <FormControl>
                <Input  className=' placeholder:text-sm border-slate-700 placeholder:text-slate-400 focus:ring-0 bg-slate-800 text-gray-100 ' placeholder="Type your email" {...field} />
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
              <FormLabel className=' text-slate-300'>Password</FormLabel>
              <FormControl className=' '>
                <Input  className=' bg-slate-800 placeholder:text-sm placeholder:text-slate-400 focus-visible:ring-amber-400 border-slate-700  ring-slate-900 ' placeholder="Type your password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Link className=' text-sm text-indigo-300 underline underline-offset-2' href={""}>Password forgot</Link>
        
        <Button className=' bg-ring   cursor-pointer hover:bg-indigo-300' type="submit">Login</Button>
      </form>
    </Form>
    </CardContent>
    <CardFooter className=' flex justify-center flex-col'>
      <CardTitle className=' mb-2'>Or Login with social</CardTitle>
      <LoginButton />
      <h1 className=' text-sm'>You don't have an Account , <Link className=' text-indigo-300 underline underline-offset-2' href={"/auth/sign-up"} >sign-up</Link></h1>
    </CardFooter>
   
    <BorderBeam size={200} duration={6} />
    <BorderBeam size={200} delay={3} duration={6} />
    </Card>
   

)

}
