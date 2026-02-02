"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images/d-exterior-3.webp",
    alt: "Domo geodésico exterior",
    category: "Exterior",
  },
  {
    src: "/images/pileta-2.webp",
    alt: "Domo junto a la piscina",
    category: "Piscina",
  },
  {
    src: "/images/pileta-4.webp",
    alt: "Piscina con reposeras",
    category: "Piscina",
  },
  {
    src: "/images/hamaca.webp",
    alt: "Hamacas paraguayas",
    category: "Exterior",
  },
  {
    src: "/images/pergola-1.webp",
    alt: "Pérgola con muebles de madera",
    category: "Exterior",
  },
  {
    src: "/images/parque-1.webp",
    alt: "Parque con árboles y césped",
    category: "Detalles",
  },
  {
    src: "/images/d-exterior-2.webp",
    alt: "Domo geodésico y naturaleza",
    category: "Exterior",
  },
  {
    src: "/images/d-exterior-3.webp",
    alt: "Domo y parque",
    category: "Exterior",
  },
  {
    src: "/images/parque-2.webp",
    alt: "Parque y árboles",
    category: "Detalles",
  },
  { src: "/images/parque-3.webp", alt: "Parque amplio", category: "Detalles" },
  {
    src: "/images/pergola-2.webp",
    alt: "Pérgola y jardín",
    category: "Exterior",
  },
  { src: "/images/pileta-1.webp", alt: "Pileta y domo", category: "Piscina" },
];

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {},
  );

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );

  // Mostrar 6 o 12 imágenes según el estado
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 6);

  const handleImageLoad = (idx: number) => {
    setLoadedImages((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:w-[90%]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Galería
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubrí cada rincón de Domos del Monte
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large Image */}
          <div
            className="md:col-span-2 md:row-span-2 relative h-64 md:h-auto rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            {!loadedImages[0] && (
              <Skeleton className="absolute inset-0 w-full h-full z-10" />
            )}
            <Image
              src={imagesToShow[0].src || "/placeholder.svg"}
              alt={imagesToShow[0].alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onLoad={() => handleImageLoad(0)}
              style={!loadedImages[0] ? { visibility: "hidden" } : {}}
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
          </div>

          {/* Smaller Images */}
          {imagesToShow.slice(1).map((image, index) => (
            <div
              key={image.src}
              className="relative h-64 md:h-48 rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index + 1)}
            >
              {!loadedImages[index + 1] && (
                <Skeleton className="absolute inset-0 w-full h-full z-10" />
              )}
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onLoad={() => handleImageLoad(index + 1)}
                style={!loadedImages[index + 1] ? { visibility: "hidden" } : {}}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* Botón Ver más / Ver menos */}
        {galleryImages.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button onClick={() => setShowAll((v) => !v)} variant="ghost">
              {showAll ? "Ver menos" : "Ver más"}
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-white/70 transition-colors"
            aria-label="Cerrar galería"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-2 text-white hover:text-white/70 transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] mx-4">
            <Image
              src={galleryImages[currentImage].src || "/placeholder.svg"}
              alt={galleryImages[currentImage].alt}
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 text-white hover:text-white/70 transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "w-6 bg-white" : "bg-white/50"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
