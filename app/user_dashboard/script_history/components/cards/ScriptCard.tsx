"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Eye, Copy, Trash2, MoreVertical, Calendar, Building, CheckCircle, Circle } from "lucide-react";
import Link from "next/link";
import LikeButton from "../LikeButton";
import { toast } from "sonner";
import { delete_item } from "../../action/delete_action";
import { useTransition } from "react";

const getStatusColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'converted':
      return 'bg-green-600/20 text-green-400 border-green-600/30';
    case 'follow-up':
      return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
    case 'no-answer':
      return 'bg-slate-600/20 text-slate-400 border-slate-600/30';
    case 'not-interested':
      return 'bg-red-600/20 text-red-400 border-red-600/30';
    default:
      return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
  }
};

type ScriptInfos = {
  Script: string;
  Id: string;
  Title: string;
  Category: string;
  CreatedAt: Date;
  userId: string;
  isFavorite: boolean;
  isClosed: boolean;
};

const ScriptCard = ({ infos }: { infos: ScriptInfos }) => {
  const date = new Date(infos.CreatedAt);
  const dateFormat = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [isPending, startTransition] = useTransition();

  const copyScript = async () => {
    await navigator.clipboard.writeText(infos.Script);
    toast.success("Script copié dans le presse-papiers !");
  };

  const scriptID = infos.Id;

  return (
    <Card className="bg-slate-900 border-slate-700 mx-5 hover:border-slate-600 transition-colors">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-1 truncate" title={infos.Title}>{infos.Title}</CardTitle>
            <CardDescription className="text-slate-400 flex items-center gap-2">
              <Building className="h-3 w-3" />
              {infos.Category}
            </CardDescription>
          </div>
          <div className="flex items-center gap-1">
            <LikeButton scriptId={infos.Id} isFavorite={infos.isFavorite} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-slate-800 border-slate-600">
                <DropdownMenuItem asChild className="text-slate-300 focus:bg-slate-700">
                  <Link href={`/user_dashboard/script_history/script_description/${infos.Id}`} className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Voir le script
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-slate-300 focus:bg-slate-700" onClick={copyScript}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => startTransition(() => delete_item(scriptID))} className="text-red-400 focus:bg-slate-700">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Supprimer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <Badge className={getStatusColor(infos.Category)} variant="outline">
            {infos.Category}
          </Badge>
          {infos.isClosed && (
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30" variant="outline">
              <CheckCircle className="h-3 w-3 mr-1" />
              Clos
            </Badge>
          )}
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="h-3 w-3 mr-1" />
            {dateFormat}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="bg-slate-800 rounded-lg p-3 mb-4 min-h-[60px]">
          <p className="text-slate-300 text-sm line-clamp-3">
            {infos.Script}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScriptCard; 