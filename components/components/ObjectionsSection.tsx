'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TypingAnimation } from '../magicui/typing-animation';
import { Sparkles, Shield, MessageSquare, AlertTriangle } from 'lucide-react';

interface Objection {
  objection: string;
  response: string;
}

interface ObjectionsSectionProps {
  objections: Objection[];
}

const ObjectionsSection = ({ objections }: ObjectionsSectionProps) => {
  const isEmpty = !objections || objections.length === 0;

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      {/* Header du bloc objections avec design amélioré */}
      <div className="bg-gradient-to-r from-slate-900/95 to-slate-950/95 border border-slate-700/50 rounded-t-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
            <Shield className="text-xl text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-purple-200 tracking-tight">Réponses aux objections</h2>
            <p className="text-slate-400 text-sm">Réponses préparées aux objections courantes</p>
          </div>
        </div>
      </div>

      {/* Contenu des objections */}
      <div className="flex-1 bg-gradient-to-br from-slate-900/90 to-slate-950 border-x border-b border-slate-700/50 rounded-b-2xl p-6 overflow-y-auto">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-[300px] w-full">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 text-center max-w-md">
              <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Aucune objection générée</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Remplissez le formulaire à gauche pour générer des réponses aux objections !
              </p>
              <div className="space-y-3">
                <p className="text-slate-500 text-sm">Les objections seront générées automatiquement</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <Shield className="h-4 w-4" />
                  <span>Réponses personnalisées</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {objections.map((objection, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive" className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 text-red-400">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Objection {index + 1}
                    </Badge>
                    <span className="text-slate-400 text-sm">Réponse préparée</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Objection */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-red-400" />
                      <h4 className="text-sm font-semibold text-red-200">Objection :</h4>
                    </div>
                    <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-lg p-3">
                      <p className="text-slate-200 text-sm italic">
                        "{objection.objection}"
                      </p>
                    </div>
                  </div>

                  {/* Réponse */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-400" />
                      <h4 className="text-sm font-semibold text-green-200">Votre réponse :</h4>
                    </div>
                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-lg p-3">
                      <TypingAnimation duration={0.25} className="text-slate-100 text-sm leading-relaxed">
                        {objection.response}
                      </TypingAnimation>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ObjectionsSection; 