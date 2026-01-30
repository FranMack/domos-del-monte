import { Card, CardContent } from "@/components/ui/card"
import { Heart, Moon, Gift, Wine } from "lucide-react"

const experiences = [
  {
    icon: Heart,
    title: "Escapada romántica",
    description: "El plan perfecto para reconectar con tu pareja en un entorno único"
  },
  {
    icon: Moon,
    title: "Noche bajo las estrellas",
    description: "Cielos despejados y silencio total para una experiencia inolvidable"
  },
  {
    icon: Gift,
    title: "Regalos sorpresa",
    description: "Sorprendé a alguien especial con una estadía única"
  },
  {
    icon: Wine,
    title: "Celebraciones íntimas",
    description: "Aniversarios, cumpleaños o simplemente celebrar el amor"
  },
]

export function FeaturedExperiences() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:w-[90%]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Experiencias destacadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Momentos diseñados para crear recuerdos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <Card key={experience.title} className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                  <experience.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {experience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
