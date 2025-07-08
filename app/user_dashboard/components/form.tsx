"use client";

import React, { useEffect, useState, useTransition } from "react";
import { WandSparkles, Loader2Icon } from "lucide-react";
import { getDatasForm } from "../actions/form_actions";
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
    <div className="w-full max-w-md mx-auto px-4 mt-4 h-screen">
     
      <form
        action={(formData) => {
          startTransition(() => {
            formAction(formData);
          });
        }}
        className="flex flex-col space-y-3"
      >
        {/* Name / Company */}
        <div>
          <Label htmlFor="company_name" className="text-sm font-medium text-gray-700 mb-2 block">
            Your name or company name
          </Label>
          <Input
            placeholder="Your name/Company Name"
            name="company_name"
            className="w-full"
          />
        </div>

        {/* Prospect Type */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Prospect type
          </Label>
          <Select onValueChange={getValue}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a prospect type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="software">Software/Logiciel</SelectItem>
              <SelectItem value="e-commerce">E-commerce</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="proactivity">Proactivity</SelectItem>
            </SelectContent>
          </Select>
          <input name="prospect-type" type="hidden" value={selectedValue} />
        </div>

        {/* Enterprise Name */}
        <div>
          <Label htmlFor="enterprise_name" className="text-sm font-medium text-gray-700 mb-2 block">
            Target enterprise or person
          </Label>
          <Input
            placeholder="Enterprise Name"
            name="enterpriseName"
            type="text"
            id="enterprise_name"
            className="w-full"
          />
        </div>

        {/* Call Goal */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Call Goal
          </Label>
          <Select onValueChange={(e) => setSelectedGoal(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a call goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Prospecting-Call">Prospecting Call</SelectItem>
              <SelectItem value="Appointment">Appointment Setting</SelectItem>
              <SelectItem value="Follow-up">Follow-up Call</SelectItem>
              <SelectItem value="Qualification">Qualification / Discovery</SelectItem>
              <SelectItem value="Closing">Closing Call</SelectItem>
              <SelectItem value="Reactivation">Reactivation Call</SelectItem>
            </SelectContent>
          </Select>
          <input name="selected-goal" type="hidden" value={selectedGoal} />
        </div>

        {/* Call Tone */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Call Tone
          </Label>
          <Select onValueChange={(e) => setIsSelectedTone(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Professional">Professional</SelectItem>
              <SelectItem value="Friendly">Friendly / Warm</SelectItem>
              <SelectItem value="Direct">Direct / Straightforward</SelectItem>
              <SelectItem value="Calm-Reassuring">Calm / Reassuring</SelectItem>
              <SelectItem value="Formal">Formal</SelectItem>
              <SelectItem value="Reactivation">Reactivation Call</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="tone" value={selectedTone} />
        </div>

        {/* Language */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Language
          </Label>
          <Select onValueChange={(e) => setIsSelectedLanguages(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="French">Français</SelectItem>
              <SelectItem value="English">English</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="language" value={selectedLanguages} />
        </div>

        {/* Submit */}
        {isPending ? (
          <Button disabled className="w-full flex items-center justify-center gap-2">
            <Loader2Icon className="animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-400 transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            Generate
            <WandSparkles />
          </Button>
        )}
      </form>
    </div>
  );
};

export default Form;
