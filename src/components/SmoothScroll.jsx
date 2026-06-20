import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

// Lenis smooth scroll with infinite-inertia feel.
// Exposes the instance on window.__lenis so GSAP/ScrollTrigger can sync.
export default function SmoothScroll() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.1,
    })
    window.__lenis = lenis

    let raf
    function loop(time) {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Anchor links -> smooth scroll via Lenis
    function onClick(e) {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) {
        const el = document.querySelector(id)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el, { offset: 0 })
        }
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
      window.__lenis = null
    }
  }, [reduced])

  return null
}
