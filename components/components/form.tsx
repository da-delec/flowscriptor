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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Sparkles, User, Building, Package, Clock } from "lucide-react";

const Form = ({
  setScript,
}: {
  setScript: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [formData, setFormData] = useState({
    prospectName: "",
    prospectTitle: "",
    companyName: "",
    industry: "",
    companySize: "",
    painPoint: "",
    productName: "",
    productDescription: "",
    valueProposition: "",
    callObjective: "",
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
    // On mappe les champs custom vers les noms attendus par la server action
    formDataEvent.set("company_name", formData.companyName);
    formDataEvent.set("prospect-type", formData.industry);
    formDataEvent.set("enterpriseName", formData.prospectName);
    formDataEvent.set("selected-goal", formData.callObjective);
    formDataEvent.set("tone", "Professional"); // Optionnel, à customiser si besoin
    formDataEvent.set("description", formData.productDescription);
    formDataEvent.set("language", "French"); // Optionnel, à customiser si besoin
    // Les autres champs sont ignorés côté server action si non utilisés
    startTransition(() => {
      formAction(formDataEvent);
    });
  }

  return (
    <div className="h-full">
      <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-xl h-full overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800/50 p-3 md:p-4">
          <CardTitle className="text-white flex items-center gap-2 text-sm md:text-lg">
            <div className="p-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-white" />
            </div>
            Script Generator
          </CardTitle>
          <CardDescription className="text-slate-400 text-xs md:text-sm">
            Remplissez les détails ci-dessous pour générer un script de cold calling personnalisé
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 md:p-4 space-y-3 md:space-y-4 h-full">
          <form
            action={handleSubmit}
            className="space-y-3 md:space-y-4 h-full flex flex-col"
          >
            {/* Prospect Information */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 pb-1 md:pb-2 border-b border-slate-700/50">
                <div className="p-1.5 bg-blue-600/20 rounded-lg">
                  <User className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base">Informations Prospect</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                <div className="space-y-1">
                  <Label htmlFor="prospectName" className="text-slate-300 font-medium text-xs">Nom du prospect</Label>
                  <Input
                    id="prospectName"
                    placeholder="John Smith"
                    value={formData.prospectName}
                    onChange={(e) => handleInputChange('prospectName', e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="prospectTitle" className="text-slate-300 font-medium text-xs">Poste</Label>
                  <Input
                    id="prospectTitle"
                    placeholder="Directeur Marketing"
                    value={formData.prospectTitle}
                    onChange={(e) => handleInputChange('prospectTitle', e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9"
                  />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 pb-1 md:pb-2 border-b border-slate-700/50">
                <div className="p-1.5 bg-green-600/20 rounded-lg">
                  <Building className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base">Informations Entreprise</h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="companyName" className="text-slate-300 font-medium text-xs">Nom de l'entreprise</Label>
                  <Input
                    id="companyName"
                    placeholder="TechCorp Inc."
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="industry" className="text-slate-300 font-medium text-xs">Secteur d'activité</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9">
                        <SelectValue placeholder="Sélectionner un secteur" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="technology">Technologie</SelectItem>
                        <SelectItem value="healthcare">Santé</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="retail">Commerce</SelectItem>
                        <SelectItem value="manufacturing">Industrie</SelectItem>
                        <SelectItem value="education">Éducation</SelectItem>
                        <SelectItem value="real-estate">Immobilier</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="companySize" className="text-slate-300 font-medium text-xs">Taille de l'entreprise</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9">
                        <SelectValue placeholder="Sélectionner la taille" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="startup">Startup (1-10)</SelectItem>
                        <SelectItem value="small">Petite (11-50)</SelectItem>
                        <SelectItem value="medium">Moyenne (51-200)</SelectItem>
                        <SelectItem value="large">Grande (201-1000)</SelectItem>
                        <SelectItem value="enterprise">Enterprise (1000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="painPoint" className="text-slate-300 font-medium text-xs">Point de douleur principal</Label>
                  <Input
                    id="painPoint"
                    placeholder="ex: Processus manuels, Faibles taux de conversion, Coûts élevés"
                    value={formData.painPoint}
                    onChange={(e) => handleInputChange('painPoint', e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9"
                  />
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-2 md:space-y-3 flex-1">
              <div className="flex items-center gap-2 pb-1 md:pb-2 border-b border-slate-700/50">
                <div className="p-1.5 bg-purple-600/20 rounded-lg">
                  <Package className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base">Votre Produit/Service</h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="productName" className="text-slate-300 font-medium text-xs">Nom du produit/service</Label>
                  <Input
                    id="productName"
                    placeholder="Votre produit SaaS"
                    value={formData.productName}
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="productDescription" className="text-slate-300 font-medium text-xs">Description brève</Label>
                  <Textarea
                    id="productDescription"
                    placeholder="Que fait votre produit ? Gardez-le concis..."
                    value={formData.productDescription}
                    onChange={(e) => handleInputChange('productDescription', e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs min-h-14 max-h-20"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="valueProposition" className="text-slate-300 font-medium text-xs">Bénéfice/Résultat clé</Label>
                  <Input
                    id="valueProposition"
                    placeholder="ex: Économisez 10h par semaine, Augmentez les ventes de 30%"
                    value={formData.valueProposition}
                    onChange={(e) => handleInputChange('valueProposition', e.target.value)}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="callObjective" className="text-slate-300 font-medium text-xs">Objectif de l'appel</Label>
                  <Select value={formData.callObjective} onValueChange={(value) => handleInputChange('callObjective', value)}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all text-xs h-9">
                      <SelectValue placeholder="Quel est votre objectif ?" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="demo">Programmer une démo</SelectItem>
                      <SelectItem value="meeting">Prendre un rendez-vous découverte</SelectItem>
                      <SelectItem value="trial">Commencer un essai gratuit</SelectItem>
                      <SelectItem value="consultation">Programmer une consultation</SelectItem>
                      <SelectItem value="information">Recueillir des informations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              disabled={isPending || isOffLimite}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold py-2.5 md:py-3 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-auto"
            >
              {isPending ? (
                <>
                  <Clock className="mr-2 h-3 w-3 md:h-4 md:w-4 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-3 w-3 md:h-4 text-base font-light md:w-4" />
                  Générer le Script de Cold Calling
                </>
              )}
            </Button>
            {isOffLimite && (
              <p className="text-center text-red-400 text-xs">
                Limite atteinte, veuillez mettre à niveau votre plan
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
