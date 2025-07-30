"use server";
import { prisma } from '@/lib/prisma';
import { revalidatePath } from "next/cache";

export async function upgradeUserPlan(userId: string, currentPlan: string) {
  let nextPlan = "STARTER";
  if (currentPlan === "FREE") nextPlan = "STARTER";
  else if (currentPlan === "STARTER") nextPlan = "ULTRA";
  else if (currentPlan === "ULTRA") return;
  await prisma.user.update({
    where: { id: userId },
    data: { plan: nextPlan as any },
  });
  revalidatePath("/user_dashboard/admin_dashboard");
} 