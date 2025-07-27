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

export function DialogDemo({ scriptprops }: { scriptprops: string }) {
  const [category, setCategory] = useState<string>("Prospecting-Call");
  const [isClosed, setIsClosed] = useState<string>("false");
  const user = useSession();

  // Ne pas rendre le formulaire si l'utilisateur n'est pas chargé
  if (!user?.id) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none" variant="outline">Save Script</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="p-4 text-center">Chargement...</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none" variant="outline">Save Script</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save Script</DialogTitle>
          <DialogDescription>
            Enter the Name of your script you want to save and the category of
            your script
          </DialogDescription>
        </DialogHeader>

        {/* Le formulaire englobe tout ce qui doit être soumis */}
        <form action={saveToDb}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="script-name-input">Script Name</Label>
              <Input
                className=" focus:border-indigo-300"
                id="script-name-input"
                name="scriptName"
                defaultValue="Script 1"
              />
            </div>

            <div className="grid gap-2">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[80%] mt-7">
                  <SelectValue placeholder="Cold call Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Prospecting-Call">Prospecting Call</SelectItem>
                  <SelectItem value="Appointment">Appointment Setting Call</SelectItem>
                  <SelectItem value="Follow-up">Follow-up Call</SelectItem>
                  <SelectItem value="Qualification">Qualification / Discovery Call</SelectItem>
                  <SelectItem value="Closing">Closing Call</SelectItem>
                  <SelectItem value="Reactivation">Reactivation Call</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="grid gap-2 mt-4">
                <Label htmlFor="is-closed-select">Avez-vous clos avec ce script ?</Label>
                <Select value={isClosed} onValueChange={setIsClosed}>
                  <SelectTrigger className="w-[80%]">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="false">Non, pas encore</SelectItem>
                    <SelectItem value="true">Oui, j'ai clos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <input type="hidden" value={user.id} name="userId" />
              <input name="selected-goal" type="hidden" value={category} />
              <input name="scriptToSave" type="hidden" value={scriptprops} />
              <input name="isClosed" type="hidden" value={isClosed} />
            </div>
          </div>

          <DialogFooter className=" mt-8">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button className=" bg-indigo-500 text-white hover:bg-indigo-300 cursor-pointer" type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
