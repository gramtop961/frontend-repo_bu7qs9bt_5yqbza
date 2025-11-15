export default function Info() {
  return (
    <section id="info" className="relative py-24 overflow-hidden bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(168,85,247,0.35), transparent 30%), radial-gradient(circle at 80% 40%, rgba(59,130,246,0.35), transparent 35%), radial-gradient(circle at 30% 80%, rgba(59,130,246,0.25), transparent 30%)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Galaksi dan Alam Semesta</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Galaksi adalah kumpulan besar bintang, gas, debu, dan materi gelap yang terikat oleh gravitasi. Tata surya kita berada di Galaksi Bima Sakti. Di dalamnya terdapat miliaran bintang dan mungkin jutaan sistem planet.
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">
              Dengan teknologi modern, kita dapat mempelajari fenomena seperti nebula, lubang hitam, supernova, hingga eksoplanet. Eksplorasi ini membuka wawasan tentang asal-usul alam semesta dan potensi kehidupan di luar Bumi.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-purple-600/30 to-blue-600/30 blur-2xl" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYWxheHl8ZW58MHwwfHx8MTc2MzIyMzU2N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Galaxy" className="w-full h-full object-cover scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
