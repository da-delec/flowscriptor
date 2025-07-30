import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaBolt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdOutlineSell } from "react-icons/md";
import { Sparkles, Zap, Target, TrendingUp, Shield, Phone, Users } from "lucide-react";

const Features = () => {
  return (
    <div
      id="features"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header with gradient */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Pourquoi choisir FlowScriptor ?
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Transformez votre prospection téléphonique avec des scripts IA qui vous accompagnent vers le succès
            </p>
          </div>
        </div>

        {/* Cards with improved design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30">
                <Zap className="h-5 w-5 text-yellow-400" />
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl border border-yellow-500/30">
                  <FaBolt className="text-2xl text-yellow-400" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">Génération Express</CardTitle>
                  <p className="text-slate-400 text-sm">Scripts personnalisés en moins de 10 secondes</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Plus d'heures de préparation. Notre IA génère des scripts de qualité en quelques secondes, 
                vous permettant de vous concentrer sur l'essentiel : conclure des affaires.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                <Shield className="h-5 w-5 text-green-400" />
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                  <FiTarget className="text-2xl text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">Confiance Garantie</CardTitle>
                  <p className="text-slate-400 text-sm">Scripts adaptés à vos besoins spécifiques</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Scripts adaptés au secteur, aux problématiques et à la taille de votre prospect. 
                Chaque script est optimisé pour maximiser vos chances de conversion.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                <TrendingUp className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                  <MdOutlineSell className="text-2xl text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">Résultats Prouvés</CardTitle>
                  <p className="text-slate-400 text-sm">Scripts testés et validés pour le succès</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Nos scripts sont basés sur des techniques de vente éprouvées et des données de conversion réelles. 
                Vous obtenez des scripts qui fonctionnent, pas des suppositions.
              </p>
            </CardContent>
          </Card>
        </div>

       
           
          
        
      </div>
    </div>
  );
};

export default Features;
