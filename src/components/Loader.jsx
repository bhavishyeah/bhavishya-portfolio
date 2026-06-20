import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ show }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    if (!show) return
    let raf
    const start = performance.now()
    const dur = 900
    const loop = (t) => {
      const p = Math.min(100, Math.round(((t - start) / dur) * 100))
      setPct(p)
      if (p < 100) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <div className="loader-word">BHAVISHYA<b>.DEV</b></div>
          <div className="loader-bar">
            <motion.span initial={{ width: '0%' }} animate={{ width: `${pct}%` }} transition={{ ease: 'linear' }} />
          </div>
          <span className="loader-pct">{pct}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
