"use client"

import React from 'react'
import { useState, useCallback } from 'react'
import Form from './form'
import Script_ from './Script'
import PdfButton from './pdfButton'
import { Sparkles, FileText, Settings, Shield, MessageSquare, AlertTriangle } from 'lucide-react'
import GradientBackground from '@/components/ui/gradient-background'
import GradientHeader from '@/components/ui/gradient-header'
import IconContainer from '@/components/ui/icon-container'
import { STYLES } from '@/lib/styles'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TypingAnimation } from '../magicui/typing-animation'

const Form_and_script = () => {
  const [script, setScript] = useState("")
  const [objections, setObjections] = useState<Array<{objection: string, response: string}>>([])
  
  // Fonction simple pour traiter le résultat avec useCallback
  const handleResult = useCallback((result: string) => {
    console.log("Résultat reçu:", result)
    
    try {
      const parsed = JSON.parse(result)
      console.log("JSON parsé:", parsed)
      console.log("parsed.script:", parsed.script)
      
      // Vérifier si on a bien un script dans le JSON
      if (parsed.script) {
        console.log("Script extrait:", parsed.script)
        setScript(parsed.script)
        setObjections(parsed.objections || [])
      } else {
        console.log("Pas de script dans le JSON, utilisation du résultat brut")
        setScript(result)
        setObjections([])
      }
    } catch (error) {
      console.log("Erreur parsing JSON:", error)
      // Si pas de JSON, c'est juste un script
      setScript(result)
      setObjections([])
    }
  }, [])
  
  return (
    <GradientBackground className={STYLES.CONTAINER_PADDING}>
      <div className="max-w-7xl mx-auto">
        {/* Header avec gradient */}
        <GradientHeader 
          title="Générateur de Scripts"
          description="Créez des scripts de cold calling personnalisés et optimisés pour maximiser vos conversions. Remplissez le formulaire et obtenez instantanément un script professionnel."
        />

        {/* Conteneur principal sans card englobante */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-6">
          {/* Section Formulaire */}
          <div className="flex-1 lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <IconContainer icon={Settings} color="indigo" />
              <h2 className="text-xl font-semibold text-white">Configuration</h2>
            </div>
            <div className="h-full ">
              <Form setScript={handleResult} />
            </div>
          </div>
          
          {/* Section Script et Objections */}
          <div className="flex-1  ">
            <div className="space-y-3 lg:space-y-4">
              {/* Section Script */}
              <div>
                <div className="flex items-center gap-3 mb-3 lg:mb-4">
                  <IconContainer icon={FileText} color="green" />
                  <h2 className="text-xl font-semibold text-white">Script Généré</h2>
                </div>
                <div className="h-full min-h-[250px] md:min-h-[200px] lg:min-h-[300px]">
                  <Script_ script={script} />
                </div>
              </div>

              {/* Section Objections */}
              <div>
                <div className="flex items-center  gap-3 mb-3 lg:mb-4">
                  <IconContainer icon={Shield} color="purple" />
                  <h2 className="text-xl font-semibold text-white">Réponses aux Objections</h2>
                </div>
                <div className="h-full   ">
                  {objections.length > 0 ? (
                    <div className="space-y-2 lg:space-y-3">
                      {objections.map((objection, index) => (
                        <Card key={index} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <Badge variant="destructive" className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 text-red-400">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Objection {index + 1}
                              </Badge>
                              <span className="text-slate-400 text-xs lg:text-sm">Réponse préparée</span>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2 lg:space-y-3">
                            {/* Objection */}
                            <div className="space-y-1 lg:space-y-2">
                              <div className="flex items-center gap-2">
                                <MessageSquare className="h-3 w-3 lg:h-4 lg:w-4 text-red-400" />
                                <h4 className="text-xs lg:text-sm font-semibold text-red-200">Objection :</h4>
                              </div>
                              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-lg p-2">
                                <p className="text-slate-200 text-xs italic">
                                  "{objection.objection}"
                                </p>
                              </div>
                            </div>

                            {/* Réponse */}
                            <div className="space-y-1 lg:space-y-2">
                              <div className="flex items-center gap-2">
                                <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-green-400" />
                                <h4 className="text-xs lg:text-sm font-semibold text-green-200">Votre réponse :</h4>
                              </div>
                              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-lg p-2">
                                <TypingAnimation duration={0.25} className="text-slate-100 text-xs leading-relaxed">
                                  {objection.response}
                                </TypingAnimation>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
                      <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl p-6 text-center max-w-sm">
                        <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                          <Shield className="h-6 w-6 text-purple-400" />
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2">Aucune objection générée</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          Remplissez le formulaire pour générer des réponses aux objections !
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                            <Sparkles className="h-3 w-3" />
                            <span>Réponses personnalisées</span>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                            <MessageSquare className="h-3 w-3" />
                            <span>Objections courantes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

     
       
      </div>
    </GradientBackground>
  )
}

export default Form_and_script
