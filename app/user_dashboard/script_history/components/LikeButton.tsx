"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaStar, FaRegStar } from "react-icons/fa";
import { toggleFavorite } from "@/lib/actions/toggle_favorite_action";
import { toast } from "sonner";

interface LikeButtonProps {
  scriptId: string;
  isFavorite: boolean;
}

export default function LikeButton({ scriptId, isFavorite }: LikeButtonProps) {
  const [isPending, setIsPending] = useState(false);
  const [currentIsFavorite, setCurrentIsFavorite] = useState(isFavorite);

  const handleToggleFavorite = async () => {
    setIsPending(true);
    
    try {
      const result = await toggleFavorite(scriptId);
      
      if (result.error) {
        toast.error(result.error);
      } else if (result.success) {
        setCurrentIsFavorite(result.isFavorite);
        toast.success(
          result.isFavorite 
            ? "Script ajouté aux favoris" 
            : "Script retiré des favoris"
        );
      }
    } catch (error) {
      toast.error("Erreur lors de la mise à jour");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggleFavorite}
      disabled={isPending}
      className={`h-8 w-8 p-0 transition-all duration-200 ${
        currentIsFavorite 
          ? 'text-yellow-400 hover:text-yellow-300' 
          : 'text-slate-400 hover:text-yellow-400'
      }`}
    >
      {currentIsFavorite ? (
        <FaStar className="h-4 w-4" />
      ) : (
        <FaRegStar className="h-4 w-4" />
      )}
    </Button>
  );
}
