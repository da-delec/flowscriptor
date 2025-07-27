"use client";
 
import { useRef } from "react";
import { Crown } from "lucide-react";
 import { CheckCircle } from "lucide-react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
 
export default function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);
 
  return (
  <div className="container flex flex-col mx-auto px-4 py-12">
          <div className="fixed inset-0 z-50 pointer-events-none">
    <Confetti />
  </div>
        {/* Success Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            {/* Success Animation Circle */}
            <div className={`w-24 h-24  rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-blue-500 animate-pulse`}>
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            
            {/* Floating Success Indicators */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Callia Ultra!
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-6">
            Your payment was successful and your subscription is now active. You're ready to transform your cold calling with unlimited AI-powered scripts!
          </p>
       
          </div>
         
            <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Payment confirmed</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Account upgraded</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Features unlocked</span>
            </div>
          </div>
          </div>


)}

