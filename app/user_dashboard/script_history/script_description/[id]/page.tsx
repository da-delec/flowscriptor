import React from 'react'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';

import { TypingAnimation } from '@/components/magicui/typing-animation'
const Script_description = async ({params}:{params:{id:string}}) => {
  const {id} = await params
  const script = await prisma.script.findUnique({
    where:{
      Id:id
    },
    select:{
      Title:true,
      Script:true,
      Category:true,
      CreatedAt:true,
    }
    
    
  })



  console.log(id)
  return (
    <div className=' w-full flex h-[90vh]' >
      <div className=' w-1/5 sm:w-[80px]  h-full'>
        <Link href={"/user_dashboard/script_history"}>
        <Button className=' hover:bg-indigo-300 cursor-pointer bg-indigo-500 mt-5 ml-5'>
         <IoMdArrowBack />

        </Button>
        </Link>
      </div>  
      <div id='right_part' className=' flex-1 flex-col flex justify-center items-center   '>
        <div className='  max-w-[600px] flex w-full justify-start ml-12'>
         <h1 className='  font-semibold text-3xl'>{script?.Title}</h1>
         </div>
        <div className=' mt-6 h-[80%] max-w-[600px] min-h-[80%] w-[90%] rounded-2xl shadow-xl border border-gray-300/30 overflow-y-auto'>
          <p  className=' ml-2 mt-6 font-medium text-[hsl(0,0%,20%)] text-sm'>{script?.Script}</p>
        </div> 
      </div>
        
      
    </div>
  )
}

export default Script_description
