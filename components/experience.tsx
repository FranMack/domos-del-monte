import Image from "next/image"
import { Trees, Heart, BedDouble, Flame } from "lucide-react"

const features = [
  {
    icon: Trees,
    title: "Naturaleza privada",
    description: "Espacios verdes exclusivos"
  },
  {
    icon: Heart,
    title: "Solo adultos",
    description: "Tranquilidad garantizada"
  },
  {
    icon: BedDouble,
    title: "Domo equipado",
    description: "Todo el confort que necesitás"
  },
  {
    icon: Flame,
    title: "Pensado para dos",
    description: "Momentos únicos en pareja"
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:w-[90%]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/illustration.webp"
              alt="Ilustración artística de domos en el bosque"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Una experiencia única
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Domos del Monte es un refugio pensado para parejas que buscan desconectar, rodeados de verde, silencio y confort real. Cada detalle fue diseñado para que vivas momentos inolvidables.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
