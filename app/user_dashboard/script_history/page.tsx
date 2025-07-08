import React from 'react'
import { prisma } from '@/lib/prisma'
import History_card from './components/History_card'

const Script_history = async () => {
  const userScript = await prisma.script.findMany({
    where:{
      UserId:"15307807-0dcd-4173-9493-6a6e4250de2e"
    }
  })
  return (
    <div className=' h-[calc(100vh-68px)] overflow-y-auto flex flex-col mt-5  items-center w-screen space-y-6 '>
      {userScript.map((item)=>{
        return (
          <History_card infos={item} key={item.Id} />
        )
      })}

      
    </div>
  )
}

export default Script_history
