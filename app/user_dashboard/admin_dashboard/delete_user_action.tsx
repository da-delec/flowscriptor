"use client";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { deleteUser } from '@/lib/actions/delete_user';

export default function DeleteUserAction({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <form action={async () => { startTransition(() => deleteUser(userId)); }}>
      <Button
        type="submit"
        size="sm"
        className="bg-red-500 hover:bg-red-400 text-white rounded-lg px-3 py-1 flex items-center gap-1"
        disabled={isPending}
        title="Supprimer l'utilisateur"
      >
        <FaTrash />
        Supprimer
      </Button>
    </form>
  );
} 