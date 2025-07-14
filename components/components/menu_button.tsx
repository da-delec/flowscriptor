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

const Menu_button =  () => {
   

  

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className=" h-full focus:border-none  cursor-pointer">
        <div className=" flex h-[85%] hover:bg-gray-200 justify-center items-center w-10 mx-3 rounded-md">
        <MdOutlineMenu className=" text-2xl" />
        </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className=' z-50'>
      <DropdownMenuItem className=" cursor-pointer">
      <Link className=" flex" href={"/user_dashboard"}>
      <MdOutlineSpaceDashboard className=" mr-3" />
      
      Dashboard
      </Link>
      </DropdownMenuItem>
      
      <DropdownMenuItem className=" flex cursor-pointer">
        <Link href={"user_dashboard/script_history"}>
      <CiCircleList />
        Script History
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem className=" flex cursor-pointer">
        Your plan
      </DropdownMenuItem>
      <DropdownMenuItem className=" flex cursor-pointer">
      <BsTelephone />
Join us          </DropdownMenuItem>
  
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default Menu_button
