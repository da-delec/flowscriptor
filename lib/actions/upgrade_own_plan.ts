"use server";
import { getUser } from '@/lib/authUser';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function upgradeOwnPlan() {
  const user = await getUser();
  if (!user) throw new Error('Not authenticated');
  let nextPlan = "STARTER";
  if (user.plan === "FREE") nextPlan = "STARTER";
  else if (user.plan === "STARTER") nextPlan = "ULTRA";
  else if (user.plan === "ULTRA") return;
  await prisma.user.update({
    where: { id: user.id },
    data: { plan: nextPlan },
  });
  revalidatePath('/user_dashboard/User_information');
} 