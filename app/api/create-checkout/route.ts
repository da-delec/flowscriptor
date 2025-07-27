import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Remplace par tes vrais price ids Stripe
const PRICE_IDS = {
  starter: "price_1RmiWmId1XgXGUQOwPPuO1VW",
  ultra: "price_1RmidJId1XgXGUQOKayYFpQb"
};

export async function POST(req: Request) {
  const body = await req.json();
  console.log("this is the body : ", body);
  const plan = body.plan === "ultra" ? "ultra" : "starter";
  const priceId = PRICE_IDS[plan];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    metadata:{
      email: body.email,
      plan: plan,
    },
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],

    success_url: "http://localhost:3000/user_dashboard/pricing/success",
    cancel_url: "http://localhost:3000/user_dashboard/pricing/cancel",
  
    customer: body.stripeCustomerId,
  });
  return NextResponse.json({ url: session.url });
}