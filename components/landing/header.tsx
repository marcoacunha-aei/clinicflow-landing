"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Teste a IA", href: "#teste-ia" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/clinicflow-logo.png"
              alt="ClinicFlow"
              width={180}
              height={120}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-6"
            >
              <a href="#demonstracao">Agendar Demo</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-xl transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-4 py-6 gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:bg-secondary/50 transition-colors px-4 py-3 rounded-xl text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-border">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base shadow-lg shadow-primary/20"
            >
              <a href="#demonstracao" onClick={() => setMobileMenuOpen(false)}>
                Agendar Demonstração
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
