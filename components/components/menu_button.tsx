import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { MdOutlineMenu } from 'react-icons/md'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { CiCircleList } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { LuLayoutTemplate } from "react-icons/lu";
import { FaRegQuestionCircle } from 'react-icons/fa'


const Menu_button =  () => {
   

  

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className=" h-full focus:border-none  cursor-pointer">
        <div className=" flex h-[85%] hover:bg-gray-200 justify-center items-center w-10 mx-3 rounded-md">
        <MdOutlineMenu className=" text-2xl" />
        </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className=' w-36 z-50'>
      <DropdownMenuItem className=" cursor-pointer">
      <Link className=" flex" href={"/user_dashboard"}>
      <MdOutlineSpaceDashboard className=" mr-3" />
      
      Tableau de Bord
      </Link>
      </DropdownMenuItem>
      <Link href={"/user_dashboard/script_history"}>
      <DropdownMenuItem className="  w-full flex cursor-pointer">
      <CiCircleList />
        Historique des Scripts
   
      </DropdownMenuItem>
      </Link>
      <Link href={"/user_dashboard/objections"}>
<DropdownMenuItem className=" flex cursor-pointer">
  <FaRegQuestionCircle />
  Objections
</DropdownMenuItem>
</Link>
<Link href={"/user_dashboard/script_template"}>
<DropdownMenuItem className=" flex cursor-pointer">
  <LuLayoutTemplate />
  Modèle de Script
</DropdownMenuItem>
</Link>
      
      
      <Link href={"/user_dashboard/joinUs"}>
      <DropdownMenuItem className=" flex cursor-pointer">
      <BsTelephone />
Rejoignez-nous          </DropdownMenuItem>
</Link>


  
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default Menu_button
