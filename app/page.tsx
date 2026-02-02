import { Navbar } from "@/components/ui/navbar/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Domos } from "@/components/domos"
import { Gallery } from "@/components/gallery"
import { Activities } from "@/components/activities"
import { FeaturedExperiences } from "@/components/featured-experiences"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Domos />
      <Gallery />
      <Activities />
      <FeaturedExperiences />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
