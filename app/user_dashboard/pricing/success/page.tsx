"use client";
 
import { useRef } from "react";
import { Crown, CheckCircle, Sparkles, Zap, Users, ArrowRight } from "lucide-react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ConfettiDemo() {
 
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 overflow-hidden">
      {/* Confetti Animation */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <Confetti />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="absolute inset-0 h-full w-full fill-slate-900/50 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 container flex flex-col mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto w-full">
          {/* Success Hero Section */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl relative">
              <BorderBeam size={250} duration={8} />
              <BorderBeam size={250} delay={4} duration={8} />
              
              <div className="relative mb-8">
                {/* Success Animation Circle */}
              
                
                {/* Floating Success Indicators */}
                
              </div>

              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 mb-6 hover:scale-105 transition-transform shadow-lg">
                <Crown className="mr-2 h-3 w-3" />
                Abonnement Ultra Activé
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                Bienvenue dans FlowScriptor Ultra !
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
                Votre paiement a été confirmé et votre abonnement est maintenant actif. Vous êtes prêt à transformer vos appels à froid avec des scripts illimités alimentés par l'IA !
              </p>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Paiement confirmé</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Compte mis à niveau</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Fonctionnalités débloquées</span>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Que faire maintenant ?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Commencez à utiliser toutes les fonctionnalités Ultra de FlowScriptor
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-green-500/50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                      <Zap className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">Générer des Scripts</CardTitle>
                      <CardDescription className="text-slate-400">Créez vos premiers scripts Ultra</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">
                    Accédez à 200 scripts par mois avec des fonctionnalités avancées de personnalisation.
                  </p>
                  <Link href="/user_dashboard/script_template">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white">
                      Commencer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                      <Users className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">Explorer l'Historique</CardTitle>
                      <CardDescription className="text-slate-400">Voir vos scripts générés</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">
                    Consultez tous vos scripts générés et analysez vos performances.
                  </p>
                  <Link href="/user_dashboard/script_history">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white">
                      Explorer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30">
                      <Sparkles className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">Découvrir les Fonctionnalités</CardTitle>
                      <CardDescription className="text-slate-400">Toutes les nouveautés Ultra</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">
                    Export PDF, analytics avancés, templates personnalisés et plus encore.
                  </p>
                  <Link href="/user_dashboard">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
                      Découvrir
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6">
              <CardContent>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Besoin d'aide ?
                </h3>
                <p className="text-slate-300 mb-4">
                  Notre équipe est là pour vous accompagner dans votre succès
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Centre d'aide
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Contact support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

