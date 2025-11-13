"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Clock } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Tu farmacia de confianza, siempre cerca tuyo
              </h1>
              <p className="text-lg text-muted-foreground">
                Medicamentos, perfumería y atención profesional todos los días. Contamos con farmacéuticos matriculados
                para cuidar tu salud.
              </p>
            </div>

            {/* Trust Badge */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Más de 15 años cuidando tu salud</p>
                <p className="text-sm text-muted-foreground">Confianza de miles de familias en la región</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 bg-green-600 hover:bg-green-700"
                onClick={() => (window.location.href = "https://wa.me/5491234567890")}
              >
                <MessageCircle className="w-5 h-5" />
                Hacer consulta por WhatsApp
              </Button>
              <Button size="lg" variant="outline">
                Ver servicios y horarios
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="/farmac-utico-profesional-atendiendo-cliente-en-far.jpg" alt="Farmacia Salud Total" className="w-full rounded-lg shadow-lg" />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Estamos abiertos</span>
              </div>
              <p className="text-sm">Lunes a viernes: 8:00 - 20:00 hs</p>
              <p className="text-sm">Sábados: 9:00 - 18:00 hs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
