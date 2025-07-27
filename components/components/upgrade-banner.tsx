import React from 'react'
import { Badge } from 'lucide-react'
import { Crown } from 'lucide-react'


const UpgradeBanner = () => {
  return (
  <header className=' mt-5'>
             <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6">
            <Crown className="h-4 w-4" />
            <span>Upgrade Your Plan</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose the Perfect Plan for Your Sales Success
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Unlock more powerful features and generate unlimited high-converting scripts with our premium plans.
          </p>
        </div>
        </header>
  )
}

export default UpgradeBanner
