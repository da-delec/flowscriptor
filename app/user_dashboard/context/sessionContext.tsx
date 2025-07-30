"use client"
import { createContext, useContext, ReactNode } from "react";

type User = {
    id: string;
    name: string;
    emailVerified: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    isAdmin: boolean | undefined;
    plan: string | undefined;
    scriptGenerated: number | undefined;
    image?: string | null | undefined;
    stripeCustomerId: string | undefined; // Ajouté pour Stripe
};

const SessionContext = createContext<User | null>(null);

export const useSession = () => useContext(SessionContext);

type Props = {
  children: ReactNode;
  user: User;
};

export const SessionProvider = ({ children, user }: Props) => {
  return (
    <SessionContext.Provider value={user}>
      {children}
    </SessionContext.Provider>
  );
};
