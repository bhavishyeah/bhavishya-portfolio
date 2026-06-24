import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

// Large hollow-stroke background word that sits behind a section header.
// Animates in (translate-y + fade) when it enters the viewport.
export default function SectionBg({ word, align = 'left' }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <motion.span
      ref={ref}
      className={`section-bg section-bg-${align}`}
      aria-hidden="true"
      initial={{ opacity: 0, y: 64 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.05, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {word}
    </motion.span>
  )
}
