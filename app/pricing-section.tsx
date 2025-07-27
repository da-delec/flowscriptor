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
import { Button } from '@/components/ui/button';
const PricingSection = () => {
  return (
    <div className='flex flex-col items-center mt-9 text-shadow-slate-50 h-auto min-h-[800px] md:min-h-0 bg-slate-950 w-full px-2'>
      <h1 className='font-semibold text-2xl text-slate-50'>Simple, Transparent Pricing</h1>
      <p className='text-slate-300 mx-4 text-center mt-2'>Choose the plan that fits your needs. No hidden fees, cancel anytime.</p>
      <div
        id='card-container'
        className='w-full max-w-sm md:max-w-3xl mx-auto flex flex-col md:flex-row gap-8 md:items-stretch mt-8'
      >
        <Card className='flex-1 hover:shadow-lg hover:shadow-indigo-500/65 min-w-[280px] bg-slate-800/80 mx-3 border-indigo-500/75 h-auto md:h-[350px] flex flex-col justify-between'>
          <CardHeader>
            <Badge className='bg-indigo-500'>Most Popular</Badge>
            <div id='left-part'>
              <h1 className='font-semibold text-slate-50 text-xl'>Starter</h1>
              <p className='text-slate-400'>Perfect for individual sellers</p>
              <h1 className='font-semibold text-3xl text-white'>19.99$<span className='text-lg text-slate-400'> /month</span></h1>
              <ul className='mt-4 flex flex-col gap-1'>
                <li className='text-slate-400'>✅ 50 AI-generated scripts per month</li>
                <li className='text-slate-400'>📄 Access to all core features</li>
                <li className='text-slate-400'>📩 Email support (response within 48h)</li>
                <li className='text-slate-400'>🎁 5 ready-to-use cold call script templates</li>
              </ul>
              <div id='button-container' className='flex items-center justify-center mt-4'>
                <Button className='bg-indigo-500'>Get Started with Starter</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent />
        </Card>
        {/* ultra pricing */}
        <Card className='flex-1 min-w-[280px] mx-3 hover:shadow-lg hover:shadow-indigo-500/65 bg-slate-800/80 border-slate-700/80 h-auto md:h-[350px] flex flex-col justify-between'>
          <CardHeader>
            <div id='left-part'>
              <h1 className='font-semibold text-slate-50 text-xl'>Ultra</h1>
              <p className='text-slate-400'>Best for professionals and small teams who need volume and flexibility. </p>
              <h1 className='font-semibold text-3xl text-white'>39.99$<span className='text-lg text-slate-400'> /month</span></h1>
              <ul className='mt-4 flex flex-col gap-1'>
                <li className='text-slate-400'>✅ 200 AI-generated scripts per month</li>
                <li className='text-slate-400'>⚡ Priority support (email + direct chat)</li>
                <li className='text-slate-400'>📤 Script export (PDF, copy, shareable link)</li>
                <li className='text-slate-400'>👥 Team & organization features (coming soon)</li>
              </ul>
            </div>
            <div id='button-container' className='flex items-center justify-center mt-4'>
              <Button className='bg-indigo-500'>Get Started with Ultra</Button>
            </div>
          </CardHeader>
          <CardContent />
        </Card>
      </div>
    </div>
  )
}

export default PricingSection
