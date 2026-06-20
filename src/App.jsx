import { useEffect, useState } from 'react'
import './styles.css'
import { marqueeItems } from './data'
import SmoothScroll from './components/SmoothScroll'
import Grain from './components/Grain'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Awards from './components/Awards'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="app">
      <Loader show={loading} />
      <Grain />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <Projects />
        <Experience />
        <Marquee items={[...marqueeItems].reverse()} />
        <Skills />
        <Awards />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
