import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: "Medicamento para resfríos",
    category: "Medicamento OTC",
    badge: "Popular",
    image: "/medicamento-antigripal-caja.jpg",
  },
  {
    name: "Protector solar SPF 50",
    category: "Cuidado de la piel",
    badge: "Oferta",
    image: "/protector-solar-botella.jpg",
  },
  {
    name: "Shampoo y acondicionador",
    category: "Perfumería",
    badge: "",
    image: "/champ--botella.jpg",
  },
  {
    name: "Pañales de primera calidad",
    category: "Bebés",
    badge: "Stock",
    image: "/pa-ales-bebe.jpg",
  },
  {
    name: "Vitaminico infantil",
    category: "Suplementos",
    badge: "",
    image: "/vitaminas-jarabe-ni-os.jpg",
  },
  {
    name: "Analgésico y antiinflamatorio",
    category: "Medicamento OTC",
    badge: "Stock",
    image: "/ibuprofeno-caja.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Productos Destacados</h2>
          <p className="text-lg text-muted-foreground mb-8">Conocé nuestra selección de productos más buscados</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow overflow-hidden">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </div>
                  {product.badge && <Badge className="bg-primary">{product.badge}</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Consultar precio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Ver catálogo completo por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
