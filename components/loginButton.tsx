"use client"

import React from 'react'
import { Button } from './ui/button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'

const LoginButton = () => {
    const router = useRouter()
    const [isLoadingGithub, setIsLoadingGithub] = React.useState(false)
    const [isLoadingGoogle, setIsLoadingGoogle] = React.useState(false)

    async function SignUpGithub() {
      setIsLoadingGithub(true)
      try {
        await authClient.signIn.social({
          provider: "github"
        })
      } catch (error) {
        toast.error("Erreur lors de la connexion avec GitHub")
      } finally {
        setIsLoadingGithub(false)
      }
    }

    async function SignUpGoogle() {
      setIsLoadingGoogle(true)
      try {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: "/user_dashboard"
        })
      } catch (error) {
        console.error("Erreur Google:", error)
        toast.error("Erreur lors de la connexion avec Google")
      } finally {
        setIsLoadingGoogle(false)
      }
    }

  return (
    <div className='flex flex-col justify-center w-full mt-3' id='social-provider'>
      <Button 
        onClick={SignUpGithub} 
        className='w-[90%] text-slate-100 mx-auto my-3 border-slate-700 border bg-slate-800 hover:bg-slate-700 transition-all duration-200'
        disabled={isLoadingGithub || isLoadingGoogle}
      >
        {isLoadingGithub ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
            Connexion...
          </div>
        ) : (
          <>
            <FaGithub className="mr-2" />
            Github
          </>
        )}
      </Button>
      
      <Button 
        onClick={SignUpGoogle} 
        className='w-[90%] text-slate-100 my-3 mx-auto border-slate-700 border bg-slate-800 hover:bg-slate-700 transition-all duration-200'
        disabled={isLoadingGithub || isLoadingGoogle}
      >
        {isLoadingGoogle ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
            Connexion...
          </div>
        ) : (
          <>
            <FcGoogle className="mr-2" />
            Google
          </>
        )}
      </Button>
    </div>
  )
}

export default LoginButton
