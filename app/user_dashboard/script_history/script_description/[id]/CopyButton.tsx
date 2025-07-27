'use client'

import { IoMdCopy } from "react-icons/io";
import { toast } from 'sonner';

interface CopyButtonProps {
  scriptText: string;
}

export default function CopyButton({ scriptText }: CopyButtonProps) {
  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(scriptText);
      toast.success("Script copié dans le presse-papiers !");
    } catch (error) {
      toast.error("Erreur lors de la copie");
    }
  };

  return (
    <button
      onClick={copyScript}
      className="absolute top-4 right-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full p-2 shadow transition group"
      title="Copier le script"
      type="button"
    >
      <IoMdCopy className="text-lg group-hover:scale-110 transition" />
    </button>
  );
} 