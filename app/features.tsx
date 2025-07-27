import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaBolt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdOutlineSell } from "react-icons/md";
import { Sparkles, Zap, Target, TrendingUp } from "lucide-react";

const Features = () => {
  return (
    <div
      id="features-section"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header avec gradient */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Why Choose Callia?
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Transform your cold calling game with AI-powered scripts that get results
            </p>
          </div>
        </div>

        {/* Cards avec design amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30">
                <Zap className="h-5 w-5 text-yellow-400" />
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl border border-yellow-500/30">
                  <FaBolt className="text-2xl text-yellow-400" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">Lightning Fast</CardTitle>
                  <p className="text-slate-400 text-sm">Generate personalized scripts in under 10 seconds</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                No more hours of preparation. Our AI generates high-quality, personalized scripts 
                in seconds, so you can focus on what matters most - closing deals.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                <Target className="h-5 w-5 text-green-400" />
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                  <FiTarget className="text-2xl text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">Highly Targeted</CardTitle>
                  <p className="text-slate-400 text-sm">Scripts tailored to your prospect's needs</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Scripts tailored to your prospect's industry, pain points, and company size. 
                Every script is optimized for maximum conversion potential.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                <TrendingUp className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                  <MdOutlineSell className="text-2xl text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">Proven Results</CardTitle>
                  <p className="text-slate-400 text-sm">Tested and proven scripts for success</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Tested and proven scripts designed to turn more calls into clients. 
                Our AI learns from successful sales conversations to improve results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
