import Logo from "@/public/logo.png"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { useEffect, useState } from "react"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#hero", label: "Accueil", active: false },
  { href: "#features", label: "Fonctionnalités", active: false },
  { href: "#pricing", label: "Tarifs", active: false },
  { href: "#about", label: "À propos", active: false },
]

// Fonction pour faire défiler vers une section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default function LandingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset pour la navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="border-b border-slate-800 px-4 text-slate-100 md:px-6 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-2 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                        className={`py-2 cursor-pointer transition-colors ${
                          activeSection === link.href.replace('#', '') 
                            ? 'text-indigo-400 font-medium' 
                            : 'hover:text-indigo-300'
                        }`}
                        active={activeSection === link.href.replace('#', '')}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  {/* Boutons dans le menu mobile */}
                  <div className="w-full pt-4 border-t border-slate-700 mt-2">
                    <div className="flex flex-col gap-2">
                      <Button asChild variant="ghost" size="sm" className="w-full justify-start text-sm">
                        <Link href={"/auth/sign-in"}>Se connecter</Link>
                      </Button>
                      <Button asChild size="sm" className="w-full bg-indigo-500 text-slate-100 text-sm">
                        <Link href={"/auth/sign-up"}>Commencer</Link>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-1">
            <Image height={50} width={50} alt="logo" src={Logo}></Image>
            <h1 className="pr-6 text-lg font-semibold">FlowScriptor</h1>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={activeSection === link.href.replace('#', '')}
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className={`py-1.5 font-medium cursor-pointer transition-colors ${
                        activeSection === link.href.replace('#', '') 
                          ? 'text-indigo-400' 
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side - Desktop only */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link href={"/auth/sign-in"}>Se connecter</Link>
          </Button>
          <Button asChild size="sm" className="bg-indigo-500 text-slate-100 text-sm">
            <Link href={"/auth/sign-up"}>Commencer</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
