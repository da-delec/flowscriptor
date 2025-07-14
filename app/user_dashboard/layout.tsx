import React, { ReactNode } from "react";
import Navigation from "../../components/components/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SessionProvider } from "./context/sessionContext";
const layout = async ({ children }: { children: ReactNode }) => {

  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
if(!session?.user){
  redirect("/auth/sign-in")
}

  return (
    <div>
     <SessionProvider user={session.user}> 
     <Navigation session={session.user} />
      {children}
      </SessionProvider>
    </div>
  );
};

export default layout;
