"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:info@farmaciasaludtotal.com?subject=Consulta de ${formData.name}&body=${encodeURIComponent(formData.message)}`
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto y Ubicación</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Address */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Ubicación</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">Calle Principal 1234</p>
                <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Abrir en Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Teléfono</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">+54 9 11 2345 6789</p>
                <p className="text-sm text-muted-foreground">WhatsApp disponible</p>
              </div>
              <p className="text-sm font-medium">+54 11 4567 8900</p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium text-sm">info@farmaciasaludtotal.com</p>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Enviar email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Formulario de Contacto Rápido</CardTitle>
            <CardDescription>Déjanos tu mensaje y nos contactaremos pronto</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Tu mensaje..."
                />
              </div>
              <Button size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
