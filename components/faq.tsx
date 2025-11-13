"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Puedo enviar mi receta por WhatsApp?",
    answer:
      "Sí, podés compartir tu receta por WhatsApp. Nuestros farmacéuticos verificarán la disponibilidad del medicamento y los precios, confirimándote por el mismo medio o llamada.",
  },
  {
    question: "¿Hacen envíos a domicilio?",
    answer:
      "Sí, contamos con servicio de delivery a domicilio en la zona. Consulta por los costos y tiempos de entrega según tu ubicación.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito. Consulta por promociones vigentes.",
  },
  {
    question: "¿Trabajan con mi obra social?",
    answer:
      "Trabajamos con las principales obras sociales y prepagas de la zona. Si tu obra social no aparece en la lista, consultanos por WhatsApp para verificar tu cobertura.",
  },
  {
    question: "¿Atienden fines de semana?",
    answer:
      "Sí, atendemos sábados de 9:00 a 18:00 hs y domingos de 10:00 a 14:00 hs. Además contamos con guardia farmacéutica según el cronograma oficial.",
  },
  {
    question: "¿Hacen control de presión y glucemia?",
    answer:
      "Sí, ofrecemos mediciones gratuitas de presión arterial y glucemia. No es necesario pedir turno, podes pasar cuando lo necesites durante nuestro horario de atención.",
  },
]

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground">Resolvemos tus dudas</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold hover:text-primary">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
