import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const activities = [
  {
    title: "Piscina",
    description: "Refrescate en nuestra piscina privada",
    image: "/images/pileta-1.webp",
  },
  {
    title: "Descanso",
    description: "Hamacas paraguayas para perderte",
    image: "/images/hamaca.webp",
  },
  {
    title: "Espacios al aire libre",
    description: "Pérgolas y rincones para compartir",
    image: "/images/parque-2.webp",
  },
  {
    title: "Atardeceres",
    description: "Los mejores cielos de Entre Ríos",
    image: "/images/atardecer.webp",
  },
]

export function Activities() {
  return (
    <section id="actividades" className="py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Viví la experiencia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada momento en Domos del Monte es una oportunidad para desconectar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <Card key={activity.title} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
