import React from 'react'

interface GradientHeaderProps {
  title: string
  description?: string
  className?: string
}

const GradientHeader = ({ title, description, className = "" }: GradientHeaderProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default GradientHeader 