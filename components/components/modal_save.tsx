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
import { FaRegSave } from "react-icons/fa";

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
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]" variant="outline">
            <FaRegSave className="mr-2 h-4 w-4" />
            Sauvegarder le Script
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-900 border border-slate-700">
          <div className="p-4 text-center text-slate-300">Chargement...</div>
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
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]" variant="outline">
          <FaRegSave className="mr-2 h-4 w-4" />
          Sauvegarder le Script
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 shadow-2xl">
        <DialogHeader className="pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/30">
              <FaRegSave className="h-5 w-5 text-indigo-400" />
            </div>
            <DialogTitle className="text-xl font-bold text-white">Sauvegarder le Script</DialogTitle>
          </div>
          <DialogDescription className="text-slate-400">
            Entrez le nom de votre script et choisissez la catégorie
          </DialogDescription>
        </DialogHeader>

        {/* Le formulaire englobe tout ce qui doit être soumis */}
        <form action={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="script-name-input" className="text-slate-300 font-medium">Nom du Script</Label>
              <Input
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all"
                id="script-name-input"
                name="scriptName"
                defaultValue="Script 1"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="category-select" className="text-slate-300 font-medium">Catégorie</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full bg-slate-800/50 border-slate-600 text-white focus:border-indigo-500 focus:ring-indigo-500/20">
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
              
              <div className="grid gap-3 mt-4">
                <Label htmlFor="is-closed-select" className="text-slate-300 font-medium">Avez-vous clos avec ce script ?</Label>
                <Select value={isClosed} onValueChange={setIsClosed}>
                  <SelectTrigger className="w-full bg-slate-800/50 border-slate-600 text-white focus:border-indigo-500 focus:ring-indigo-500/20">
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

          <DialogFooter className="mt-8 gap-3">
            <DialogClose asChild>
              <Button 
                variant="outline" 
                type="button"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Annuler
              </Button>
            </DialogClose>
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sauvegarde...
                </>
              ) : (
                <>
                  <FaRegSave className="mr-2 h-4 w-4" />
                  Sauvegarder
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
