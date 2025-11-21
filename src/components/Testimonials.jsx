import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'The platform made buying our first home effortless. Truly a premium experience.',
    name: 'Avery M.',
    role: 'Buyer'
  },
  {
    quote: 'Listings are accurate and agents are responsive. We sold in under a week!',
    name: 'Jordan R.',
    role: 'Seller'
  },
  {
    quote: 'Clean design, powerful tools, and trustworthy listings. Highly recommend.',
    name: 'Priya K.',
    role: 'Buyer'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Clients Say</h2>
          <p className="mt-3 text-blue-300/80">Real feedback from recent buyers and sellers.</p>
        </div>

        <div className="mt-10 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[320px] max-w-sm flex-1 rounded-2xl border border-blue-500/20 bg-slate-900/40 p-6">
                <p className="text-blue-100/90">“{t.quote}”</p>
                <div className="mt-4 text-sm text-blue-300/80">{t.name} • {t.role}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
