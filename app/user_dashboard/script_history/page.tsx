import React from 'react'
import { prisma } from '@/lib/prisma'
import Script_list from './components/Script_list';
import { headers } from "next/headers";
import { auth } from '@/lib/auth';

const Script_history = async () => {
  type UserScript = {
    Script: string;
    Id: string;
    Title: string;
    Category: string;
    CreatedAt: Date;
    userId: string;
    isFavorite: boolean;
    isClosed: boolean;
  };

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
    select: {
      scripts: true,
    },
  });

  const userScripts: UserScript[] = user?.scripts || [];

  return (
    <div className='h-[calc(100vh-68px)] overflow-y-auto flex flex-col mt-5 items-center w-screen space-y-6'>
      <div id='filter-container' className='ml-16 w-full'></div>
      <Script_list data={userScripts} />
    </div>
  );
};

export default Script_history;
