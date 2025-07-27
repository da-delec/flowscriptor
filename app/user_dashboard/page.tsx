
import React from 'react'
import Form_and_script from '../../components/components/form_and_script'
import { Card,CardContent,CardTitle,CardHeader } from '@/components/ui/card'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { Plan } from '@/lib/generated/prisma'
import { LIMITATION } from '@/lib/auth-plan'
import UpgradeCard from '@/components/components/upgrade-card'
import { Button } from '@/components/ui/button'
import PdfButton from '@/components/components/pdfButton'

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const userPlan = session?.user.plan as Plan
  const scriptGenerated = session?.user.scriptGenerated as number
  const userLimit = LIMITATION[userPlan]
  const isOffLimite = scriptGenerated >= userLimit.scriptLimit
  // Fonction pour sauvegarder le script en PDF
  

  // Fonction pour imprimer le script sans problème de type null
  function imprimerScript(script: string) {
    if (!script) {
      alert("Aucun script à imprimer.");
      return;
    }
  }





  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-3 md:p-6">
      <div className=" w-[90%]  mx-auto h-full">
        {/* Header du dashboard */}
        <div className="mb-4  md:w-1/2 md:mb-8 " >
          <h1 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Script Generator</h1>
          <p className="text-slate-400 text-xs md:text-base">Générez des scripts de cold calling personnalisés avec l'IA</p>
       
        </div>

        {/* Contenu principal */}
        <div className="h-full">
          {isOffLimite ? (
            <div className="flex justify-center items-center h-full">
              <UpgradeCard infos={userPlan} />
            </div>
          ) : (
            <Form_and_script />
          )}
        </div>
      </div>
    </div>
  )
}

export default page
