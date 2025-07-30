// Styles constants pour éviter les répétitions
export const STYLES = {
  // Backgrounds
  GRADIENT_BACKGROUND: "bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950",
  GRADIENT_HEADER: "bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl",
  GRADIENT_TITLE: "bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent",
  
  // Cards
  CARD_BACKGROUND: "bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/70 rounded-2xl",
  CARD_HOVER: "hover:shadow-xl transition-all duration-300 hover:scale-[1.02]",
  
  // Buttons
  BUTTON_GRADIENT_GREEN: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500",
  BUTTON_GRADIENT_INDIGO: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500",
  BUTTON_GRADIENT_PURPLE: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
  
  // Badges
  BADGE_GREEN: "bg-gradient-to-r from-green-500 to-emerald-500",
  BADGE_INDIGO: "bg-gradient-to-r from-indigo-500 to-purple-500",
  BADGE_PURPLE: "bg-gradient-to-r from-purple-500 to-pink-500",
  
  // Text colors
  TEXT_WHITE: "text-white",
  TEXT_SLATE_300: "text-slate-300",
  TEXT_SLATE_400: "text-slate-400",
  TEXT_SLATE_500: "text-slate-500",
  
  // Spacing
  CONTAINER_PADDING: "p-3 md:p-6",
  CARD_PADDING: "p-6",
  
  // Responsive
  RESPONSIVE_GRID: "grid grid-cols-1 md:grid-cols-3 gap-8",
  RESPONSIVE_TEXT: "text-4xl md:text-5xl",
  RESPONSIVE_PADDING: "px-4 md:px-8"
} as const

// Couleurs pour les plans
export const PLAN_COLORS = {
  FREE: {
    background: STYLES.BADGE_GREEN,
    border: "hover:border-green-500/50",
    button: STYLES.BUTTON_GRADIENT_GREEN,
    icon: "text-green-400"
  },
  STARTER: {
    background: STYLES.BADGE_INDIGO,
    border: "hover:border-indigo-500/50",
    button: STYLES.BUTTON_GRADIENT_INDIGO,
    icon: "text-indigo-400"
  },
  ULTRA: {
    background: STYLES.BADGE_PURPLE,
    border: "hover:border-purple-500/50",
    button: STYLES.BUTTON_GRADIENT_PURPLE,
    icon: "text-purple-400"
  }
} as const 