import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Zap, Users, Clock, Crown, Gift } from 'lucide-react';
import Link from 'next/link';

const PricingSection = () => {
  return (
    <div id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header with modern gradient */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Tarification Adaptée au Marché Français
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Des prix compétitifs pour vous accompagner dans votre prospection téléphonique. Aucuns frais cachés, annulez à tout moment.
            </p>
          </div>
        </div>

        {/* Modernized pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-green-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                <Gift className="w-3 h-3 mr-1" />
                Gratuit
              </Badge>
            </div>
            
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                  <Gift className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Découverte</CardTitle>
                  <CardDescription className="text-slate-400">Parfait pour tester FlowScriptor</CardDescription>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">0€</span>
                  <span className="text-slate-400">pour toujours</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Aucune carte de crédit requise</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">3 scripts générés par IA</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Modèles de scripts de base</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Support communautaire</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Options de personnalisation de base</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border border-slate-600"></div>
                  <span className="text-slate-500">Fonctionnalités avancées (verrouillées)</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border border-slate-600"></div>
                  <span className="text-slate-500">Support prioritaire (verrouillé)</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-6">
              <Link href="/auth/sign-up" className="w-full">
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  Commencer gratuitement
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Starter Plan */}
          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                <Star className="w-3 h-3 mr-1" />
                Populaire
              </Badge>
            </div>
            
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30">
                  <Zap className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Starter</CardTitle>
                  <CardDescription className="text-slate-400">Parfait pour les vendeurs individuels</CardDescription>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">15,99€</span>
                  <span className="text-slate-400">/mois</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Aucune carte de crédit requise pour l'essai</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">30 scripts générés par IA par mois</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Accès à toutes les fonctionnalités principales</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Support par email (réponse sous 24h)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">6 modèles de scripts prêts à l'emploi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Options de personnalisation avancées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Historique des scripts et analyses</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-6">
              <Link href="/auth/sign-up" className="w-full">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  Commencer avec Starter
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Ultra Plan */}
          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>
            
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                  <Crown className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Ultra</CardTitle>
                  <CardDescription className="text-slate-400">Idéal pour les professionnels et petites équipes</CardDescription>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">29,99€</span>
                  <span className="text-slate-400">/mois</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Support prioritaire et fonctionnalités avancées</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Scripts générés par IA illimités</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Support prioritaire par email</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Tous les modèles de scripts premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Fonctionnalités équipe et organisation (bientôt)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Analyses et rapports avancés (bientôt)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Modèles de scripts personnalisés</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-6">
              <Link href="/auth/sign-up" className="w-full">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  Commencer avec Ultra
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
