'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import AboutSection from '@/components/AboutSection'

// Lazy load below-fold components for better performance
const VisionariesSection = dynamic(() => import('@/components/VisionariesSection'), {
  loading: () => <div className="min-h-screen" />,
})
const SinglesSection = dynamic(() => import('@/components/SinglesSection'), {
  loading: () => <div className="min-h-screen" />,
})
const ListenSection = dynamic(() => import('@/components/ListenSection'), {
  loading: () => <div className="min-h-screen" />,
})
const DonateSection = dynamic(() => import('@/components/DonateSection'), {
  loading: () => <div className="min-h-screen" />,
})
const ImpactSection = dynamic(() => import('@/components/ImpactSection'), {
  loading: () => <div className="min-h-screen" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[400px]" />,
})

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
