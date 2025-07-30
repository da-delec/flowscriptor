
import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, TrendingUp, ArrowRight, CheckCircle, MessageSquare, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const FinalPart = () => {
  return (
    <div id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header with modern gradient */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Faites partie des premiers à nous rejoindre
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              FlowScriptor débute son aventure ! Rejoignez-nous dès maintenant et aidez-nous à construire la meilleure solution de prospection téléphonique assistée par IA. Vos retours et votre expérience comptent énormément pour nous.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6 text-center">
            <div className="p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30 mx-auto mb-4 w-fit">
              <Users className="h-8 w-8 text-blue-400 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
            <p className="text-slate-400">Utilisateurs Actifs</p>
          </Card>

          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6 text-center">
            <div className="p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30 mx-auto mb-4 w-fit">
              <TrendingUp className="h-8 w-8 text-green-400 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">85%</h3>
            <p className="text-slate-400">Taux de Réussite</p>
          </Card>

          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6 text-center">
            <div className="p-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl border border-yellow-500/30 mx-auto mb-4 w-fit">
              <Star className="h-8 w-8 text-yellow-400 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">4,7/5</h3>
            <p className="text-slate-400">Note Utilisateurs</p>
          </Card>
        </div>

        {/* Testimonials section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Ce que disent nos utilisateurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "FlowScriptor a complètement transformé ma façon de prospecter. Les scripts sont incroyablement naturels et efficaces."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">S</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Sophie Martin</p>
                  <p className="text-slate-400 text-sm">Responsable Commerciale</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "Les scripts générés par IA sont parfaits. J'ai constaté une augmentation de 40% de mes taux de conversion."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">M</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Marc Dubois</p>
                  <p className="text-slate-400 text-sm">Chargé de Clientèle</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "Enfin un outil qui comprend vraiment la psychologie de la vente. Les scripts sont naturels et convertissent énormément."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">L</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Laure Rodriguez</p>
                  <p className="text-slate-400 text-sm">Directrice Commerciale</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA section */}
       
        

        {/* Contact section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'Aide pour Commencer ?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider à réussir. Contactez-nous à tout moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carte Contact par Email */}
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6 text-center flex flex-col items-center">
              <div className="p-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30 mb-4 w-fit mx-auto">
                <Mail className="h-8 w-8 text-blue-400 mx-auto" />
              </div>
              <CardTitle className="text-xl font-bold text-white mb-2">Contact par Email</CardTitle>
              <CardDescription className="text-slate-400 mb-4">
                Écrivez-nous à tout moment, nous vous répondrons rapidement.
              </CardDescription>
              <a
                href="mailto:contact@flowscriptor.com"
                className="text-indigo-400 font-semibold hover:underline"
              >
                contact@flowscriptor.com
              </a>
            </Card>

            {/* Carte Formulaire de Contact */}
            <Card className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl p-6 text-center flex flex-col items-center">
              <div className="p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30 mb-4 w-fit mx-auto">
                <MessageSquare className="h-8 w-8 text-green-400 mx-auto" />
              </div>
              <CardTitle className="text-xl font-bold text-white mb-2">Formulaire de Contact</CardTitle>
              <CardDescription className="text-slate-400 mb-4">
                Utilisez le formulaire de contact intégré à l'application pour toute demande ou question.
              </CardDescription>
              <Link href="/auth/sign-up">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Accéder au formulaire
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalPart
