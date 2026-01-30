"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/d-exterior-1.webp",
    alt: "Domo geodésico con estructura de madera y vista panorámica",
  },
  {
    src: "/images/d-exterior-2.webp",
    alt: "Domo junto a la piscina al atardecer",
  },
  {
    src: "/images/d-exterior-3.webp",
    alt: "Piscina con reposeras y árboles",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 max-w-4xl text-balance">
          Glamping boutique en plena naturaleza
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl opacity-90 text-pretty">
          Una experiencia íntima para dos, solo adultos
        </p>
        <p className="text-base md:text-lg mb-8 opacity-80">
          Desde <span className="font-semibold text-xl">$45.000</span> por noche
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
          >
            <Link href="https://wa.me/5493435000000" target="_blank">
              Reservar por WhatsApp
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
          >
            <Link href="#galeria">Ver galería</Link>
          </Button>
        </div>
      </div>

      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
