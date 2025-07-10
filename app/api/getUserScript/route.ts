import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (res:Response){
    const userScript = await prisma.script.findMany({
        where:{
          UserId:"15307807-0dcd-4173-9493-6a6e4250de2e"
        },
       
        orderBy:{
          CreatedAt:"desc"
        }
      })
    return NextResponse.json(userScript)

}