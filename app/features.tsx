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

const Features = () => {
  return (
    <div
      id="features-section"
      className=" flex flex-col items-center  mt-8 bg-slate-950 min-h-[700px]"
    >
      <h1 className=" text-slate-100 mb-4 font-semibold text-3xl">
        Why Choose ConvAI?
      </h1>
      <p className=" mx-3 text-center text-slate-300">
        Transform your cold calling game with AI-powered scripts that get
        results
      </p>
      <Card className=" mt-12 cursor-pointer   hover:shadow-xl hover:shadow-indigo-500/50 border-slate-700 max-w-[500px] bg-slate-800/80  mb-4 min-h-[120px] w-[80%]">
        <CardHeader>
          <FaBolt className=" text-indigo-500 text-4xl" />
          <CardTitle className=" text-slate-50">Lightning Fast</CardTitle>
          <p className=" text-slate-400">Generate personalized scripts in under 10 seconds. No more hours of preparation.</p>
        </CardHeader>
      </Card>
      <Card className=" cursor-pointer transition-shadow duration-200 hover:shadow-xl hover:shadow-indigo-500/50 border-slate-700/80 max-w-[500px] bg-slate-800/80 my-4 min-h-[120px] w-[80%]">
        <CardHeader>
          <FiTarget className=" text-indigo-500 text-4xl" />
          <CardTitle className=" text-slate-50">Highly Targeted</CardTitle>
          <p className=" text-slate-400">Scripts tailored to your prospect's industry, pain points, and company size.</p>
        </CardHeader>
      </Card>
      <Card className=" cursor-pointer hover:shadow-xl hover:shadow-indigo-500/50 border-slate-700 max-w-[500px] bg-slate-800/80 my-4 min-h-[120px] w-[80%]">
        <CardHeader>
          <MdOutlineSell className=" text-indigo-500 text-4xl" />
          <CardTitle className=" text-slate-50">Proven Results</CardTitle>
          <p className=" text-slate-400">Tested and proven scripts designed to turn more calls into clients. ✅

</p>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Features;
