'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import AboutSection from '@/components/AboutSection'
import VisionariesSection from '@/components/VisionariesSection'
import SinglesSection from '@/components/SinglesSection'
import ListenSection from '@/components/ListenSection'
import DonateSection from '@/components/DonateSection'
import ImpactSection from '@/components/ImpactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroBanner />
      <AboutSection />
      <VisionariesSection />
      <SinglesSection />
      <ListenSection />
      <DonateSection />
      <ImpactSection />
      <Footer />
    </main>
  )
}
