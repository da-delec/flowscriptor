import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const customerId = body.stripeCustomerId as string;
    const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: "http://localhost:3000/user_dashboard"
    })
    return NextResponse.json({url: session.url})
}