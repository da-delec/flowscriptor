"use server"
import { prisma } from "@/lib/prisma"
import { time } from "console"
import { revalidatePath } from "next/cache"
export async function delete_item(formData: FormData) {
  const id = formData.get('idValue') as string;
  
  if (!id) {
    throw new Error('ID manquant');
  }
  
  const deletedItem = await prisma.script.delete({
    where: {
      Id: id
    }
  });
  
  revalidatePath("/user_dashboard/script_history");
}