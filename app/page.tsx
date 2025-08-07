"use client"

import Nav from "@/components/nav";
import LandingNav from "@/components/landingNav";
import { ZapIcon, Sparkles, ArrowRight, Play, Target, TrendingUp, CheckCircle, Star, Users, Clock, Phone, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Logo from '@/public/logo.png'
import { string } from "zod";
import { Badge } from "@/components/ui/badge"
import { FaArrowRight } from "react-icons/fa";
import Features from "./features";
import FinalPart from "./final-part";
import PricingSection from "./pricing-section";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  console.log(Logo.src)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 overflow-hidden">
      <LandingNav />
      
      {/* Hero Section with modern design */}
      <div id="hero" className="relative flex items-center min-h-[calc(100vh-4rem)] pt-8 md:pt-16 px-4 md:px-8">
        <GridPattern 
          className={cn(
            "[mask-image:radial-gradient(420px_circle_at_center,white,transparent)]",
          )}
        />
        
        {/* Main content with modern design */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 mb-6 hover:scale-105 transition-transform shadow-lg">
              <Phone className="mr-2 h-3 w-3" />
              Votre assistant prospection téléphonique
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transformez votre{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                prospection téléphonique
              </span>{" "}
              en succès
            </h1>
            
            <h2 className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Plus de stress, plus d'hésitation. FlowScriptor vous accompagne dans chaque appel 
              avec des scripts personnalisés qui vous donnent confiance dès le premier mot.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
              <Link href={"/auth/sign-up"}>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Commencer gratuitement
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              Aucune carte de crédit requise • Essai gratuit de 14 jours
            </p>
          </div>

          {/* Nouvelle carte qui explique ce qu'on peut faire */}
          <div className="mb-8">
            <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/30">
                    <Phone className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-white">FlowScriptor prépare votre appel</CardTitle>
                    <CardDescription className="text-slate-400 text-sm">Laissez-vous guider de A à Z</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">Scripts parfaitement adaptés</h3>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          Chaque script est généré spécifiquement pour votre client cible, 
                          son secteur d'activité et vos objectifs de vente.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30 mt-1">
                        <TrendingUp className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">Statistiques détaillées</h3>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          Suivez vos performances avec des analyses précises : 
                          taux de conversion, temps d'appel, objections rencontrées.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30 mt-1">
                        <Zap className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">Moins de stress</h3>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          Plus d'hésitation, plus de stress. FlowScriptor vous donne 
                          la confiance nécessaire pour chaque appel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-4 w-4 text-indigo-400" />
                    <h4 className="text-base font-semibold text-white">Le client n'a qu'à se laisser guider</h4>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    FlowScriptor s'occupe de tout : de la préparation du script à l'analyse des résultats. 
                    Vous vous concentrez sur ce qui compte : vos prospects et vos ventes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Features />
      
      {/* Section Vidéo de démo */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Voir FlowScriptor en action
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Découvrez comment FlowScriptor génère des scripts personnalisés en quelques secondes
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/d83cebd60366461aaa0153f82db2cd26?sid=9504c76f-bed7-41ce-8ca5-356af21b9cf2" 
                frameBorder="0" 
                allowFullScreen 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      
      <PricingSection />
      <FinalPart />
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo et description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="FlowScriptor" className="h-8 w-8" />
                <h3 className="text-xl font-bold text-white">FlowScriptor</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                L'assistant IA qui transforme votre prospection téléphonique. 
                Des scripts personnalisés en 10 secondes pour vendre plus efficacement.
              </p>
            </div>

            {/* Produit */}
            <div>
              <h4 className="text-white font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-slate-400 hover:text-indigo-400 transition-colors">Fonctionnalités</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-indigo-400 transition-colors">Tarifs</a></li>
                <li><a href="/auth/sign-up" className="text-slate-400 hover:text-indigo-400 transition-colors">Essai gratuit</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">API</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Intégrations</a></li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-slate-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-4 md:mb-0">
                <a href="/mentions-legales" className="hover:text-indigo-400 transition-colors">Mentions légales</a>
                <a href="/conditions-utilisation" className="hover:text-indigo-400 transition-colors">Conditions d'utilisation</a>
                <a href="/politique-confidentialite" className="hover:text-indigo-400 transition-colors">Politique de confidentialité</a>
              </div>
              <div className="text-sm text-slate-400">
                © 2025 FlowScriptor. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </footer>
      
  
    </div>
  );
}
