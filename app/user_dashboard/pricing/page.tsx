"use client"

import React from 'react'
import { Badge } from 'lucide-react'
import UpgradeBanner from '@/components/components/upgrade-banner'
import plans from './plan'
import { Button } from '@/components/ui/button'
import { Card,CardContent,CardHeader,CardTitle,CardFooter,CardDescription } from '@/components/ui/card'
import { useSession } from '../context/sessionContext'
import { 
  Phone, 
  ArrowLeft, 
  Check, 
  X, 
  Crown, 
  Zap, 
  Users, 
  BarChart3,
  Sparkles,
  Infinity,
  Headphones,
  Shield,
  Rocket
} from "lucide-react";
const page = () => {
  const session = useSession();
  const email = session?.email as string;
  const stripeCustomerId = session?.stripeCustomerId as string;
    const handleClick = async (plan:{plan:string,email:string,stripeCustomerId:string})=> {
        const res = await fetch ("/api/create-checkout",{
            method:"POST",
            body:JSON.stringify(plan)
        });
        const data = await res.json();
        if(data.url) {
            window.location.href = data.url
        }
    }
    
  return (
    <div className='  min-h-[92vh] w-full'>
       <UpgradeBanner />
         <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative bg-slate-900 ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700'} transition-all hover:shadow-xl`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={`${plan.popular ? 'bg-blue-600' : 'bg-purple-600'} text-white px-4 py-1`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className="mb-4">
                  {index === 0 && <Sparkles className="h-8 w-8 text-slate-400 mx-auto" />}
                  {index === 1 && <Zap className="h-8 w-8 text-blue-400 mx-auto" />}
                  {index === 2 && <Rocket className="h-8 w-8 text-purple-400 mx-auto" />}
                </div>
                <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-slate-400 mb-6">{plan.description}</CardDescription>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">/{plan.period}</span>
                </div>
                <Button 
                onClick={() => handleClick({ plan: plan.name.toLowerCase(),email:email,stripeCustomerId:session?.stripeCustomerId as string})}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : index === 2 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : ''
                  }`}
                  variant={plan.buttonVariant}
                  disabled={plan.buttonDisabled}
                >
                  {plan.buttonText}
                </Button>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium text-white mb-4">What's included:</h4>
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-slate-500 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-slate-300' : 'text-slate-500'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          ))}
          </div>
          <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">Can I change plans anytime?</h3>
              <p className="text-slate-400">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">What happens to my scripts if I downgrade?</h3>
              <p className="text-slate-400">All your existing scripts remain accessible. You'll just be limited to the new plan's monthly generation limit going forward.</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-slate-400">We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment.</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">Is there a setup fee?</h3>
              <p className="text-slate-400">No setup fees, no hidden costs. The price you see is exactly what you'll pay monthly.</p>
            </div>
          </div>
        </div>

    </div>
  
  )
}

export default page
