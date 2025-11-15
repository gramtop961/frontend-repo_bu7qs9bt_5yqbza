import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]"></div>
          <span className="text-white/90 font-semibold tracking-wide group-hover:text-white transition-colors">GalaxyLab</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#hero" className="text-white/70 hover:text-white transition">Beranda</a>
          <a href="#planets" className="text-white/70 hover:text-white transition">Planet</a>
          <a href="#info" className="text-white/70 hover:text-white transition">Info</a>
          <a href="#benefits" className="text-white/70 hover:text-white transition">Keunggulan</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
