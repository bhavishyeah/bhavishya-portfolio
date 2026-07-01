import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

// Large hollow-stroke background word that sits behind a section header.
// Renders in developer-style format: //01_PROJECTS
// Animates in (translate-y + fade) every time it enters the viewport.
export default function SectionBg({ word, num, align = 'left' }) {
  const ref = useRef(null)
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 })
            setHasAnimated(true)
          } else if (hasAnimated) {
            // Reset when out of view so it re-animates on next scroll
            controls.set({ opacity: 0, y: 64 })
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [controls, hasAnimated])

  const formatted = `//${String(num).padStart(2, '0')}_${word.toUpperCase().replace(/\s+/g, '_')}`
  return (
    <motion.span
      ref={ref}
      className={`section-bg section-bg-${align}`}
      aria-hidden="true"
      initial={{ opacity: 0, y: 64 }}
      animate={controls}
      transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {formatted}
    </motion.span>
  )
}
