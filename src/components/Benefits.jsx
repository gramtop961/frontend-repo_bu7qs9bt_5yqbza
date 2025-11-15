import { Rocket, Sparkles, BookOpen, Monitor } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Pembelajaran Interaktif', desc: 'Eksplorasi melalui interaksi langsung dan visual yang menarik.' },
  { icon: Monitor, title: 'Visualisasi 3D/2D', desc: 'Menggabungkan dunia 2D & 3D untuk pengalaman imersif.' },
  { icon: BookOpen, title: 'Pengetahuan Lengkap', desc: 'Materi terkurasi dari sumber tepercaya, mudah dipahami.' },
  { icon: Sparkles, title: 'Cocok untuk Pelajar', desc: 'Desain ramah pelajar dengan bahasa sederhana.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kenapa Mempelajari Tata Surya?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Beberapa alasan mengapa mempelajari tata surya itu seru dan bermanfaat.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-white shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-purple-500/0 to-blue-500/0 blur-xl opacity-0 group-hover:opacity-100 pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.45)]">
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
