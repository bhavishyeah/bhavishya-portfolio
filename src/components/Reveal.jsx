import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Reveal({ children, delay = 0, y = 34, className = '', as = 'div', style }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const Comp = motion[as] || motion.div
  return (
    <Comp
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}
