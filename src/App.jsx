import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Planets from './components/Planets'
import Info from './components/Info'
import Benefits from './components/Benefits'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Planets />
        <Info />
        <Benefits />
      </main>
      <Footer />
    </div>
  )
}

export default App
