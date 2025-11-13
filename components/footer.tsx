import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">FS</span>
              </div>
              <h3 className="font-bold">Farmacia Salud Total</h3>
            </div>
            <p className="text-sm opacity-80">Tu farmacia de confianza desde hace más de 15 años</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#inicio" className="hover:opacity-100 transition-opacity">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition-opacity">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:opacity-100 transition-opacity">
                  Productos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📍 Calle Principal 1234</li>
              <li>📞 +54 9 11 2345 6789</li>
              <li>📧 info@farmaciasaludtotal.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Seguinos</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
                📘 Facebook
              </a>
              <a href="#" className="hover:opacity-100 opacity-80 transition-opacity">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-75">
            <div className="flex items-center gap-1">
              <span>© 2025 Farmacia Salud Total. Hecho con</span>
              <Heart className="w-4 h-4" />
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Términos de servicio
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
