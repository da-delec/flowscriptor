import React from 'react'
import { LoginForm } from './form'
const SignIn = () => {
  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
        <div className=' h-[70%] w-[60%] border border-gray-200 rounded-md'>
            <h1 className=' text-2xl font-semibold mt-5 ml-2'>Login</h1>
        <LoginForm />
        </div>
      
    </div>
  )
}

export default SignIn
