import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pill, Sparkles, Baby, Gauge, Truck } from "lucide-react"

const services = [
  {
    icon: Pill,
    title: "Dispensación de medicamentos recetados",
    description: "Medicamentos de prescripción con asesoramiento farmacéutico profesional",
  },
  {
    icon: Sparkles,
    title: "Medicamentos de venta libre",
    description: "Amplia variedad para tratamientos comunes y automedicación responsable",
  },
  {
    icon: Sparkles,
    title: "Perfumería y cuidado personal",
    description: "Productos de calidad para tu higiene y belleza personal",
  },
  {
    icon: Baby,
    title: "Productos para bebés y mamás",
    description: "Especializados en cuidados maternales e infantiles",
  },
  {
    icon: Gauge,
    title: "Control de presión y glucemia",
    description: "Mediciones gratuitas para monitoreo de tu salud",
  },
  {
    icon: Truck,
    title: "Servicio de delivery",
    description: "Entregas rápidas en tu domicilio en la zona",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una completa gama de servicios farmacéuticos para cuidar la salud de toda tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
