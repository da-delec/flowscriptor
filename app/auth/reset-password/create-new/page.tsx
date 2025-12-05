import React, { Suspense } from 'react'
import { CreateNewPasswordForm } from './form'
import { ShineBorder } from '@/components/magicui/shine-border'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { BorderBeam } from '@/components/magicui/border-beam'
import { RippleButton } from '@/components/magicui/ripple-button'
import src from "@/lib/Frame 2.png"
import Image from 'next/image'

const CreateNewPassword = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 w-full flex justify-center items-center relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="absolute inset-0 h-full w-full fill-slate-900/50 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Main Container */}
      <div className='relative z-10 w-full max-w-md mx-4'>
        <div className='relative'>
          {/* Decorative Border */}
          <BorderBeam size={250} duration={8} />
          <BorderBeam size={250} delay={4} duration={8} />
          
          <Suspense fallback={
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-300">Chargement...</p>
            </div>
          }>
            <CreateNewPasswordForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
export default CreateNewPassword
