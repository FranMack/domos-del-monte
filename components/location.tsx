import { Car, Clock, MapPin } from "lucide-react";

const distances = [
  { label: "Centro de Villaguay", distance: "5 km", time: "8 min" },
  { label: "Ruta 18", distance: "2 km", time: "3 min" },
  { label: "Paraná", distance: "180 km", time: "2h 15min" },
  { label: "Buenos Aires", distance: "350 km", time: "4h" },
];

export function Location() {
  return (
    <section id="ubicacion" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:w-[90%]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Ubicación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Villaguay, corazón de Entre Ríos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Domos del Monte
                </h3>
                <p className="text-muted-foreground">
                  Villaguay, Entre Ríos, Argentina
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Fácil acceso, entorno natural, lejos del ruido
                </p>
              </div>
            </div>

            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              Distancias
            </h4>
            <div className="space-y-3">
              {distances.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-foreground font-medium">
                      {item.distance}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=-31.807023335109683,-59.04083555397646&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Domos del Monte"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
