
"use client"
import React from 'react'
import { ProfileForm } from './form';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import LoginButton from '@/components/loginButton';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { GridPattern } from '@/components/magicui/grid-pattern'
import { BorderBeam } from '@/components/magicui/border-beam'
import src from "@/lib/Frame 2.png"
import Image from 'next/image'

const page = () => {
  
  return (
    <ViewTransition enter={'slide-in'}>
      <div className='min-h-screen  bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 w-full flex justify-center items-center relative overflow-hidden'>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <GridPattern
            width={40}
            height={40}
            className="absolute inset-0 h-full w-full fill-slate-900/50 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Main Container */}
        <div className='relative z-10 w-full max-w-md mx-4'>
          <div className='relative'>
            {/* Decorative Border */}
            <BorderBeam size={250} duration={8} />
            <BorderBeam size={250} delay={4} duration={8} />
            
            {/* Beta Message */}
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-4 mb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-300 font-semibold">BETA PRIVÉE</span>
              </div>
              <p className="text-orange-200 text-sm">
                Connexion Google uniquement
              </p>
            </div>
            
            {/* Logo/Title Section */}
            <ProfileForm />
          </div>
        </div>
      </div>
    </ViewTransition>
  )
}

export default page

