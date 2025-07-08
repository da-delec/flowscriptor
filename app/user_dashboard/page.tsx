import React from 'react'
import Form_and_script from './components/form_and_script'
import Script_history from './components/script_history'
import { prisma } from '@/lib/prisma'
 const page = async () => {
  const user = await prisma.user.findMany();
  console.log(user)
  return (
    <div className=' h-screen flex w-screen '>
       <Script_history />
       <Form_and_script />
      
    </div>
  )
}

export default page
