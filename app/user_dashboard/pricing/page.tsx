"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import UpgradeBanner from '@/components/components/upgrade-banner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card'
import { useSession } from '../context/sessionContext'
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Crown, 
  Gift,
  Users,
  Clock,
  Headphones,
  Shield,
  Rocket,
  Sparkles,
  Infinity
} from "lucide-react";
import Link from 'next/link'
import { stripe } from "@/lib/stripe";
import GradientBackground from '@/components/ui/gradient-background'
import GradientHeader from '@/components/ui/gradient-header'
import { STYLES, PLAN_COLORS } from '@/lib/styles'

const page = () => {
  const session = useSession();
  const email = session?.email as string;
  const stripeCustomerId = session?.stripeCustomerId as string;
  
  const handleClick = async (plan: { plan: string, email: string, stripeCustomerId: string }) => {
    if(session?.plan === "STARTER"){
      const res = await fetch('/api/stripePortal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stripeCustomerId }),
      });
      if (res.ok) {
        const data = await res.json();
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la création de la session Stripe.");
      }
    }
    const res = await fetch("/api/create-checkout", {
      method: "POST",
      body: JSON.stringify(plan)
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url
    }
  }

  const plans = [
    {
      name: "Free",
      price: "0,00€",
      period: "forever",
      description: "Perfect for trying out FlowScriptor",
      badge: "Free",
      popular: false,
      icon: Gift,
      color: "FREE" as keyof typeof PLAN_COLORS,
      features: [
        { name: "5 AI-generated scripts", included: true },
        { name: "Basic script templates", included: true },
        { name: "Community support", included: true },
        { name: "Basic customization options", included: true },
        { name: "Advanced features", included: false },
        { name: "Priority support", included: false }
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      buttonDisabled: true
    },
    {
      name: "Starter",
      price: "15.99€",
      period: "per month",
      description: "Perfect for individual sellers",
      badge: "Popular",
      popular: true,
      icon: Zap,
      color: "STARTER" as keyof typeof PLAN_COLORS,
      features: [
        { name: "30 AI-generated scripts per month", included: true },
        { name: "6 ready-to-use cold call script templates", included: true },
        { name: "Access to all core features", included: true },
        { name: "Email support (response within 48h)", included: true },
        { name: "Advanced customization options", included: true },
        { name: "Script history & analytics", included: true }
      ],
      buttonText: "Upgrade to Starter",
      buttonVariant: "default" as const,
      buttonDisabled: false
    },
    {
      name: "Ultra",
      price: "29.99€",
      period: "per month",
      description: "Best for professionals and small teams",
      badge: "Premium",
      popular: false,
      icon: Crown,
      color: "ULTRA" as keyof typeof PLAN_COLORS,
      features: [
        { name: "Unlimited AI-generated scripts", included: true },
        { name: "All premium script templates", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced analytics & insights", included: true },
        { name: "Team collaboration", included: true },
        { name: "Custom template builder", included: true },
        { name: "API access", included: true },
        { name: "White-label options", included: true },
        { name: "Advanced AI models", included: true }
      ],
      buttonText: "Upgrade to Ultra",
      buttonVariant: "default" as const,
      buttonDisabled: false
    }
  ];

  return (
    <GradientBackground>
      <UpgradeBanner />
      
      {/* Header with modern gradient */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <GradientHeader 
          title="Choose Your Plan"
          description="Upgrade your plan to unlock more features and generate more scripts."
        />

        {/* Modernized pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isCurrentPlan = session?.plan?.toUpperCase() === plan.name.toUpperCase();
            const planColors = PLAN_COLORS[plan.color];
            
            return (
              <Card 
                key={plan.name} 
                className={`group relative ${STYLES.CARD_BACKGROUND} ${STYLES.CARD_HOVER} ${planColors.border} overflow-hidden`}
              >
                <div className="absolute top-4 right-4">
                  <Badge className={`${planColors.background} text-white text-xs px-3 py-1 rounded-full shadow-lg`}>
                    {plan.color === 'FREE' && <Gift className="w-3 h-3 mr-1" />}
                    {plan.color === 'STARTER' && <Star className="w-3 h-3 mr-1" />}
                    {plan.color === 'ULTRA' && <Crown className="w-3 h-3 mr-1" />}
                    {plan.badge}
                  </Badge>
                </div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${planColors.background.replace('bg-gradient-to-r', 'bg-gradient-to-r')} rounded-xl border`}>
                      <IconComponent className={`h-6 w-6 ${planColors.icon}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                      <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                      {isCurrentPlan ? 'Your current plan' : 'No credit card required for trial'}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border border-slate-600"></div>
                        )}
                        <span className={`text-slate-300 ${!feature.included ? 'opacity-50' : ''}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-6">
                  {isCurrentPlan ? (
                    <Button 
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                      disabled
                    >
                      Current Plan
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handleClick({ 
                        plan: plan.name.toLowerCase(), 
                        email: email, 
                        stripeCustomerId: session?.stripeCustomerId as string 
                      })}
                      className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 ${planColors.button} text-white`}
                    >
                      {plan.buttonText}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Can I change plans anytime?</h3>
              <p className="text-slate-400">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">What happens to my scripts if I downgrade?</h3>
              <p className="text-slate-400">All your existing scripts remain accessible. You'll just be limited to the new plan's monthly generation limit going forward.</p>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-slate-400">We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment.</p>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Is there a setup fee?</h3>
              <p className="text-slate-400">No setup fees, no hidden costs. The price you see is exactly what you'll pay monthly.</p>
            </div>
          </div>
        </div>
      </div>
    </GradientBackground>
  )
}

export default page
