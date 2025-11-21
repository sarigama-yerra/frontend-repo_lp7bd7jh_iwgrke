import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function MapFilter() {
  // Placeholder interactive map area with gradient and subtle grid
  return (
    <section id="locations" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.15),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Search by Location</h2>
            <p className="mt-2 text-blue-300/80">Use the location filter to discover homes in your preferred area.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-xl border border-blue-500/20 bg-slate-800/40 px-3 py-2 text-blue-200/80">
            <MapPin size={16} />
            <span>United States</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_30px_80px_-20px_rgba(37,99,235,0.25)]"
        >
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
            {/* This could be replaced with a real map later */}
            <div className="relative h-full w-full bg-[conic-gradient(at_20%_20%,#0b1220,40%,#0a1a2f,60%,#0b1220)]">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0_23px,#0f172a_24px),linear-gradient(90deg,transparent_0_23px,#0f172a_24px)] bg-[size:24px_24px] opacity-40"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]">Interactive Map Coming Soon</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
