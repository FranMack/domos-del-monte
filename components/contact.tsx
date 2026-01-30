"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Instagram,
  Facebook
} from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/pergola-2.webp')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-balance">
            Reservá tu escapada
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Escribinos por WhatsApp y te ayudamos a planificar tu estadía perfecta
          </p>
          
          {/* Main CTA */}
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white h-14 px-10 text-lg mb-12">
            <Link href="https://wa.me/5493435000000" target="_blank">
              <MessageCircle className="w-6 h-6 mr-3" />
              Chatear por WhatsApp
            </Link>
          </Button>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            <Link 
              href="tel:+5493435000000"
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+54 9 343 500-0000</span>
            </Link>
            
            <Link 
              href="mailto:info@domosdelmonte.com"
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@domosdelmonte.com</span>
            </Link>
            
            <div className="flex items-center gap-3 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>Villaguay, Entre Ríos</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="https://instagram.com/domosdelmonte" 
              target="_blank"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white/60 transition-colors"
              aria-label="Seguinos en Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            
            <Link 
              href="https://facebook.com/domosdelmonte" 
              target="_blank"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white/60 transition-colors"
              aria-label="Seguinos en Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
