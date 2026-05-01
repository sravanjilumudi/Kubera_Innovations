import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Products } from '@/components/Products'
import { Training } from '@/components/Training'
import { Features } from '@/components/Features'
import { Process } from '@/components/Process'
import { VisionMission } from '@/components/VisionMission'
import { Industries } from '@/components/Industries'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main>
      {/* 
          Visually hidden H1 for SEO. 
          The Hero component should contain your visible primary heading. 
      */}
      <h1 className="sr-only">Kubera Innovations | Electronics Product Development</h1>

      <Hero />
      <VisionMission />
      <Services />
      <Industries />
      <Products />
      <Process />
      <Features />
      <Training />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}