import React from 'react'
import { LoginForm } from './form'
import { ShineBorder } from '@/components/magicui/shine-border'
import src from "@/lib/Frame 2.png"
import Image from 'next/image'
import { unstable_ViewTransition as ViewTransition } from 'react'
const SignIn = () => {
  return (
    <ViewTransition enter={"slide-in"} >
    <div className=' h-screen bg-slate-950 w-screen flex justify-center items-center'>
        <div className=' h-[90%] w-[80%] flex justify-center items-center  rounded-md'>
      
        <LoginForm />
       
        
        </div>
      
    </div>
     </ViewTransition>

  )
}

export default SignIn
