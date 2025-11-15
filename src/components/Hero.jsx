import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for galaxy vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute -inset-x-20 -top-32 h-72 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),rgba(30,27,75,0)_70%)] blur-2xl" />
        <div className="absolute -inset-x-20 top-1/2 h-72 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),rgba(2,6,23,0)_70%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center text-white">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/20 backdrop-blur">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Planetarium Digital
        </p>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
          Jelajahi Tata Surya
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Temukan keajaiban planet dan fenomena alam semesta.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#planets" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold shadow-[0_0_25px_rgba(59,130,246,0.45)] transition">
            Mulai Eksplorasi
          </a>
        </div>
      </div>
    </section>
  )
}
