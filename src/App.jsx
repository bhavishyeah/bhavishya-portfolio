import { useEffect, useState } from 'react'
import './styles.css'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Stack from './components/Stack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const tickerItems = [
  'Available for Work',
  'React.js',
  'Full-Stack',
  'Node.js',
  'AI Integrations',
  'Dehradun, India',
]

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="app">
      <Loader show={loading} />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee items={tickerItems} />
        <Projects />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
