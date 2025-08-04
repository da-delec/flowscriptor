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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-xl p-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Pourquoi choisir FlowScriptor ?
            </h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Des scripts téléphoniques générés par IA qui vous font gagner du temps et des ventes
            </p>
          </div>
        </div>

        {/* Accordion with improved design */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border border-slate-800/70 rounded-xl mb-4 bg-gradient-to-br from-slate-900/90 to-slate-950 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Scripts IA en 10 secondes</h3>
                  <p className="text-slate-400 text-sm">Génération instantanée de scripts personnalisés</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-slate-300 leading-relaxed">
                  Décrivez votre prospect, votre offre et vos objectifs. Notre IA génère en 10 secondes un script 
                  parfaitement adapté à votre situation. Plus besoin de passer des heures à préparer vos appels - 
                  FlowScriptor s'occupe de tout. Vous n'avez qu'à lire et vendre.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-800/70 rounded-xl mb-4 bg-gradient-to-br from-slate-900/90 to-slate-950 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Objections prêtes à l'emploi</h3>
                  <p className="text-slate-400 text-sm">Réponses instantanées à toutes les objections</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-slate-300 leading-relaxed">
                  "C'est trop cher", "Je réfléchis", "Envoyez-moi une brochure"... FlowScriptor anticipe toutes 
                  les objections et vous donne les réponses parfaites. Une section dédiée aux objections qui vous 
                  forme en plus de vous équiper. Transformez chaque "non" en opportunité.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-800/70 rounded-xl mb-4 bg-gradient-to-br from-slate-900/90 to-slate-950 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Templates prêts à l'emploi</h3>
                  <p className="text-slate-400 text-sm">Scripts optimisés pour chaque situation</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-slate-300 leading-relaxed">
                  Découverte, qualification, présentation, closing... Des templates éprouvés pour chaque étape 
                  de votre processus de vente. Adaptez-les en quelques clics à votre offre et démarrez immédiatement. 
                  Plus de stress, juste de l'efficacité.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-800/70 rounded-xl mb-4 bg-gradient-to-br from-slate-900/90 to-slate-950 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Historique et métriques</h3>
                  <p className="text-slate-400 text-sm">Suivez vos performances et améliorez-vous</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-slate-300 leading-relaxed">
                  Retrouvez tous vos scripts générés, vos objections rencontrées et vos résultats. Analysez vos 
                  performances, identifiez vos points d'amélioration et optimisez votre approche. FlowScriptor 
                  vous aide à devenir meilleur à chaque appel.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-800/70 rounded-xl mb-4 bg-gradient-to-br from-slate-900/90 to-slate-950 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Et bien plus à venir...</h3>
                  <p className="text-slate-400 text-sm">Une plateforme qui évolue avec vos besoins</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-slate-300 leading-relaxed">
                  Intégration CRM, analyse de voix, coaching personnalisé, scripts multi-langues... FlowScriptor 
                  ne cesse d'évoluer. Rejoignez-nous dès maintenant et bénéficiez de toutes les nouvelles 
                  fonctionnalités à venir. Votre succès est notre priorité.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Features;
