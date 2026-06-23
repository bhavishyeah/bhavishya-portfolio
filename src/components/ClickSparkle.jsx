import { useEffect } from 'react'

// Symmetrical yellow firework / sparkle burst on any click.
// Particles are spawned at perfectly even angular intervals (radial symmetry),
// plus a quick ring pulse. Pure DOM + CSS transitions, auto-cleaned.
export default function ClickSparkle() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onClick = (e) => {
      if (reduced) return

      const layer = document.createElement('div')
      layer.className = 'spark-layer'
      layer.style.left = `${e.clientX}px`
      layer.style.top = `${e.clientY}px`

      // ring pulse
      const ring = document.createElement('span')
      ring.className = 'spark-ring'
      layer.appendChild(ring)

      const COUNT = 12
      const distance = 46
      for (let i = 0; i < COUNT; i++) {
        const angle = (Math.PI * 2 * i) / COUNT // perfectly symmetrical
        const long = i % 2 === 0 // alternate long/short rays for a star-like burst
        const d = long ? distance : distance * 0.6
        const p = document.createElement('span')
        p.className = `spark${long ? ' long' : ''}`
        p.style.setProperty('--dx', `${Math.cos(angle) * d}px`)
        p.style.setProperty('--dy', `${Math.sin(angle) * d}px`)
        p.style.setProperty('--rot', `${(angle * 180) / Math.PI}deg`)
        layer.appendChild(p)
      }

      document.body.appendChild(layer)
      // trigger animation next frame
      requestAnimationFrame(() => layer.classList.add('go'))
      setTimeout(() => layer.remove(), 750)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
