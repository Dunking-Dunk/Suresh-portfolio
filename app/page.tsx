import About from '@/components/screen/About'
import Intro from '../src/components/dom/Intro'
import Header from '@/components/dom/Header'
import Education from '@/components/screen/Education'
import Experience from '@/components/screen/Experience'
import Hero from '@/components/screen/Hero'
import Achievement from '@/components/screen/Achievements'
import Testimonial from '@/components/screen/Testimonial'
import Contact from '@/components/screen/Contact'
import PlanetCanvas from '@/components/dom/PlanetCanvas'
import Faq from '@/components/screen/Faq'
import Service from '@/components/screen/Service'
import { SparklesCore } from '@/components/global/sparkles'

export default function Page() {
  return (
    <div className='w-full h-full relative'>
      <Intro />
      <Header />
      <Hero />
      <About />
      <div className='relative w-full h-full'>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full absolute z-10"
          particleColor="#FFFFFF"
        />
        <Service />
      </div>
      <Experience />
      <Education />
      <div className='relative w-full h-full'>
        <PlanetCanvas />
        <Achievement />
        <Testimonial />
      </div>
      <Faq />
      <Contact />
    </div>
  )
}
