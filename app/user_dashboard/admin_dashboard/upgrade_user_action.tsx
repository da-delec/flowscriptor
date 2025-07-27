"use client";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import { upgradeUserPlan } from '@/lib/actions/upgrade_user';

export default function UpgradeUserAction({ userId, currentPlan }: { userId: string, currentPlan: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <form action={async () => { startTransition(() => upgradeUserPlan(userId, currentPlan)); }}>
      <Button
        type="submit"
        size="sm"
        className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-3 py-1 flex items-center gap-1"
        disabled={currentPlan === "ULTRA" || isPending}
        title={currentPlan === "ULTRA" ? "Déjà au plan maximum" : "Upgrade le plan"}
      >
        <FaArrowUp />
        Upgrade
      </Button>
    </form>
  );
} 