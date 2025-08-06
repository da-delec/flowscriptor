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
          provider: "github",
          callbackURL: "/user_dashboard"
        },
        {
          onSuccess: () => {
            router.push("/user_dashboard")
          },
          onError: (error) => {
            toast.error("Erreur lors de la connexion avec GitHub")
          }
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
        },
        {
          onSuccess: () => {
            router.push("/user_dashboard")
          },
          onError: (error) => {
            toast.error("Erreur lors de la connexion avec Google")
          }
        })
      } catch (error) {
        toast.error("Erreur lors de la connexion avec Google")
      } finally {
        setIsLoadingGoogle(false)
      }
    }

  return (
    <div className='flex-col flex mt-3 w-full justify-center' id='social-provider'>
      <Button 
        onClick={SignUpGithub} 
        className='w-[90%] text-slate-100 mx-auto my-3 border-slate-700 border bg-slate-800 hover:bg-slate-700 transition-all duration-200'
        disabled={isLoadingGithub || isLoadingGoogle}
      >
        {isLoadingGithub ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
