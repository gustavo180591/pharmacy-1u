"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function RecipeForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Nombre: ${formData.name}\nTeléfono: ${formData.phone}\nPedido: ${formData.message}`
    window.location.href = `https://wa.me/5491234567890?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="recetas" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Envía tu receta o pedido</CardTitle>
            <CardDescription className="text-base">
              Compartí tu receta o contanos qué necesitás. Te confirmamos stock y precio por WhatsApp o llamada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
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
                  <label className="block text-sm font-medium mb-2">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+54 9 11 2345 6789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  ¿Qué necesitás? Medicamento, producto o consulta
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Describa el medicamento, producto o su consulta..."
                />
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="font-medium mb-1">Adjuntá tu receta</p>
                <p className="text-sm text-muted-foreground mb-4">Podés tomarle una foto y enviarla por WhatsApp</p>
                <Button variant="outline" size="sm">
                  Seleccionar archivo
                </Button>
              </div>

              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Enviar pedido por WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
