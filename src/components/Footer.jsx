import { Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
              <span className="font-semibold text-white">GalaxyLab</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/70">Platform edukasi futuristik untuk memahami tata surya dan fenomena kosmik dengan cara yang menyenangkan.</p>
            <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} GalaxyLab. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
          <nav className="text-sm grid grid-cols-2 gap-x-12 gap-y-2">
            <a href="#hero" className="text-white/70 hover:text-white transition">Beranda</a>
            <a href="#planets" className="text-white/70 hover:text-white transition">Planet</a>
            <a href="#info" className="text-white/70 hover:text-white transition">Info</a>
            <a href="#benefits" className="text-white/70 hover:text-white transition">Keunggulan</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
