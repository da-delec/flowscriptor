import Nav from "@/components/nav";
import LandingNav from "@/components/landingNav";
import { ZapIcon } from "lucide-react"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Logo from '@/public/logo.png'
import { string } from "zod";
import { Badge } from "@/components/ui/badge"
import { FaArrowRight } from "react-icons/fa";
import Features from "./features";
import PricingSection from "./pricing-section";


export default function Home() {
  console.log(Logo.src)
  return (
    <div className="  min-h-screen   pb-20 overflow-hidden font-[family-name:var(--font-geist-sans)]">
          <LandingNav />
          <div className=" flex items-center  h-[90vh]">
          <GridPattern 
           className={cn(
            "[mask-image:radial-gradient(420px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="  mx-8 mb-10 md:w-[500px] lg:w-[600px]   " id="hero-section"> 
        <Badge className=" bg-indigo-400/45 border text-slate-100 my-4 border-indigo-500">
      <ZapIcon className="-ms-0.5 opacity-60" size={12} aria-hidden="true" />
      AI powered cold call script
    </Badge>
        <h1 className=" lg:text-5xl text-slate-50 mb-8 font-semibold text-4xl">Generate High-Converting Cold Call Scripts in <span className=" text-indigo-400">Seconds</span></h1>
        <h2 className=" lg:text-xl text-slate-300 text-start">Callia helps you create effective, personalized call scripts powered by AI — so you sound natural and feel confident from the very first word.
        </h2>
        <div id="button" className=" w-full  flex  justify-start gap-3 items-center mt-10 h-20">
           <Button className=" border cursor-pointer bg-indigo-500  border-none">Get Started for free <FaArrowRight /></Button>
           <Button className=" border cursor-pointer bg-slate-200 text-slate-900  border-none">How it works</Button>

        </div>
        <p className=" text-sm text-slate-400">No credit card required • 14-day free trial</p>

       
        </div> 
        <div className=" relative  h-full flex-1">
        </div> 
        
        </div>
        <Features />
        <PricingSection />
    </div>
  );
}
