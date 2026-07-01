import { useEffect, useState } from 'react'
import './styles.css'
import SmoothScroll from './components/SmoothScroll'
import Cursor from './components/Cursor'
import ClickSparkle from './components/ClickSparkle'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Reactions from './components/Reactions'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Awards from './components/Awards'
import About from './components/About'
import Now from './components/Now'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="app">
      <Loader show={loading} />
      <SmoothScroll />
      <Cursor />
      <ClickSparkle />
      <Nav />
      <Reactions />
      <main>
        <Hero />
        <StatsBar />
        <Marquee />
        <Projects />
        <Experience />
        <Skills />
        <Awards />
        <About />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
