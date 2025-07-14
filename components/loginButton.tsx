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
    <div className=' mt-3' id='social-provider'>
          <Button onClick={SignUpGithub} className=' mx-3'>
          <FaGithub />

            Github</Button>
          <Button className=' mx-3'>
          <FcGoogle />

            Google</Button>
           </div>
  )
}

export default LoginButton
