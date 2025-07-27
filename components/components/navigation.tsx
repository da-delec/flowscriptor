"use client";
import React, { use } from "react";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BorderBeam } from "../magicui/border-beam";
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

import { Badge } from "@/components/ui/badge"

import src from "@/public/logo.png"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { RiAdminLine } from "react-icons/ri";
import { FiRefreshCw } from "react-icons/fi";
import { MessageSquare } from "lucide-react";

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
  plan: string | undefined;
  isAdmin: boolean | undefined;
  image?: string | null | undefined;
  scriptGenerated: number;
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

  const handleRefresh = () => {
    router.refresh();
  };

  console.log(typeof(session.plan));
  return (
    <div
      id="navbar_dashboard"
      className=" h-[68px] flex justify-between items-center bg-slate-900 text-slate-100 border-slate-700/70  w-screen border-b "
    >
      <div id="logo" className=" ml-5 h-full flex w-1/5 md:ml-36 items-center">
        <Image className=" mr-1" alt="logo" src={src} height={40} width={40} />
        <h1 className=" font-semibold text-slate-50 my-auto text-xl">
          Callia
        </h1>
      </div>
      <div
        id="tablet-menu"
        className=" items-center  flex justify-end h-full w-3/5"
      >
        <div className="  w-lg flex flex-col justify-center items-end">
        <Badge className={`${session.plan == "ULTRA" && "bg-green-500/55 border border-green-400/65"} ${session.plan === "STARTER" && "bg-blue-500/55 border border-blue-400/65"} ${session.plan === "FREE" && "bg-gray-500/55 border border-gray-400/65"} relative  border  mr-3`}>{session.plan} <BorderBeam></BorderBeam></Badge>
        <div className="flex items-center gap-2 mt-1">
          <p className=" text-xs text-slate-400">{session.scriptGenerated} scripts générés</p>
          <button 
            onClick={handleRefresh}
            className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded-md hover:bg-slate-800/50"
            title="Actualiser le compteur"
          >
            <FiRefreshCw className="w-3 h-3" />
          </button>
        </div>
        </div>
       
        <Menu_button />
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none rounded-full hover:scale-105 bg-indigo-500 cursor-pointer mr-6 text-white h-[40px] md:mr-30 w-[40px] min-w-[40px] flex items-center justify-center">
            {session?.name.split('')[0].toUpperCase()}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex cursor-pointer" onClick={() => LogoutUser()}>
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

            <DropdownMenuItem asChild>
              <Link href={"/user_dashboard/objections"}>
                <MessageSquare className="mr-2" />
                Gestion des Objections
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
      </div>
    </div>
  );
};

export default Navigation;
