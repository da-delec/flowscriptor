"use server";
import { prisma } from '@/lib/prisma';
import { revalidatePath } from "next/cache";

export async function deleteUser(userId: string) {
  await prisma.user.delete({ where: { id: userId } });
  revalidatePath("/user_dashboard/admin_dashboard");
} 