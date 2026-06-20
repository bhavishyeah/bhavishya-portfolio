import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const [ref, inView] = useInView()
  const Comp = motion[as] || motion.div

  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}
