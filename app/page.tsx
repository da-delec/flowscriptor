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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 overflow-hidden font-[family-name:var(--font-geist-sans)]">
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
          <div className="mb-12">
            <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">FlowScriptor prépare votre appel</CardTitle>
                    <CardDescription className="text-slate-400">Laissez-vous guider de A à Z</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Scripts parfaitement adaptés</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Chaque script est généré spécifiquement pour votre client cible, 
                          son secteur d'activité et vos objectifs de vente.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30 mt-1">
                        <Shield className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Objections anticipées</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Recevez des réponses préparées aux objections les plus courantes, 
                          directement liées à votre script et votre offre.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30 mt-1">
                        <TrendingUp className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Statistiques détaillées</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
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
                        <h3 className="text-lg font-semibold text-white mb-2">Moins de stress</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Plus d'hésitation, plus de stress. FlowScriptor vous donne 
                          la confiance nécessaire pour chaque appel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                    <h4 className="text-lg font-semibold text-white">Le client n'a qu'à se laisser guider</h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    FlowScriptor s'occupe de tout : de la préparation du script à l'analyse des résultats. 
                    Vous vous concentrez sur ce qui compte : vos prospects et vos ventes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Modern stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">+85%</CardTitle>
                    <CardDescription className="text-slate-400">Confiance en soi</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">10s</CardTitle>
                    <CardDescription className="text-slate-400">Script généré</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">-70%</CardTitle>
                    <CardDescription className="text-slate-400">Stress téléphonique</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      
      <Features />
      <PricingSection />
      <FinalPart />
    </div>
  );
}
