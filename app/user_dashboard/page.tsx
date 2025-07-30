
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
import GradientBackground from '@/components/ui/gradient-background'
import { STYLES } from '@/lib/styles'

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const userPlan = (session?.user.plan as Plan) || 'FREE'
  const scriptGenerated = (session?.user.scriptGenerated as number) || 0
  const userLimit = LIMITATION[userPlan]
  const isOffLimite = scriptGenerated >= userLimit.scriptLimit

  return (
    <GradientBackground className={STYLES.CONTAINER_PADDING}>
      <div className="w-[90%] mx-auto h-full">
        {/* Header du dashboard */}
       

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
    </GradientBackground>
  )
}

export default page
