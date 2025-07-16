"use client";
import React, { use } from "react";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";

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
} from "@/components/ui/dropdown-menu";
import src from "@/public/logo.png"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";

import { useEffect } from "react";
import { useSession } from "@/app/user_dashboard/context/sessionContext";
import Link from "next/link";
import Menu_button from "./menu_button";

type User = {
  id: string;
  name: string;
  emailVerified: boolean;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  isAdmin:boolean |undefined;
  image?: string | null | undefined | undefined;
};

const Navigation = ({ session }: { session: User }) => {
  const router = useRouter();

  const user:User|null = useSession();

  async function LogoutUser() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/sign-up");
        },
      },
    });
  }
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
      <div
        id="tablet-menu"
        className=" items-center flex justify-end h-full w-1/5"
      >
        <DropdownMenu>
          <DropdownMenuTrigger className=" border-none hover:scale-105 bg-indigo-500 cursor-pointer text-white rounded-md h-[60%] min-w-[79px] ">
            {session?.name}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => LogoutUser()}>
              {" "}
              <CiLogout />
              Logout
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link
                className="  flex"
                href={"/user_dashboard/User_information"}
              >
                <MdOutlineAccountCircle className="  mr-2" />
                Information
              </Link>
            </DropdownMenuItem>
            
            {user?.isAdmin ?(
            
            <DropdownMenuItem asChild>
                <Link href={"/user_dashboard/admin_dashboard"}>
                <RiAdminLine />
              Admin Dashboard
              </Link>
              </DropdownMenuItem>
              ):null}
          </DropdownMenuContent>
        </DropdownMenu>
        <Menu_button />
      </div>
    </div>
  );
};

export default Navigation;
