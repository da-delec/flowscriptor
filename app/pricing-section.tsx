import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
const PricingSection = () => {
  return (
    <div className=' flex flex-col items-center mt-9 text-shadow-slate-50 h-[600px] bg-slate-950 w-full'>
       <h1 className=' font-semibold text-2xl text-slate-50'>Simple, Transparent Pricing</h1>
       <p className=' text-slate-300 mx-4 text-center mt-2'>Choose the plan that fits your needs. No hidden fees, cancel anytime.</p>
       <div id='card-container' className=' h-full w-full '>
        <Card className=' mx-6  bg-slate-800/80 border-indigo-500/75 mt-8 h-[275px]'>
          <CardHeader className='  '>
          <Badge className=' bg-indigo-500 '>Most Popular</Badge>
            <div className=' ' id='left-part'>
         
            <h1 className=' font-semibold text-slate-50 text-lg'>Starter</h1>
            <p className=' text-slate-400'>Perfect for individual sellers</p>
            </div>
          
          </CardHeader>

        </Card>

       </div>
    </div>
  )
}

export default PricingSection
