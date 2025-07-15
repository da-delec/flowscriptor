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
  const [category, setCategory] = useState("");
  const user = useSession();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-indigo-500" variant="outline">Open Dialog</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
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
              <Select onValueChange={(e: string) => setCategory(e)}>
                <SelectTrigger className="w-[80%] mt-7">
                  <SelectValue placeholder="Cold call Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Prospecting-Call">Prospecting Call</SelectItem>
                  <SelectItem value="Appointment">
                    Appointment Setting Call
                  </SelectItem>
                  <SelectItem value="Follow-up">Follow-up Call</SelectItem>
                  <SelectItem value="Qualification">
                    Qualification / Discovery Call
                  </SelectItem>
                  <SelectItem value="Closing">Closing Call</SelectItem>
                  <SelectItem value="Reactivation">Reactivation Call</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" value={user?.id} name="userId"  />
              <input name="selected-goal" type="hidden" value={category} />
              <input name="scriptToSave" type="hidden" value={scriptprops} />
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
