export default function PlanetCard({ name, description, image }) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] transition-all">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:via-purple-500/0 group-hover:to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="relative p-6 flex flex-col items-center text-center">
        <img src={image} alt={name} className="w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.35)]" />
        <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
