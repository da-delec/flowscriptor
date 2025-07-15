import Nav from "@/components/nav";
import LandingNav from "@/components/landingNav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magicui/grid-pattern";
export default function Home() {
  return (
    <div className="  min-h-screen   pb-20 overflow-hidden font-[family-name:var(--font-geist-sans)]">
          <LandingNav />
          <div className=" flex items-center  h-[90vh]">
          <GridPattern 
           className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="  mx-8 mb-10 " id="hero-section"> 
        <h1 className=" text-slate-50 mb-8 font-semibold text-4xl">Turn Cold Calls into Confident Conversations</h1>
        <h2 className=" text-slate-300">Callia helps you create effective, personalized call scripts powered by AI — so you sound natural and feel confident from the very first word.
        </h2>
        <div id="button" className=" w-full  flex justify-center items-center h-20">
           <Button className=" border border-indigo-300">Get Started for free</Button>
        </div>
        </div>  
        </div>
    </div>
  );
}
