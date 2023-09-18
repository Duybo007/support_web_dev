import About from '@/components/about'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import NavBar from '@/components/navBar'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main >
      <div className='relative'>
        <NavBar />
        <Hero />
      </div>
      <About/>
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
}
