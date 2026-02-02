"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bath,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Coffee,
  FlameKindling,
  TreeDeciduous,
  Waves,
  Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const domos = [
  {
    name: "Domo Atardecer",
    description:
      "Vista panorámica al oeste para disfrutar los mejores atardeceres desde tu cama.",
    image: "/images/d-exterior-2.webp",
    amenities: [
      "Cama Queen",
      "Baño privado",
      "Climatización",
      "Deck privado",
      "Vista piscina",
      "Desayuno incluido",
      "Asador privado",
    ],
    price: "$45.000",
  },
  {
    name: "Domo Amanecer",
    description:
      "Orientado al este, perfecto para despertar con los primeros rayos de sol entre los árboles.",
    image: "/images/d-exterior-4.webp",
    amenities: [
      "Cama Queen",
      "Baño privado",
      "Climatización",
      "Deck privado",
      "Acceso piscina",
      "Desayuno incluido",
      "Asador privado",
    ],
    price: "$48.000",
  },
];

const amenityIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "Cama Queen": BedDouble,
  "Baño privado": Bath,
  Climatización: Wind,
  "Deck privado": TreeDeciduous,
  "Vista piscina": Waves,
  "Acceso piscina": Waves,
  "Desayuno incluido": Coffee,
  "Asador privado": FlameKindling,
};

export function Domos() {
  const [currentDomo, setCurrentDomo] = useState(0);

  const nextDomo = () => setCurrentDomo((prev) => (prev + 1) % domos.length);
  const prevDomo = () =>
    setCurrentDomo((prev) => (prev - 1 + domos.length) % domos.length);

  return (
    <section id="domos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:w-[90%]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Nuestros Domos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Espacios únicos diseñados para el descanso y la conexión con la
            naturaleza
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden relative">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="relative h-72">
              <Image
                src={domos[currentDomo].image || "/placeholder.svg"}
                alt={domos[currentDomo].name}
                fill
                className="object-cover"
              />
              {/* Botones sobre la imagen */}
              <button
                onClick={prevDomo}
                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow"
                aria-label="Domo anterior"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextDomo}
                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow"
                aria-label="Siguiente domo"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {domos[currentDomo].name}
                </h3>
                <span className="text-primary font-semibold">
                  {domos[currentDomo].price}/noche
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                {domos[currentDomo].description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {domos[currentDomo].amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || BedDouble;
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="https://wa.me/5493435000000" target="_blank">
                  Consultar disponibilidad
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Indicadores del slider */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {domos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDomo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentDomo ? "w-6 bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Ir a domo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {domos.map((domo) => (
            <Card
              key={domo.name}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80">
                <Image
                  src={domo.image || "/placeholder.svg"}
                  alt={domo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="px-8 py-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {domo.name}
                  </h3>
                  <span className="text-primary font-semibold text-lg">
                    {domo.price}/noche
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{domo.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {domo.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || BedDouble;
                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full flex justify-end">
                  <Button
                    asChild
                    className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href="https://wa.me/5493435000000" target="_blank">
                      Consultar disponibilidad
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
