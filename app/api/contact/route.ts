import { NextResponse } from "next/server";
import resend from "@/lib/resend";
export async function POST(req:Request){
    const {name,email,message} = await req.json();
    try {
        const data = await resend.emails.send({
            from:"FlowScriptor <noreply@flowscriptor.com>",
            to:"delesallecorentin3@gmail.com",
            subject:"formulaire de contact flowscriptor",
            html:`<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
        })
        return NextResponse.json({message:"Email sent successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error sending email"},{status:500})
    }
}