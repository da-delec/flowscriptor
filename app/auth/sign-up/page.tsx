
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
    <div className=' h-screen bg-slate-950 w-screen flex justify-center items-center'>
       <div className=' h-[90%] w-[80%] flex justify-center items-center  rounded-md'>
       
        <ProfileForm />
        
      
       </div>
        
      
    </div>
  )
}

export default page
