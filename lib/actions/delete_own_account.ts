"use server";
import { getUser } from '@/lib/authUser';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteOwnAccount() {
  const user = await getUser();
  if (!user) throw new Error('Not authenticated');
  await prisma.user.delete({ where: { id: user.id } });
  revalidatePath('/user_dashboard/User_information');
  redirect('/auth/sign-in');
} 