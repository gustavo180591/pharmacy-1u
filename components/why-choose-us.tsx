import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, HandshakeIcon, Zap } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Farmacéuticos matriculados",
    description: "Profesionales capacitados para brindarte asesoramiento de confianza",
  },
  {
    icon: Users,
    title: "Asesoramiento personalizado",
    description: "Atención dedicada a tus necesidades específicas de salud",
  },
  {
    icon: HandshakeIcon,
    title: "Trabajamos con obras sociales y prepagas",
    description: "Amplia cobertura y facilitamos tus consultas médicas",
  },
  {
    icon: Zap,
    title: "Entrega rápida en tu domicilio",
    description: "Servicio de delivery ágil y confiable para tu comodidad",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-muted-foreground">Razones por las que miles de familias confían en nosotros</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
