import React from 'react'

interface GradientBackgroundProps {
  children: React.ReactNode
  className?: string
}

const GradientBackground = ({ children, className = "" }: GradientBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 ${className}`}>
      {children}
    </div>
  )
}

export default GradientBackground 