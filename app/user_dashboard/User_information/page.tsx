
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { authClient } from '@/lib/auth-client'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { getUser  } from "@/lib/authUser";
import { redirect } from "next/navigation";
import { use } from "react";





 const User_information = async  () => {

   const user = await getUser(); 
   if (!user) {
    redirect("/auth/sign-in")
   }  


   

 
   
  return (
    <div className=' h-[90vh] w-screen flex justify-center items-center'>
        <Card className=' w-[80%]'>
            <CardHeader className=" text-2xl font-semibold">
                Your profile
            </CardHeader>
            <CardContent>
                <CardTitle>Username:</CardTitle>
                <h1 className=" my-2">{user?.name}</h1>
                <CardTitle>Email:</CardTitle>
                <h1 className=" my-2">{user?.email}</h1>
                <CardTitle>
                  
                </CardTitle>
            </CardContent>
        </Card>
        
      
    </div>
  )
}

export default User_information
