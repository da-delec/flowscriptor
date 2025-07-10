"use client";
import { useState } from "react";
import Hidden_menu from "./hidden_menu";
import Add_script_button from "./add_script_button";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";


import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
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
import src from "../../../lib/logo.png";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";




const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function openModal() {
    setIsOpen(!isOpen);
  }
  const router = useRouter()

  const { 
    data: session, 
    isPending, //loading state
    error, //error object
    refetch //refetch the session
} = authClient.useSession() 

async function LogoutUser () {
   await authClient.signOut({
    fetchOptions:{
      onSuccess:()=>{
        router.push("/auth/sign-up")

      }
    }
   }
  
   );
   
}
console.log(session)
  return (
    <div
      id="navbar_dashboard"
      className=" h-[68px] flex justify-between items-center  w-screen border-b "
    >
      <div id="logo" className=" ml-5 h-full flex w-1/5 items-center">
      <Image className=" mr-1" alt="logo" src={src} height={55} width={55} />
        <h1 className=" font-semibold text-gray-950 my-auto text-2xl">
          Callia
        </h1>
      </div>
      <div id="tablet-menu" className=" items-center flex justify-end h-full w-1/5">
      <DropdownMenu>
      <DropdownMenuTrigger className=" border-none bg-indigo-500 cursor-pointer text-white rounded-md h-[60%] min-w-[79px] ">
     
       
      
        
       
        {session?.user.name}
        
   
      </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={LogoutUser}>  <CiLogout  />Logout</DropdownMenuItem>
          <DropdownMenuItem><MdOutlineAccountCircle />
          Information</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        <Button
          typeof=""
          onClick={openModal}
          className=" cursor-pointer h-full md:hidden w-14 flex justify-center bg-gray-white hover:bg-gray-400 text-black items-center mr-2"
          title="toggle"
        >
          <svg
            height="25"
            width="25"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2s18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>

      <AnimatePresence>{isOpen && <Hidden_menu isOpen={isOpen} />}</AnimatePresence>

      <div
        id="classic-menu"
        className=" hidden  md:flex  justify-end items-center w-1/2  h-full "
      >
        <Link
          className="hover:bg-[hsl(0,0%,95%)] flex items-center rounded-md   w-24 h-14  font-medium text-gray-950 text-[14px] mx-6"
          href={"/user_dashboard"}
        >
          Dashbaord
        </Link>
        <Link
          className="hover:bg-[hsl(0,0%,95%)] flex items-center rounded-md  w-24  h-14 font-medium text-gray-950 text-[14px] mx-6"
          href={"/"}
        >
          Scripts
        </Link>

        <Link
          className="hover:bg-[hsl(0,0%,95%)] flex items-center rounded-md w-24  h-14 font-medium text-gray-950 text-[14px] mx-6"
          href={"/"}
        >
          Ressources
        </Link>
        <Add_script_button />
      </div>
    </div>
  );
};

export default Navigation;
