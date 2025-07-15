import React from 'react'
import { LoginForm } from './form'
import { ShineBorder } from '@/components/magicui/shine-border'
const SignIn = () => {
  return (
    <div className=' h-screen bg-slate-950 w-screen flex justify-center items-center'>
        <div className=' h-[90%] w-[80%] flex justify-center items-center  rounded-md'>
         
        <LoginForm />
        
        </div>
      
    </div>
  )
}

export default SignIn
