import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#domos", label: "Domos" },
  { href: "#actividades", label: "Actividades" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white/90 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.webp"
                alt="Domos del Monte Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-serif text-xl font-semibold text-white">
                Domos del Monte
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Glamping boutique en plena naturaleza. Una experiencia íntima para dos, solo adultos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ubicación</h4>
            <div className="flex items-start gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Villaguay, Entre Ríos</p>
                <p>Argentina</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <Link 
                href="https://wa.me/5493435000000" 
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Link>
              <Link 
                href="https://instagram.com/domosdelmonte" 
                target="_blank"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @domosdelmonte
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Domos del Monte — Villaguay, Entre Ríos
          </p>
        </div>
      </div>
    </footer>
  )
}
