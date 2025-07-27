"use client";
import React, { useState, useMemo } from "react";
import { objections } from '@/lib/objections';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Grid3x3, List, Search, Filter, Copy, MessageSquare, Lightbulb, AlertTriangle, Lock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import UpgradeCard from "@/components/components/upgrade-card";

// Type pour les objections
type Objection = {
 id: string;
  titre: string;
  categorie: string;
  reponses: string[];
  tips: string[];
  erreurs: string[];
};

const ObjectionsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { 
    data: session, 
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession() 

  // Vérifier si l'utilisateur a accès (pas FREE)
  const hasAccess = session?.user && 'plan' in session.user && session.user.plan !== "FREE";
  const userPlan = session?.user && 'plan' in session.user ? session.user.plan : "FREE";

  // Recherche et filtre
  const filteredObjections = useMemo(() => {
    return objections.filter((objection) => {
      const matchesSearch =
        objection.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        objection.categorie.toLowerCase().includes(searchQuery.toLowerCase()) ||
        objection.reponses.some(reponse => reponse.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = filterCategory === "all" || objection.categorie === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, filterCategory]);

  // Récupérer toutes les catégories uniques pour le filtre
  const categories = useMemo(() => {
    const cats = Array.from(new Set(objections.map((o) => o.categorie)))
      .filter(cat => cat && cat.trim() !== ''); // Filtrer les catégories vides
    return cats;
  }, []);
{{console.log(session?.user)}}
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'prix':
        return 'bg-red-600/20 text-red-400 border-red-600/30';
      case 'timing':
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
      case 'concurrence':
        return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 'autorité':
        return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
      case 'refus-flou':
        return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
      case 'simplicité / technique':
        return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'refus-poli':
        return 'bg-orange-600/20 text-orange-400 border-orange-600/30';
      case 'besoin-non-percu':
        return 'bg-indigo-600/20 text-indigo-400 border-indigo-600/30';
      case 'experience-negative':
        return 'bg-pink-600/20 text-pink-400 border-pink-600/30';
      case 'budget':
        return 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30';
      default:
        return 'bg-slate-600/20 text-slate-400 border-slate-600/30';
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copié dans le presse-papiers !`);
    } catch (err) {
      toast.error("Erreur lors de la copie");
    }
  };

  const ObjectionCard = ({ objection }: { objection: Objection }) => {
    return (
      <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
        {/* Badge Premium */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Objection
          </Badge>
        </div>
        
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <CardTitle className="text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                {objection.titre}
              </CardTitle>
              <CardDescription className="text-slate-400 text-sm leading-relaxed">
                {objection.categorie}
              </CardDescription>
            </div>
          </div>
          
          {/* Tags et métadonnées */}
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={getCategoryColor(objection.categorie)} variant="outline">
              <MessageSquare className="w-3 h-3 mr-1" />
              {objection.categorie}
            </Badge>
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30" variant="outline">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Critique
            </Badge>
          </div>
          
          {/* Métadonnées */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                {objection.reponses.length} réponses
              </span>
              <span className="flex items-center gap-1">
                <Lightbulb className="w-3 h-3" />
                {objection.tips.length} conseils
              </span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 space-y-4">
          {/* Réponses */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-blue-600/20 rounded-lg">
                <MessageSquare className="h-4 w-4 text-blue-400" />
              </div>
              <h4 className="text-white font-medium text-sm">Réponses suggérées</h4>
            </div>
            <div className="space-y-3">
              {objection.reponses.map((reponse, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-900/20 to-indigo-800/20 rounded-xl p-4 relative group/reponse border border-blue-800/30">
                  <p className="text-slate-300 text-sm leading-relaxed">{reponse}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 opacity-0 group-hover/reponse:opacity-100 transition-all duration-200 bg-slate-800/80 hover:bg-slate-700/80 text-white"
                    onClick={() => copyToClipboard(reponse, "Réponse")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-yellow-600/20 rounded-lg">
                <Lightbulb className="h-4 w-4 text-yellow-400" />
              </div>
              <h4 className="text-white font-medium text-sm">Conseils</h4>
            </div>
            <div className="space-y-2">
              {objection.tips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-900/20 to-orange-800/20 rounded-xl p-4 border border-yellow-800/30">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-yellow-400 text-xs font-bold">{index + 1}</span>
                    </span>
                    <p className="text-yellow-300 text-sm leading-relaxed">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-red-600/20 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </div>
              <h4 className="text-white font-medium text-sm">À éviter</h4>
            </div>
            <div className="space-y-2">
              {objection.erreurs.map((erreur, index) => (
                <div key={index} className="bg-gradient-to-r from-red-900/20 to-pink-800/20 rounded-xl p-4 border border-red-800/30">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-red-400 text-xs font-bold">{index + 1}</span>
                    </span>
                    <p className="text-red-300 text-sm leading-relaxed">{erreur}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  // Loading state
  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-3 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-slate-400">Chargement...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-3 md:p-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Header avec gradient */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-2xl p-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
              Gestion des Objections
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Maîtrisez les objections courantes en cold calling avec nos réponses optimisées, 
              conseils pratiques et pièges à éviter pour maximiser vos conversions.
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
                  placeholder="Rechercher une objection..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-red-500/20"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[180px] bg-slate-800/50 border-slate-600 text-white focus:border-red-500">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filtrer par catégorie" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-slate-700/50">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`h-8 w-8 p-0 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`h-8 w-8 p-0 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Affichage grid/list */}
          {filteredObjections.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-16">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 text-center">
                <AlertTriangle className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">Aucune objection trouvée.</p>
                <p className="text-slate-500 text-sm mt-2">Essayez de modifier vos critères de recherche</p>
              </div>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredObjections.map((objection) => (
                <ObjectionCard key={objection.id} objection={objection} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredObjections.map((objection) => (
                <ObjectionCard key={objection.id} objection={objection} />
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
                  <div className="p-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-red-500/30">
                    <Lock className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Fonctionnalité Premium</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  La gestion des objections est disponible uniquement pour les utilisateurs STARTER et ULTRA. 
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

export default ObjectionsPage;
