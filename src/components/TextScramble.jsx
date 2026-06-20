import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________'

// Cyberpunk decode/scramble effect. Runs on enter-view and on hover.
export default function TextScramble({ text, className = '', as: Tag = 'span', duration = 28 }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const reduced = usePrefersReducedMotion()
  const [display, setDisplay] = useState(reduced ? text : '')
  const raf = useRef(null)

  function scramble() {
    if (reduced) { setDisplay(text); return }
    cancelAnimationFrame(raf.current)
    const queue = []
    const len = text.length
    for (let i = 0; i < len; i++) {
      const start = Math.floor(Math.random() * duration)
      const end = start + Math.floor(Math.random() * duration)
      queue.push({ char: text[i], start, end })
    }
    let f = 0
    const run = () => {
      let out = ''
      let done = 0
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i]
        if (f >= q.end) { out += q.char; done++ }
        else if (f >= q.start) {
          if (!q.r || Math.random() < 0.28) q.r = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          out += q.r
        } else out += q.char === ' ' ? ' ' : ''
      }
      setDisplay(out)
      if (done === queue.length) return
      f++
      raf.current = requestAnimationFrame(run)
    }
    run()
  }

  useEffect(() => {
    if (!inView) return
    const id = requestAnimationFrame(scramble)
    return () => { cancelAnimationFrame(id); cancelAnimationFrame(raf.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <Tag ref={ref} className={className} onMouseEnter={scramble}>
      {display || (reduced ? text : '\u00A0')}
    </Tag>
  )
}
