import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5493435000000"
      target="_blank"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#25D366]/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  )
}
