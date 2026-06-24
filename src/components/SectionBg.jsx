import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

// Large hollow-stroke background word that sits behind a section header.
// Renders in developer-style format: //01_projects
// Animates in (translate-y + fade) when it enters the viewport.
export default function SectionBg({ word, num, align = 'left' }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const formatted = `//${String(num).padStart(2, '0')}_${word.toUpperCase().replace(/\s+/g, '_')}`
  return (
    <motion.span
      ref={ref}
      className={`section-bg section-bg-${align}`}
      aria-hidden="true"
      initial={{ opacity: 0, y: 64 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.05, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {formatted}
    </motion.span>
  )
}
