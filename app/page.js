import Image from 'next/image'
import { AboutUs, HeroSection, Navbar, Projects } from '@/components'

export default function Home() {
  return (
    
       <>
       <Navbar />
       <HeroSection />
       <AboutUs />
       <Projects />
       </>
  )
}
