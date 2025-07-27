"use client"

import React from 'react'
import { useState } from 'react'
import Form from './form'
import Script_ from './Script'
import PdfButton from './pdfButton'
import { Sparkles, FileText, Settings } from 'lucide-react'

const Form_and_script = () => {
  const [script, setScript] = useState("")
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header avec gradient */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Générateur de Scripts
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Créez des scripts de cold calling personnalisés et optimisés pour maximiser vos conversions. 
              Remplissez le formulaire et obtenez instantanément un script professionnel.
            </p>
          </div>
        </div>

        {/* Conteneur principal avec design amélioré */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 border border-slate-700/50 rounded-2xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Section Formulaire */}
            <div className="flex-1 lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/30">
                  <Settings className="h-5 w-5 text-indigo-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Configuration</h2>
              </div>
              <div className="h-full min-h-0">
                <Form setScript={setScript} />
              </div>
            </div>
            
            {/* Section Script */}
            <div className="flex-1 lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                  <FileText className="h-5 w-5 text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Script Généré</h2>
              </div>
              <div className="h-full min-h-[700px]">
                <Script_ script={script} />
              </div>
            </div>
          </div>
        </div>

        {/* Zone d'action avec PDF */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-4">
            <PdfButton script={script} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form_and_script
