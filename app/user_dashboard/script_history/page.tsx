"use client"
import React from 'react'
import History_card from './components/History_card'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSession } from '../context/sessionContext'
import Script_list from './components/Script_list'






const Script_history =  () => {
  type userScript =  {
    Script: string;
    Id: string;
    Title: string;
    Category: string;
    CreatedAt: Date;
    userId: string;
    isFavorite: boolean;
  }[];

const [userScript,setUserScript] = useState<userScript>([])
const user = useSession();
async function getValue () {
  const reponse = await fetch(`http://localhost:3000/api/get_user_script/${user?.id}`)
  const json = await reponse.json()
  setUserScript(json)
}

 
useEffect(()=>{
  getValue()
},[])



  return (
    <div className=' h-[calc(100vh-68px)] overflow-y-auto flex flex-col mt-5  items-center w-screen space-y-6 '>
      <div id='filter-container' className=' ml-16 w-full'>
      </div>
     <Script_list data={userScript} />

      
    </div>
  )
}

export default Script_history
