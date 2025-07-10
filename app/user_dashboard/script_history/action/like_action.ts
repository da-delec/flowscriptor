"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
export async function like (formData:FormData) {
   const id = formData.get("idToLike") as string
   const script = await prisma.script.findUnique({
    where:{
        Id:id
    },
    select:{
        isFavorite:true
    }
   })
    const commentLike = await prisma.script.update({
        where:{
            Id:id
        },
        data:{
            isFavorite:!script?.isFavorite
        }
        
    })
    revalidatePath("/user_dashboard/script_history")
  
}