"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function saveToDb (formData:FormData){
    const title = formData.get("scriptName") as string
    const category = formData.get("selected-goal") as string
    const scriptprops = formData.get("scriptToSave") as string
    const user_id = formData.get("userId") as string
    const isClosed = formData.get("isClosed") === "true"
    const reponse = await prisma.script.create({
        data:{
            Title:title,
            Script:scriptprops,
            Category:category,
            userId:user_id,
            isClosed:isClosed
        }
    })
    revalidatePath("/user_dashboard")
    console.log("im on the server",title,category)
}
