import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500"/>
              <span className="text-white font-semibold">BlueEstate</span>
            </div>
            <p className="mt-3 text-sm text-blue-300/70">A premium marketplace for buying and selling residential homes with confidence.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-blue-300/80 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Support</h4>
            <ul className="mt-3 space-y-2 text-blue-300/80 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Safety & Security</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Follow</h4>
            <div className="mt-3 flex gap-3 text-blue-300/80">
              <a href="#" className="hover:text-white"><Facebook size={18}/></a>
              <a href="#" className="hover:text-white"><Twitter size={18}/></a>
              <a href="#" className="hover:text-white"><Instagram size={18}/></a>
              <a href="#" className="hover:text-white"><Linkedin size={18}/></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-500/20 pt-6 text-center text-xs text-blue-300/60">
          © {new Date().getFullYear()} BlueEstate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
