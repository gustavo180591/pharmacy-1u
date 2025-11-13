"use client"

import { useState } from "react"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background border-b border-border shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">FS</span>
          </div>
          <div className="hidden md:block">
            <h1 className="font-bold text-xl text-foreground">Farmacia Salud Total</h1>
            <p className="text-xs text-muted-foreground">Tu farmacia de confianza</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("productos")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Productos
          </button>
          <button
            onClick={() => scrollToSection("obras-sociales")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Obras Sociales
          </button>
          <button
            onClick={() => scrollToSection("guardias")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Guardias
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            onClick={() => (window.location.href = "tel:+5491234567890")}
          >
            <Phone className="w-4 h-4" />
            Llamar
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-green-600 hover:bg-green-700"
            onClick={() => (window.location.href = "https://wa.me/5491234567890")}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="flex flex-col p-4 gap-4">
            <button onClick={() => scrollToSection("inicio")} className="text-left py-2 hover:text-primary">
              Inicio
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-left py-2 hover:text-primary">
              Servicios
            </button>
            <button onClick={() => scrollToSection("productos")} className="text-left py-2 hover:text-primary">
              Productos
            </button>
            <button onClick={() => scrollToSection("obras-sociales")} className="text-left py-2 hover:text-primary">
              Obras Sociales
            </button>
            <button onClick={() => scrollToSection("guardias")} className="text-left py-2 hover:text-primary">
              Guardias
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-left py-2 hover:text-primary">
              Contacto
            </button>
            <div className="flex gap-2 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 bg-transparent"
                onClick={() => (window.location.href = "tel:+5491234567890")}
              >
                <Phone className="w-4 h-4" />
                Llamar
              </Button>
              <Button
                size="sm"
                className="w-full gap-2 bg-green-600 hover:bg-green-700"
                onClick={() => (window.location.href = "https://wa.me/5491234567890")}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
