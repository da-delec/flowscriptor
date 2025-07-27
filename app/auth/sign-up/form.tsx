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
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string(),
  password:z.string(),
})
 
export function ProfileForm() {
    const router = useRouter();
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
      await authClient.signUp.email({
        email:values.email,
        name:values.username,
        password:values.password
      },
    {
        onSuccess:()=>{
            router.push("/user_dashboard")

        },
        onError:(error)=>{
         toast.error("Your email is already in use")
        }
    })
  
  }
   return (
    <Card className=' overflow-hidden flex  justify-center flex-col  relative bg-slate-900 h-[full] max-w-[350px] w-full border border-slate-800  text-gray-100 '>
       <CardHeader className=' '>
        
        <CardTitle className=' text-xl text-slate-100'>Sign up</CardTitle>
        <CardTitle className=' text-sm text-slate-400' >Create a new Account to start creating</CardTitle>
      </CardHeader>
      <CardContent>
    <Form {...form} >
      <form  onSubmit={form.handleSubmit(onSubmit)} className="  mx-2 flex flex-col justify-center space-y-3">
        <FormField
        
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className='  '>
              <FormLabel  className=' text-slate-300'>Username</FormLabel>
              <FormControl>
                <Input className='   placeholder:text-sm border-slate-700 placeholder:text-slate-400 focus:ring-0 bg-slate-800 text-gray-100 ' placeholder="Type your username" {...field} />
              </FormControl>
              <FormDescription >
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=' w-full'>
              <FormLabel  className=' text-slate-300'>Email</FormLabel>
              <FormControl>
                <Input className='   placeholder:text-sm border-slate-700 placeholder:text-slate-400 focus:ring-0 bg-slate-800 text-gray-100 ' placeholder="Type your email" {...field} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className=' mx-auto w-full'>
              <FormLabel  className=' text-slate-300'>Password</FormLabel>
              <FormControl>
                <Input className='   placeholder:text-sm border-slate-700 placeholder:text-slate-400 focus:ring-0 bg-slate-800 text-gray-100 ' placeholder="Type your password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button className=' mt-2 bg-ring cursor-pointer hover:bg-indigo-300' type="submit">Create an Account</Button>
      </form>
      
    </Form>
    </CardContent>
    <CardFooter className=' flex flex-col'>
    <h2 className=' text-sm mt-3'>Do you have an account ?<Link className=' text-indigo-500 ml-1' href={"/auth/sign-in"}>Login</Link> </h2>
        <div className=' w-[60%]  h-[1px] mt-4 bg-gray-300/65'></div>
        <h2 className=' mt-3 '>or</h2>
       <LoginButton />
    </CardFooter>
    <BorderBeam size={200} duration={6} />
      <BorderBeam size={200} delay={3} duration={6} />
    </Card>
  )

}
