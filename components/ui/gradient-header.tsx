import React from 'react'

interface GradientHeaderProps {
  title: string
  description?: string
  className?: string
}

const GradientHeader = ({ title, description, className = "" }: GradientHeaderProps) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-xl p-4 mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          {title}
        </h1>
        {description && (
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default GradientHeader 