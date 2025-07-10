import React from "react";
import { Button } from "./ui/button";
import logo from "../lib/logo.png";
import Link from "next/link";
import Image from "next/image";
import { CiLogin } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Nav = () => {
  return (
    <header
      id=""
      className=" h-[70px] items-center w-screen border-b justify-between flex border-gray-200"
    >
      <div id="Logo-components" className=" flex items-center h-full ml-4">
        <Image alt="logo" src={logo} height={50} width={50} />
        <h1 className=" text-xl ml-1">Callia</h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className=" hover:bg-indigo-400 h-[55%] bg-indigo-500 rounded-md text-white w-36 cursor-pointer mr-3">
          Sign Up or Login
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <Link  href={"/auth/sign-up"}>
          <DropdownMenuItem >
           
            {" "}
            <CiLogin />
            Sign-up
           
          </DropdownMenuItem>
          </Link>
          <Link href={"/auth/sign-in"}>
          <DropdownMenuItem>
            {" "}
            <MdOutlineAccountCircle />
            Login
          </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Nav;
