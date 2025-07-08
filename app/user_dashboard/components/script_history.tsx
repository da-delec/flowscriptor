import React from 'react'
import Script_cards from './script_cards'
import { prisma } from '@/lib/prisma'
const Script_history = async () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // pour tester le scroll
const scriptList = await prisma.script.findMany({
  where:{
    UserId:"15307807-0dcd-4173-9493-6a6e4250de2e"
  }
})
const lastScript = scriptList.slice(-5)


  return (
    <div className=" top-[68px] left-0 w-[45%] rounded-xl  md:w-[25%] h-[90vh] bg-[hsl(0,0%,100%)]">
      <h1 className=" text-xl sm:text-2xl mt-5 ml-5 mb-6 font-semibold">Script History</h1>

      <div
        id="Cards_list"
        className="flex flex-col gap-2 overflow-y-auto scroll-smooth no-scrollbar px-4 py-2 h-[calc(100%-80px)]"
      >
        {lastScript.map((item) => (
          <Script_cards key={item.Id} itemInfos={item}  />
        ))}
      </div>
    </div>
  )
}

export default Script_history
