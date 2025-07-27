"use client"
import React, { useState, useMemo } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { coldCallTemplatesWithPlan } from './data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Copy, Eye, Star, Calendar, Building, Sparkles, Lock, MessageSquare } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import UpgradeCard from "@/components/components/upgrade-card";

// Types pour les templates
type ScriptTemplate = {
  secteur: string;
  plan: {
    préparation: string[];
    script: string;
    objections: Array<{ objection: string; reponse: string }>;
    suivi: string[];
  };
  objectif: string;
};

const getSectorColor = (sector: string) => {
  switch (sector.toLowerCase()) {
    case 'immobilier':
      return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
    case 'assurance':
      return 'bg-green-600/20 text-green-400 border-green-600/30';
    case 'saas':
    case 'tech':
      return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
    case 'santé':
      return 'bg-red-600/20 text-red-400 border-red-600/30';
    case 'services it':
      return 'bg-orange-600/20 text-orange-400 border-orange-600/30';
    case 'finance':
      return 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30';
    default:
      return 'bg-slate-600/20 text-slate-400 border-slate-600/30';
  }
};

const TemplateCard = ({ template }: { template: ScriptTemplate }) => {
  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(template.plan.script);
      // TODO: toast notification
      console.log(`Template ${template.secteur} copié`);
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
    }
  };

  return (
    <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
      {/* Badge Premium */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          <Sparkles className="w-3 h-3 mr-1" />
          Template
        </Badge>
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
              {template.secteur}
            </CardTitle>
            <CardDescription className="text-slate-400 text-sm leading-relaxed">
              {template.objectif}
            </CardDescription>
          </div>
        </div>
        
        {/* Tags et métadonnées */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge className={getSectorColor(template.secteur)} variant="outline">
            <Building className="w-3 h-3 mr-1" />
            {template.secteur.split('–')[0].trim()}
          </Badge>
          <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30" variant="outline">
            <MessageSquare className="w-3 h-3 mr-1" />
            Optimisé
          </Badge>
        </div>
        
        {/* Métadonnées */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {template.plan.préparation.length} étapes
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {template.plan.objections.length} objections
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        {/* Script */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-blue-600/20 rounded-lg">
              <MessageSquare className="h-4 w-4 text-blue-400" />
            </div>
            <h4 className="text-white font-medium text-sm">Script optimisé</h4>
          </div>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl p-4 relative group/script border border-slate-700/50">
            <p className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">{template.plan.script}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyTemplate}
              className="absolute top-3 right-3 opacity-0 group-hover/script:opacity-100 transition-all duration-200 bg-slate-800/80 hover:bg-slate-700/80 text-white"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Objections */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-red-600/20 rounded-lg">
              <MessageSquare className="h-4 w-4 text-red-400" />
            </div>
            <h4 className="text-white font-medium text-sm">Objections courantes</h4>
          </div>
          <div className="space-y-3">
            {template.plan.objections.map((obj, index) => (
              <div key={index} className="bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-xl p-4 border border-red-800/30">
                <p className="text-red-300 text-sm font-medium mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  "{obj.objection}"
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">{obj.reponse}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Préparation */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-green-600/20 rounded-lg">
              <Calendar className="h-4 w-4 text-green-400" />
            </div>
            <h4 className="text-white font-medium text-sm">Préparation</h4>
          </div>
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-800/20 rounded-xl p-4 border border-green-800/30">
            <ul className="text-slate-300 text-sm space-y-2">
              {template.plan.préparation.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-400 text-xs font-bold">{index + 1}</span>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Suivi */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-purple-600/20 rounded-lg">
              <Building className="h-4 w-4 text-purple-400" />
            </div>
            <h4 className="text-white font-medium text-sm">Plan de suivi</h4>
          </div>
          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-800/20 rounded-xl p-4 border border-purple-800/30">
            <ul className="text-slate-300 text-sm space-y-2">
              {template.plan.suivi.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-purple-400 text-xs font-bold">{index + 1}</span>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ScriptTemplate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSector, setFilterSector] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const { data: session, isPending } = authClient.useSession();
  
  // Vérifier si l'utilisateur a accès (pas FREE)
  const hasAccess = session?.user && 'plan' in session.user && session.user.plan !== "FREE";
  const userPlan = session?.user && 'plan' in session.user ? session.user.plan : "FREE";

  // Recherche et filtre
  const filteredTemplates = useMemo(() => {
    return coldCallTemplatesWithPlan.filter((template) => {
      const matchesSearch =
        template.secteur.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.objectif.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.plan.script.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSector = filterSector === "all" || template.secteur.toLowerCase().includes(filterSector.toLowerCase());
      return matchesSearch && matchesSector;
    });
  }, [searchQuery, filterSector]);

  // Récupérer tous les secteurs uniques pour le filtre
  const sectors = useMemo(() => {
    const sectors = Array.from(new Set(coldCallTemplatesWithPlan.map((t) => t.secteur.split('–')[0].trim())))
      .filter(sector => sector && sector.trim() !== '');
    return sectors;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-3 md:p-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Header avec gradient */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Templates de Scripts
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Découvrez nos templates optimisés et testés pour différents scénarios de vente. 
              Chaque template inclut un script complet, des objections courantes et un plan de suivi.
            </p>
          </div>
        </div>

        {/* Contenu principal avec effet de flou si pas d'accès */}
        <div className={`relative ${!hasAccess ? 'blur-sm pointer-events-none' : ''}`}>
          {/* Barre de recherche et filtres avec design amélioré */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  placeholder="Rechercher un template..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                />
              </div>
              <Select value={filterSector} onValueChange={setFilterSector}>
                <SelectTrigger className="w-[180px] bg-slate-800/50 border-slate-600 text-white focus:border-indigo-500">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filtrer par secteur" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="all">Tous les secteurs</SelectItem>
                  {sectors.map((sector) => (
                    <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-slate-700/50">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`h-8 w-8 p-0 ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  <Sparkles className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`h-8 w-8 p-0 ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Affichage grid/list */}
          {filteredTemplates.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-16">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 text-center">
                <Sparkles className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">Aucun template trouvé.</p>
                <p className="text-slate-500 text-sm mt-2">Essayez de modifier vos critères de recherche</p>
              </div>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTemplates.map((template, index) => (
                <TemplateCard key={index} template={template} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTemplates.map((template, index) => (
                <TemplateCard key={index} template={template} />
              ))}
            </div>
          )}
        </div>

        {/* Overlay avec card d'upgrade pour les utilisateurs FREE */}
        {!hasAccess && (
          <div className="absolute inset-0 mt-40 flex items-start justify-center z-10">
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-4 border border-slate-700/50 shadow-2xl">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-500/30">
                    <Lock className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Fonctionnalité Premium</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Les templates de scripts sont disponibles uniquement pour les utilisateurs STARTER et ULTRA. 
                  Améliorez votre plan pour accéder à cette fonctionnalité exclusive.
                </p>
                <UpgradeCard infos={userPlan as any} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScriptTemplate;
