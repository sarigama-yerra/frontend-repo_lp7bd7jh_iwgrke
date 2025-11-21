import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-10 text-center shadow-[0_30px_80px_-20px_rgba(37,99,235,0.35)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to tour your dream home?</h2>
          <p className="mt-3 text-blue-300/80">Connect with a trusted agent to schedule a visit or get more details.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white font-medium">Contact an Agent</button>
            <button className="rounded-xl border border-blue-500/20 px-6 py-3 text-blue-200/90 hover:bg-blue-500/10 transition">Schedule a Visit</button>
          </div>
        </div>
      </div>
    </section>
  )
}
