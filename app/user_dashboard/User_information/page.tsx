
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { authClient } from '@/lib/auth-client'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { getUser  } from "@/lib/authUser";
import { redirect } from "next/navigation";
import { Suspense, use } from "react";
import UserInfos from "./userInfos";




 const User_information = async () => {
  const user = await getUser();
  if (!user) {
    // SSR redirect
    return <div className="text-white text-2xl">Redirecting...</div>;
  }
  return (
    <div className="h-[90vh] w-screen flex justify-center items-center">
      <UserInfos user={user} />
    </div>
  );
};

export default User_information;
