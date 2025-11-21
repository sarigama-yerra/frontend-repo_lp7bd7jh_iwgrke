import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedListings from './components/FeaturedListings'
import MapFilter from './components/MapFilter'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <FeaturedListings />
        <MapFilter />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
