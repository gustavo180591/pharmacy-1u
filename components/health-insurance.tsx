import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const insurances = ["IOMA", "OSECAC", "PAMI", "Swiss Medical", "SAMIC", "Medife", "SanCor Salud", "Más Salud"]

export default function HealthInsurance() {
  return (
    <section id="obras-sociales" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Obras Sociales y Prepagas</CardTitle>
            <CardDescription className="text-base">
              Trabajamos con las principales obras sociales y prepagas de la zona
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {insurances.map((insurance, i) => (
                <div
                  key={i}
                  className="flex items-center p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span className="font-medium">{insurance}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">¿Tu obra social no aparece?</span> Consultanos por WhatsApp o llamanos.
                Podemos ayudarte a verificar tu cobertura.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
