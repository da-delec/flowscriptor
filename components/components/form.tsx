"use client";

import React, { useEffect, useState, useTransition } from "react";
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
import { useSession } from "@/app/user_dashboard/context/sessionContext";
import { Plan } from "@/lib/generated/prisma";
import { LIMITATION } from "@/lib/auth-plan";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, User, Building, Package, Clock } from "lucide-react";

const Form = ({
  setScript,
}: {
  setScript: (result: string) => void;
}) => {
  const [formData, setFormData] = useState({
    ourName: "",
    ourCompany: "",
    prospectName: "",
    prospectCompany: "",
    industry: "",
    productName: "",
    productDescription: "",
    callObjective: "",
    tone: "Professional",
  });
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(getDatasForm, { result: "" });

  const session = useSession();
  const userPlan = session?.plan as Plan;
  const scriptGenerated = session?.scriptGenerated as number;
  const userLimit = LIMITATION[userPlan];
  const isOffLimite = scriptGenerated >= userLimit.scriptLimit;

  useEffect(() => {
    if (state.result) {
      setScript(state.result);
    }
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.result, state.error, setScript]);

  function handleInputChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(formDataEvent: FormData) {
    // Mapping vers les noms attendus par la server action
    formDataEvent.set("company_name", formData.ourCompany);
    formDataEvent.set("prospect-type", formData.industry);
    formDataEvent.set("enterpriseName", formData.prospectCompany);
    formDataEvent.set("selected-goal", formData.callObjective);
    formDataEvent.set("tone", formData.tone);
    formDataEvent.set("description", formData.productDescription);
    formDataEvent.set("language", "French");
    
    // Utiliser startTransition pour déclencher l'animation
    startTransition(() => {
      formAction(formDataEvent);
    });
  }

  return (
    <div className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-xl shadow-lg h-full flex flex-col">
      {/* Header du formulaire */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800/50 p-4">
        <div className="text-white flex items-center gap-2 text-lg">
          <div className="p-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          Générateur de Script
        </div>
        <div className="text-slate-400 text-sm">
          Remplissez les informations essentielles pour créer votre script
        </div>
      </div>
      
      {/* Contenu du formulaire */}
      <div className="p-4 space-y-4 flex-1 flex flex-col">
        <form
          action={handleSubmit}
          className="space-y-4 flex-1 flex flex-col"
        >
          {/* Nos informations */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-700/50">
              <div className="p-1.5 bg-blue-600/20 rounded-lg">
                <User className="h-4 w-4 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-base">Nos informations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="ourName" className="text-slate-300 font-medium text-sm">Notre nom</Label>
                <Input
                  id="ourName"
                  placeholder="Votre nom"
                  value={formData.ourName}
                  onChange={(e) => handleInputChange('ourName', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="ourCompany" className="text-slate-300 font-medium text-sm">Notre entreprise</Label>
                <Input
                  id="ourCompany"
                  placeholder="Nom de votre entreprise"
                  value={formData.ourCompany}
                  onChange={(e) => handleInputChange('ourCompany', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10"
                />
              </div>
            </div>
          </div>

          {/* Prospect */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-700/50">
              <div className="p-1.5 bg-green-600/20 rounded-lg">
                <Building className="h-4 w-4 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-base">Prospect</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="prospectName" className="text-slate-300 font-medium text-sm">Nom du prospect</Label>
                <Input
                  id="prospectName"
                  placeholder="Nom de la personne"
                  value={formData.prospectName}
                  onChange={(e) => handleInputChange('prospectName', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="prospectCompany" className="text-slate-300 font-medium text-sm">Entreprise du prospect</Label>
                <Input
                  id="prospectCompany"
                  placeholder="Nom de leur entreprise"
                  value={formData.prospectCompany}
                  onChange={(e) => handleInputChange('prospectCompany', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="industry" className="text-slate-300 font-medium text-sm">Secteur d'activité</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10">
                  <SelectValue placeholder="Sélectionner un secteur" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700 shadow-xl">
                  <SelectItem value="technology" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Technologie
                  </SelectItem>
                  <SelectItem value="healthcare" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Santé
                  </SelectItem>
                  <SelectItem value="finance" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Finance
                  </SelectItem>
                  <SelectItem value="retail" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Commerce
                  </SelectItem>
                  <SelectItem value="manufacturing" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Industrie
                  </SelectItem>
                  <SelectItem value="education" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Éducation
                  </SelectItem>
                  <SelectItem value="real-estate" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Immobilier
                  </SelectItem>
                  <SelectItem value="other" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                    Autre
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Produit/Service */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-700/50">
              <div className="p-1.5 bg-purple-600/20 rounded-lg">
                <Package className="h-4 w-4 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-base">Ce que vous vendez</h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="productName" className="text-slate-300 font-medium text-sm">Nom du produit/service</Label>
                <Input
                  id="productName"
                  placeholder="Votre produit ou service"
                  value={formData.productName}
                  onChange={(e) => handleInputChange('productName', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="productDescription" className="text-slate-300 font-medium text-sm">Description brève (très important)</Label>
                <Textarea
                  id="productDescription"
                  placeholder="Que fait votre produit/service ? Quel problème résout-il ? Gardez-le concis mais précis..."
                  value={formData.productDescription}
                  onChange={(e) => handleInputChange('productDescription', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm min-h-20"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="callObjective" className="text-slate-300 font-medium text-sm">Objectif de l'appel</Label>
                  <Select value={formData.callObjective} onValueChange={(value) => handleInputChange('callObjective', value)}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10">
                      <SelectValue placeholder="Quel est votre objectif ?" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 shadow-xl">
                      <SelectItem value="demo" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Programmer une démo
                      </SelectItem>
                      <SelectItem value="meeting" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Prendre un rendez-vous
                      </SelectItem>
                      <SelectItem value="trial" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Commencer un essai
                      </SelectItem>
                      <SelectItem value="consultation" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Programmer une consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="tone" className="text-slate-300 font-medium text-sm">Ton du script</Label>
                  <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all text-sm h-10">
                      <SelectValue placeholder="Choisir le ton" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 shadow-xl">
                      <SelectItem value="Professional" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Professionnel
                      </SelectItem>
                      <SelectItem value="Friendly" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Amical
                      </SelectItem>
                      <SelectItem value="Confident" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Confiant
                      </SelectItem>
                      <SelectItem value="Enthusiastic" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Enthousiaste
                      </SelectItem>
                      <SelectItem value="Consultative" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Consultatif
                      </SelectItem>
                      <SelectItem value="Direct" className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white">
                        Direct
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <Button 
              type="submit"
              disabled={isPending || isOffLimite}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-auto"
            >
              {isPending ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Générer le Script
                </>
              )}
            </Button>
          </div>

          {isOffLimite && (
            <p className="text-center text-red-400 text-sm">
              Limite atteinte, veuillez mettre à niveau votre plan
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
