"use client"
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod"
import { Button } from "@/components/ui/button"
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
const LoginFormSchema = z.object({
 
  email: z.string(),
  password:z.string(),
})
 
export function LoginForm() {
    const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
     
      email:"",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
      await authClient.signIn.email({
        email:values.email,
     
        password:values.password,
        

        
      },
    { 
      onSuccess:()=>{
        router.push("/user_dashboard");
        router.refresh();
      }
     
    })
  
  }
   return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="  mx-7 mt-7 space-y-8">
       
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Type your email" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Type your password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button className=' bg-indigo-500 cursor-pointer hover:bg-indigo-300' type="submit">Submit</Button>
      </form>
    </Form>
  )

}
