import React from 'react'
import { LucideIcon } from 'lucide-react'

interface IconContainerProps {
  icon: LucideIcon
  color: 'green' | 'indigo' | 'purple' | 'blue'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const IconContainer = ({ icon: Icon, color, size = 'md', className = "" }: IconContainerProps) => {
  const colorClasses = {
    green: 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30 text-green-400',
    indigo: 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30 text-indigo-400',
    purple: 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-400',
    blue: 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 text-blue-400'
  }

  const sizeClasses = {
    sm: 'p-2 h-4 w-4',
    md: 'p-2 h-5 w-5',
    lg: 'p-3 h-6 w-6'
  }

  return (
    <div className={`${colorClasses[color]} ${sizeClasses[size]} rounded-lg border ${className}`}>
      <Icon className={`${sizeClasses[size]}`} />
    </div>
  )
}

export default IconContainer 