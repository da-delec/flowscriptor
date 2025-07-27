import Nav from "@/components/nav";
import LandingNav from "@/components/landingNav";
import { ZapIcon, Sparkles, ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Logo from '@/public/logo.png'
import { string } from "zod";
import { Badge } from "@/components/ui/badge"
import { FaArrowRight } from "react-icons/fa";
import Features from "./features";
import FinalPart from "./final-part";
import PricingSection from "./pricing-section";


export default function Home() {
  console.log(Logo.src)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <LandingNav />
      
      {/* Hero Section avec design amélioré */}
      <div className="relative flex items-center h-[90vh] px-4 md:px-8">
        <GridPattern 
          className={cn(
            "[mask-image:radial-gradient(420px_circle_at_center,white,transparent)]",
          )}
        />
        
        {/* Contenu principal */}
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-3xl p-8 md:p-12 mb-8">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 mb-6 hover:scale-105 transition-transform">
              <ZapIcon className="mr-2 h-3 w-3" />
              AI powered cold call script
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Generate High-Converting Cold Call Scripts in{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Seconds
              </span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Callia helps you create effective, personalized call scripts powered by AI — 
              so you sound natural and feel confident from the very first word.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started for free
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300">
                <Play className="mr-2 h-4 w-4" />
                How it works
              </Button>
            </div>
            
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </div>
      
      <Features />
      <PricingSection />
      <FinalPart />
    </div>
  );
}
