'use client';

import React from 'react';
import { DialogDemo } from './modal_save';
import { TypingAnimation } from '../magicui/typing-animation';
import { FaRegSave } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Sparkles } from 'lucide-react';

const Script_ = ({ script }: { script: string }) => {
  const isEmpty = !script || script.trim() === '';
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      {/* Header du bloc script avec design amélioré */}
      <div className="bg-gradient-to-r from-slate-900/95 to-slate-950/95 border border-slate-700/50 rounded-t-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/30">
            <FaRegSave className="text-xl text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-200 tracking-tight">Script généré</h2>
            <p className="text-slate-400 text-sm">Script personnalisé pour votre cold calling</p>
          </div>
        </div>
      </div>

      {/* Contenu du script */}
      <div className="flex-1 bg-gradient-to-br from-slate-900/90 to-slate-950 border-x border-b border-slate-700/50 rounded-b-2xl p-6 overflow-y-auto">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-[400px] w-full">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 text-center max-w-md">
              <div className="p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Aucun script généré</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Remplissez le formulaire à gauche pour générer votre script personnalisé !
              </p>
              <div className="space-y-3">
                <p className="text-slate-500 text-sm">Ou utilisez un script template</p>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white">
                  Script template
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl p-6">
            <div className="prose prose-sm md:prose-base text-slate-100 whitespace-pre-wrap font-normal leading-relaxed">
              <TypingAnimation duration={0.25} className="text-start text-slate-100 text-sm md:text-base">
                {script}
              </TypingAnimation>
            </div>
          </div>
        )}
      </div>

      {/* Zone d'action avec design amélioré */}
      <div className="w-full flex justify-center mt-6">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-2">
          <DialogDemo scriptprops={script} />
        </div>
      </div>
    </div>
  );
};

export default Script_;
