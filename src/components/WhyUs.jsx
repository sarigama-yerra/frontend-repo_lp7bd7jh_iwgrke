import React from 'react'
import { ShieldCheck, CheckCircle2, Users2, Zap } from 'lucide-react'

const perks = [
  { icon: Zap, title: 'Fast Process', desc: 'Streamlined workflows and instant updates to close deals faster.' },
  { icon: Users2, title: 'Trusted Agents', desc: 'Work with vetted professionals who put your needs first.' },
  { icon: CheckCircle2, title: 'Verified Listings', desc: 'Every property is verified for accuracy and authenticity.' },
  { icon: ShieldCheck, title: 'Secure Transactions', desc: 'Bank-level security across all payments and documents.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Us</h2>
          <p className="mt-3 text-blue-300/80">Premium experience, modern tools, and a team you can trust.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-blue-500/20 bg-slate-900/50 p-6 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.25)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                <p.icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-blue-300/80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
