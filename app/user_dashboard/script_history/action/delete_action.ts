"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
export async function delete_item(formData:FormData) {
   const id = formData.get("idValue") as string
    const deletedItem = await prisma.script.delete({
        where:{
            Id:id
        }
    })
   revalidatePath("/user_dashboard/script_history") 


    
}