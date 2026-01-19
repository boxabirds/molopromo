import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AlignmentMatrix from '@/components/AlignmentMatrix'
import CaseStudy from '@/components/CaseStudy'
import Philosophy from '@/components/Philosophy'
import TechnicalEdge from '@/components/TechnicalEdge'
import Portfolio from '@/components/Portfolio'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AlignmentMatrix />
      <CaseStudy />
      <Philosophy />
      <TechnicalEdge />
      <Portfolio />
      <CallToAction />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
