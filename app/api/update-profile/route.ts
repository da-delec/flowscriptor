import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const { email, name,id } = await req.json();
    const user = await prisma.user.update({
        where: { id: id },
        data: { name }
    });
    return NextResponse.json(user);
}