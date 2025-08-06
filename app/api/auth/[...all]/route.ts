import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";

const handler = toNextJsHandler(auth);

export async function GET(req: NextRequest) {
  console.log("🔍 API Auth GET:", req.url);
  return handler.GET(req);
}

export async function POST(req: NextRequest) {
  console.log("🔍 API Auth POST:", req.url);
  return handler.POST(req);
}