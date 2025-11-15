import PlanetCard from './PlanetCard'

const planets = [
  {
    name: 'Matahari',
    image: 'https://images.unsplash.com/photo-1599666805921-c468c04cbfc4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRhaGFyaXxlbnwwfDB8fHwxNzYzMjIzNTU3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Bintang pusat tata surya, sumber cahaya dan energi bagi planet-planet.'
  },
  { name: 'Merkurius', image: 'https://images.unsplash.com/photo-1599666805921-c468c04cbfc4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRhaGFyaXxlbnwwfDB8fHwxNzYzMjIzNTU3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Planet terkecil dan terdekat dengan Matahari.' },
  { name: 'Venus', image: 'https://images.unsplash.com/photo-1599666805921-c468c04cbfc4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRhaGFyaXxlbnwwfDB8fHwxNzYzMjIzNTU3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Saudara kembar Bumi dengan atmosfer tebal dan panas.' },
  { name: 'Bumi', image: 'https://images.unsplash.com/photo-1652964329408-9ba8af3c95ec?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMyMjM1NTh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Rumah kita dengan beragam kehidupan dan satu-satunya yang diketahui ramah hayati.' },
  { name: 'Mars', image: 'https://images.unsplash.com/photo-1568581357528-69b82742efa1?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMyMjM1NTh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Si Planet Merah, kandidat eksplorasi manusia di masa depan.' },
  { name: 'Jupiter', image: 'https://images.unsplash.com/photo-1568574277309-d572077f75c5?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMyMjM1NTl8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Planet terbesar dengan badai raksasa Great Red Spot.' },
  { name: 'Saturnus', image: 'https://images.unsplash.com/photo-1633992056449-7704ad515e71?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMyMjM1NjB8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Dikenal dengan cincin spektakulernya yang mempesona.' },
  { name: 'Uranus', image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZW51c3xlbnwwfDB8fHwxNzYzMjIzNTYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Raksasa es dengan rotasi miring yang unik.' },
  { name: 'Neptunus', image: 'https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCdW1pfGVufDB8MHx8fDE3NjMyMjM1Njd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', description: 'Raksasa es biru dengan angin tercepat di tata surya.' },
]

export default function Planets() {
  return (
    <section id="planets" className="relative py-24 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),rgba(2,6,23,1)_60%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Planet & Fitur</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Kenali planet-planet dan objek utama dalam tata surya.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planets.slice(0, 9).map((p) => (
            <PlanetCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
