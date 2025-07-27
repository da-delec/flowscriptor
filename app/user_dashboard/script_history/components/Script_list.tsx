"use client";
import React, { useState, useMemo } from "react";
import ScriptCard from "./cards/ScriptCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Grid3x3, List, Search, Filter, CheckCircle, Building } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Type adapté à la base
export type UserScript = {
  Script: string;
  Id: string;
  Title: string;
  Category: string;
  CreatedAt: Date;
  userId: string;
  isFavorite: boolean;
  isClosed: boolean;
};

type Props = {
  data: UserScript[];
};

const Script_list = ({ data }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFavorites, setShowFavorites] = useState(false);
  const [showClosed, setShowClosed] = useState(false);

  // Recherche et filtre
  const filteredScripts = useMemo(() => {
    return data.filter((script) => {
      const matchesSearch =
        script.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        script.Category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        script.Script.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === "all" || script.Category === filterCategory;
      const matchesFavorite = !showFavorites || script.isFavorite;
      const matchesClosed = !showClosed || script.isClosed;
      return matchesSearch && matchesCategory && matchesFavorite && matchesClosed;
    });
  }, [data, searchQuery, filterCategory, showFavorites, showClosed]);

  // Récupérer toutes les catégories uniques pour le filtre
  const categories = useMemo(() => {
    const cats = Array.from(new Set(data.map((s) => s.Category)))
      .filter(cat => cat && cat.trim() !== ''); // Filtrer les catégories vides
    return cats;
  }, [data]);

  // Calculer les statistiques
  const stats = useMemo(() => {
    const totalScripts = data.length;
    const closedScripts = data.filter(script => script.isClosed).length;
    const favoriteScripts = data.filter(script => script.isFavorite).length;
    const closeRate = totalScripts > 0 ? ((closedScripts / totalScripts) * 100).toFixed(1) : '0';
    
    return {
      totalScripts,
      closedScripts,
      favoriteScripts,
      closeRate
    };
  }, [data]);

  return (
    <div className="w-full">
      {/* Section Statistiques */}
      <div className="mx-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Scripts</p>
                <p className="text-white text-2xl font-bold">{stats.totalScripts}</p>
              </div>
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Building className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Scripts Clos</p>
                <p className="text-white text-2xl font-bold">{stats.closedScripts}</p>
              </div>
              <div className="p-2 bg-green-600/20 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Taux de Clôture</p>
                <p className="text-white text-2xl font-bold">{stats.closeRate}%</p>
              </div>
              <div className="p-2 bg-yellow-600/20 rounded-lg">
                <FaStar className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Favoris</p>
                <p className="text-white text-2xl font-bold">{stats.favoriteScripts}</p>
              </div>
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <FaRegStar className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche, filtre, favoris, mode d'affichage */}
      <div className="flex flex-col md:flex-row md:items-center mx-6 gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input
            placeholder="Rechercher un script..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-[180px] bg-slate-800 border-slate-600 text-white">
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
        <Button
          variant={showFavorites ? 'default' : 'outline'}
          className={`flex items-center gap-2 border-indigo-500 ${showFavorites ? 'bg-indigo-500 text-white hover:bg-indigo-400' : 'text-indigo-500 hover:bg-indigo-200'} transition`}
          onClick={() => setShowFavorites((v) => !v)}
        >
          {showFavorites ? <FaStar className="text-yellow-300" /> : <FaRegStar className="text-indigo-400" />}
          {showFavorites ? 'Tous' : 'Favoris'}
        </Button>
        <Button
          variant={showClosed ? 'default' : 'outline'}
          className={`flex items-center gap-2 border-red-500 ${showClosed ? 'bg-red-500 text-white hover:bg-red-400' : 'text-red-500 hover:bg-red-200'} transition`}
          onClick={() => setShowClosed((v) => !v)}
        >
          {showClosed ? <CheckCircle className="text-green-400" /> : <FaRegStar className="text-red-400" />}
          {showClosed ? 'Tous' : 'Fermés'}
        </Button>
        <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="h-8 w-8 p-0"
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Affichage grid/list */}
      {filteredScripts.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center  py-16">
          <p className="text-slate-400 text-lg">Aucun script trouvé.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScripts.map((item) => (
            <ScriptCard infos={item} key={item.Id} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredScripts.map((item) => (
            <ScriptCard infos={item} key={item.Id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Script_list;
