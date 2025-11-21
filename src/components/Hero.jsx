import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0A1A2F] to-[#020617]" />

      {/* Spline 3D asset */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay to increase contrast */}
      <div className="absolute inset-0 bg-slate-950/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Find your next home with confidence
          </motion.h1>
          <p className="mt-4 text-blue-200/80 max-w-xl">
            Explore verified listings, trusted agents, and a seamless buying & selling experience — all in one modern marketplace.
          </p>

          {/* Search bar */}
          <div className="mt-8 grid gap-3 sm:grid-cols-5 bg-slate-900/60 border border-blue-500/20 rounded-2xl p-3 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
            <input placeholder="City or Neighborhood" className="sm:col-span-2 h-12 rounded-xl bg-slate-900/70 text-blue-100 placeholder-blue-300/50 px-4 border border-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
            <input placeholder="Min Price" className="h-12 rounded-xl bg-slate-900/70 text-blue-100 placeholder-blue-300/50 px-4 border border-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
            <input placeholder="Max Price" className="h-12 rounded-xl bg-slate-900/70 text-blue-100 placeholder-blue-300/50 px-4 border border-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
            <button className="h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-800/40 transition">Search</button>
          </div>
        </div>
      </div>

      {/* subtle gradient accent at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
