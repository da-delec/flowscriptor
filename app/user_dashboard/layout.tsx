import React, { ReactNode } from "react";
import Navigation from "../../components/components/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SessionProvider } from "./context/sessionContext";
import { Toaster } from "sonner";
const layout = async ({ children }: { children: ReactNode }) => {

  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

console.log("🔍 Dashboard Layout - Session:", {
  hasSession: !!session,
  hasUser: !!session?.user,
  userId: session?.user?.id,
  email: session?.user?.email
});

if(!session?.user){
  console.log("❌ Pas de session utilisateur, redirection vers sign-in");
  // Temporairement commenté pour diagnostiquer
  // redirect("/auth/sign-in")
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center text-white">
        <h1 className="mb-4 text-2xl">Session non trouvée</h1>
        <p>Session: {JSON.stringify(session, null, 2)}</p>
        <a href="/auth/sign-in" className="text-blue-400 underline">Aller à la connexion</a>
      </div>
    </div>
  );
}

  return (
    <div>
     <SessionProvider user={session.user}> 
     <Navigation session={session.user} />
      {children}
      <Toaster />
      </SessionProvider>
    </div>
  );
};

export default layout;
