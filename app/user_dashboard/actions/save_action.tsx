"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function saveToDb (formData:FormData){
    const title = formData.get("scriptName") as string
    const category = formData.get("selected-goal") as string
    const scriptprops = formData.get("scriptToSave") as string
    const reponse = await prisma.script.create({
        data:{
            Title:title,
            Script:scriptprops,
            Category:category,
            UserId:"15307807-0dcd-4173-9493-6a6e4250de2e"
        }
    })
    revalidatePath("/user_dashboard")
    console.log("im on the server",title,category)
}
