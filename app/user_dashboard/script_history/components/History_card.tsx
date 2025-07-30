"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { delete_item } from "../action/delete_action";
import LikeButton from "./LikeButton";
import { like } from "../action/like_action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

// Badge utilitaire
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-indigo-700/30 text-indigo-300 text-xs font-semibold px-2 py-0.5 rounded-full mr-2 mb-1">
    {children}
  </span>
);

type userInfos = {
  Id: string;
  CreatedAt: Date;
  Title: string;
  Script: string;
  Category: string;
  isFavorite: boolean;
  userId: string;
};
type propsType = {
  infos: userInfos;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
};

const History_card = ({ infos, setIsFavorite }: propsType) => {
  const date = new Date(infos.CreatedAt);
  const router = useRouter();
  const dateFormat = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleLike = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await like(formData);
    router.refresh();
  };

  return (
    <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-200 hover:scale-[1.025] hover:border-indigo-500 hover:shadow-indigo-900/30">
      {/* Lien sur la card sauf boutons */}
      <Link
        href={`/user_dashboard/script_history/script_description/${infos.Id}`}
        className="absolute inset-0 z-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        tabIndex={-1}
        aria-label={`Voir le script ${infos.Title}`}
      />
      <div className="relative z-10 flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-1">
          <Badge>{infos.Category}</Badge>
          <span className="text-xs text-slate-500">{dateFormat}</span>
        </div>
        <h1 className="text-xl font-bold text-slate-50 mb-1 truncate" title={infos.Title}>
          {infos.Title}
        </h1>
      </div>
      <div className="relative z-10 flex justify-end gap-3 mt-2">
        <form onSubmit={handleLike} className="inline-block">
          <input type="hidden" name="idToLike" value={infos.Id} />
          <LikeButton scriptId={infos.Id} isFavorite={infos.isFavorite} />
        </form>
        <form action={delete_item} className="inline-block">
          <input type="hidden" name="idValue" value={infos.Id} />
          <Button type="submit" className="bg-red-500 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition">
            Supprimer
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default History_card;
