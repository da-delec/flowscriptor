"use client"

import React from 'react'
import { Button } from './ui/button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const LoginButton = () => {
    const router = useRouter()

    async function SignUpGithub () {
      await authClient.signIn.social({
        provider:"github",
        callbackURL:"/user_dashboard"
      },
      {
        onSuccess:()=>{
          router.push("/user_dashboard")
  
        }
      }
    )
    }
  return (
    <div className=' flex-col flex mt-3 w-full  justify-center ' id='social-provider'>
          <Button onClick={SignUpGithub} className=' w-[90%] text-slate-100  mx-auto my-3 border-slate-700 border bg-slate-800 '>
          <FaGithub />
 
            Github</Button>
          <Button className=' w-[90%] text-slate-100  my-3 mx-auto border-slate-700 border bg-slate-800 '>
          <FcGoogle />

            Google</Button>
           </div>
  )
}

export default LoginButton
