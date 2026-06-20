import { useEffect, useRef, useState } from 'react'
import { useIsDesktop } from '../hooks/usePrefersReducedMotion'

export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const [mode, setMode] = useState('') // '' | 'link' | 'view'
  const desktop = useIsDesktop()

  useEffect(() => {
    if (!desktop) return
    let mx = innerWidth / 2, my = innerHeight / 2
    let rx = mx, ry = my

    function onMove(e) {
      mx = e.clientX; my = e.clientY
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }
    function tick() {
      rx += (mx - rx) * 0.2
      ry += (my - ry) * 0.2
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    let raf = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove)

    // Attach hover behaviours
    const viewEls = document.querySelectorAll('.project-card')
    const linkEls = document.querySelectorAll('a, button, .magnetic, .award-node, .bento .cell, .skill-quad, .tl-card')
    const onView = () => setMode('view')
    const onLink = () => setMode('link')
    const onLeave = () => setMode('')
    viewEls.forEach((el) => { el.addEventListener('mouseenter', onView); el.addEventListener('mouseleave', onLeave) })
    linkEls.forEach((el) => { el.addEventListener('mouseenter', onLink); el.addEventListener('mouseleave', onLeave) })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      viewEls.forEach((el) => { el.removeEventListener('mouseenter', onView); el.removeEventListener('mouseleave', onLeave) })
      linkEls.forEach((el) => { el.removeEventListener('mouseenter', onLink); el.removeEventListener('mouseleave', onLeave) })
    }
  }, [desktop])

  if (!desktop) return null

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${mode === 'link' ? 'link' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${mode}`}>
        {mode === 'view' ? 'VIEW \u2192' : ''}
      </div>
    </>
  )
}
