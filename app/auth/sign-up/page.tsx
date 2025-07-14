
"use client"
import React from 'react'
import { ProfileForm } from './form';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import LoginButton from '@/components/loginButton';


const page = () => {
 
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
       <div className=' h-[90%] max-w-[400px] w-[60%] flex-col  rounded-xl  border border-gray-200 flex justify-center items-center'> 
        <h1 className=' font-semibold text-xl'>Sign up a new Account</h1>
        <ProfileForm />
        <div className=' w-[60%] h-[1px] mt-4 bg-gray-300/65'></div>
        <h2 className=' text-sm mt-3'>Do you have an account ?<Link className=' text-indigo-500 ml-1' href={"/auth/sign-in"}>Login</Link> </h2>
        <div className=' w-[60%]  h-[1px] mt-4 bg-gray-300/65'></div>
        <h2 className=' mt-3 '>or</h2>
         <LoginButton />
        </div>
      
    </div>
  )
}

export default page
