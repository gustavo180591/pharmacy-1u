import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    text: "Excelente atención y rapidez en el servicio. Los farmacéuticos siempre están disponibles para asesorar. ¡Muy recomendable!",
    rating: 5,
  },
  {
    name: "Juan Martínez",
    text: "El servicio de delivery es rápido y confiable. Ya es mi farmacia de confianza hace años.",
    rating: 5,
  },
  {
    name: "Lucía Rodríguez",
    text: "Atención profesional y amable. La entrega a domicilio me facilita mucho. ¡Gracias!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo que nuestros clientes dicen</h2>
          <p className="text-lg text-muted-foreground">Testimonios de clientes satisfechos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-foreground font-semibold">{testimonial.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
