"use client";

import React, { useEffect, useState, useTransition } from "react";
import { WandSparkles, Loader2Icon } from "lucide-react";
import { getDatasForm } from "../../lib/actions/form_actions";
import { useActionState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Form = ({
  setScript,
}: {
  setScript: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedTone, setIsSelectedTone] = useState("");
  const [selectedLanguages, setIsSelectedLanguages] = useState("");
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(getDatasForm, { result: "" });

  function getValue(value: string) {
    setSelectedValue(value);
  }

  useEffect(() => {
    if (state.result) {
      setScript(state.result);
    }
  }, [state.result, setScript]);

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-10">
      <form
        action={(formData) => {
          startTransition(() => {
            formAction(formData);
          });
        }}
        className="flex flex-col gap-6 bg-white/70 backdrop-blur-sm shadow-md rounded-xl p-6 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Generate your custom call script
        </h2>

        {/* Company Name */}
        <div>
          <Label htmlFor="company_name" className="text-sm font-medium text-gray-700 mb-1 block">
            Your name or company name
          </Label>
          <Input
            placeholder="e.g. OpenAI / John Smith"
            name="company_name"
            id="company_name"
            className="w-full"
          />
        </div>

        {/* Prospect Type */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">
            Prospect type
          </Label>
          <Select onValueChange={getValue}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a prospect type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="software">Software / Logiciel</SelectItem>
              <SelectItem value="e-commerce">E-commerce</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="proactivity">Proactivity</SelectItem>
            </SelectContent>
          </Select>
          <input name="prospect-type" type="hidden" value={selectedValue} />
        </div>

        {/* Target enterprise */}
        <div>
          <Label htmlFor="enterprise_name" className="text-sm font-medium text-gray-700 mb-1 block">
            Target enterprise or person
          </Label>
          <Input
            placeholder="e.g. Google / Jane Doe"
            name="enterpriseName"
            type="text"
            id="enterprise_name"
            className="w-full"
          />
        </div>

        {/* Call Goal */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">
            Call Goal
          </Label>
          <Select onValueChange={(e) => setSelectedGoal(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Prospecting-Call">Prospecting</SelectItem>
              <SelectItem value="Appointment">Appointment Setting</SelectItem>
              <SelectItem value="Follow-up">Follow-up</SelectItem>
              <SelectItem value="Qualification">Qualification / Discovery</SelectItem>
              <SelectItem value="Closing">Closing</SelectItem>
              <SelectItem value="Reactivation">Reactivation</SelectItem>
            </SelectContent>
          </Select>
          <input name="selected-goal" type="hidden" value={selectedGoal} />
        </div>

        {/* Call Tone */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">
            Call Tone
          </Label>
          <Select onValueChange={(e) => setIsSelectedTone(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Professional">Professional</SelectItem>
              <SelectItem value="Friendly">Friendly / Warm</SelectItem>
              <SelectItem value="Direct">Direct</SelectItem>
              <SelectItem value="Calm-Reassuring">Calm / Reassuring</SelectItem>
              <SelectItem value="Formal">Formal</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="tone" value={selectedTone} />
        </div>

        {/* Language */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">
            Language
          </Label>
          <Select onValueChange={(e) => setIsSelectedLanguages(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="French">Français</SelectItem>
              <SelectItem value="English">English</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="language" value={selectedLanguages} />
        </div>

        {/* Submit */}
        <div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition-all"
          >
            {isPending ? (
              <>
                <Loader2Icon className="animate-spin w-4 h-4" />
                Please wait...
              </>
            ) : (
              <>
                Generate
                <WandSparkles className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
