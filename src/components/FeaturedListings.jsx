import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Home } from 'lucide-react'

const listings = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: 'San Francisco, CA',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Cozy Suburban House',
    location: 'Austin, TX',
    price: '$720,000',
    beds: 3,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Luxury Villa Retreat',
    location: 'Miami, FL',
    price: '$2,950,000',
    beds: 5,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1627615736389-00f64b184b26?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXh1cnklMjBWaWxsYSUyMFJldHJlYXR8ZW58MHwwfHx8MTc2MzczMTMzN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

function Card({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden border border-blue-500/10 bg-slate-900/50 backdrop-blur ring-1 ring-inset ring-white/5 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)]"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"/>
        <div className="absolute left-4 bottom-4">
          <span className="inline-flex items-center rounded-full bg-slate-900/70 backdrop-blur px-3 py-1 text-xs text-blue-200/90 border border-blue-500/20">
            <MapPin size={14} className="mr-1"/> {item.location}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{item.title}</h3>
          <span className="text-cyan-400 font-medium">{item.price}</span>
        </div>
        <div className="mt-3 flex items-center gap-4 text-blue-300/80 text-sm">
          <span className="inline-flex items-center gap-1"><BedDouble size={16}/> {item.beds} Beds</span>
          <span className="inline-flex items-center gap-1"><Bath size={16}/> {item.baths} Baths</span>
          <span className="inline-flex items-center gap-1"><Home size={16}/> House</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-xl border border-blue-500/20 px-3 py-2 text-blue-200/90 hover:bg-blue-500/10 transition">Quick View</button>
          <button className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-2 hover:opacity-90 transition">Details</button>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedListings() {
  return (
    <section id="listings" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Listings</h2>
            <p className="mt-2 text-blue-300/80">Handpicked homes with premium features and trusted sellers.</p>
          </div>
          <button className="hidden sm:inline-flex rounded-xl border border-blue-500/20 px-4 py-2 text-blue-200/90 hover:bg-blue-500/10 transition">View All</button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l)=> (
            <Card key={l.id} item={l} />
          ))}
        </div>
      </div>
    </section>
  )
}
