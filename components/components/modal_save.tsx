"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveToDb } from "../../lib/actions/save_action";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/app/user_dashboard/context/sessionContext";
import { toast } from "sonner";

export function DialogDemo({ scriptprops }: { scriptprops: string }) {
  const [category, setCategory] = useState<string>("Prospecting-Call");
  const [isClosed, setIsClosed] = useState<string>("false");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSession();

  // Ne pas rendre le formulaire si l'utilisateur n'est pas chargé
  if (!user?.id) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none" variant="outline">
            Sauvegarder le Script
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="p-4 text-center">Chargement...</div>
        </DialogContent>
      </Dialog>
    );
  }

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      await saveToDb(formData);
      toast.success("Script sauvegardé avec succès !");
      setIsOpen(false); // Ferme la modal
    } catch (error) {
      toast.error("Erreur lors de la sauvegarde");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none" variant="outline">
          Sauvegarder le Script
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sauvegarder le Script</DialogTitle>
          <DialogDescription>
            Entrez le nom de votre script et choisissez la catégorie
          </DialogDescription>
        </DialogHeader>

        {/* Le formulaire englobe tout ce qui doit être soumis */}
        <form action={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="script-name-input">Nom du Script</Label>
              <Input
                className="focus:border-indigo-300"
                id="script-name-input"
                name="scriptName"
                defaultValue="Script 1"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category-select">Catégorie</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Types d'appels" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700 shadow-xl">
                  <SelectItem value="Prospecting-Call" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Appel de Prospection
                  </SelectItem>
                  <SelectItem value="Appointment" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Prise de Rendez-vous
                  </SelectItem>
                  <SelectItem value="Follow-up" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Appel de Suivi
                  </SelectItem>
                  <SelectItem value="Qualification" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Qualification / Découverte
                  </SelectItem>
                  <SelectItem value="Closing" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Appel de Clôture
                  </SelectItem>
                  <SelectItem value="Reactivation" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Appel de Réactivation
                  </SelectItem>
                </SelectContent>
              </Select>
              
              <div className="grid gap-2 mt-4">
                <Label htmlFor="is-closed-select">Avez-vous clos avec ce script ?</Label>
                <Select value={isClosed} onValueChange={setIsClosed}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700 shadow-xl">
                    <SelectItem value="false" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                      Non, pas encore
                    </SelectItem>
                    <SelectItem value="true" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                      Oui, j'ai clos
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <input type="hidden" value={user.id} name="userId" />
              <input name="selected-goal" type="hidden" value={category} />
              <input name="scriptToSave" type="hidden" value={scriptprops} />
              <input name="isClosed" type="hidden" value={isClosed} />
            </div>
          </div>

          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Annuler
              </Button>
            </DialogClose>
            <Button 
              className="bg-indigo-500 text-white hover:bg-indigo-300 cursor-pointer" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sauvegarde..." : "Sauvegarder"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
