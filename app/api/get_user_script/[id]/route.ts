"use server"

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const {id} = await params
    console.log(id)
    const userScript = await prisma.user.findUnique({
        where:{
            id:id
        },
        include:{
            scripts:true
        }
    })
    const scripts =  userScript?.scripts;
    return NextResponse.json(scripts)

}

