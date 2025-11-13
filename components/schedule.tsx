import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertCircle } from "lucide-react"

export default function Schedule() {
  return (
    <section id="guardias" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Guardias y Horarios</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Schedule Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Horario de Atención
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold">Lunes a viernes</p>
                <p className="text-muted-foreground">8:00 - 20:00 hs</p>
              </div>
              <div>
                <p className="font-semibold">Sábados</p>
                <p className="text-muted-foreground">9:00 - 18:00 hs</p>
              </div>
              <div>
                <p className="font-semibold">Domingos</p>
                <p className="text-muted-foreground">10:00 - 14:00 hs</p>
              </div>
            </CardContent>
          </Card>

          {/* Guard Card */}
          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Guardia Farmacéutica
              </CardTitle>
              <CardDescription>Servicio de urgencia disponible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Según cronograma oficial de guardias</p>
                <p className="text-sm text-muted-foreground">
                  Consulta por WhatsApp si necesitás un medicamento fuera del horario habitual
                </p>
              </div>
              <div className="bg-background rounded-lg p-3 border border-primary/20">
                <p className="text-sm font-semibold mb-1">En caso de urgencias</p>
                <p className="text-lg font-bold text-primary">+54 9 11 2345 6789</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
