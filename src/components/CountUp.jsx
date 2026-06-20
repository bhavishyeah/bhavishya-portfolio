import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

// easeOutExpo for a satisfying landing
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export default function CountUp({ value, suffix = '', decimals = 0, duration = 1600, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = usePrefersReducedMotion()
  const [n, setN] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    if (reduced) {
      const id = requestAnimationFrame(() => setN(value))
      return () => cancelAnimationFrame(id)
    }
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setN(value * easeOutExpo(p))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reduced])

  const formatted = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString()

  return <span ref={ref} className={className}>{formatted}{suffix}</span>
}
