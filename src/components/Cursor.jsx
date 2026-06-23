import { useEffect, useRef, useState } from 'react'

// Polished blue custom cursor: a smooth-following outer ring + instant inner dot.
// Adds a "pointer" state over interactive elements. Disabled on touch / coarse pointers.
export default function Cursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  )

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('has-custom-cursor')

    const ring = ringRef.current
    const dot = dotRef.current

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot) dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
      const interactive = e.target.closest('a, button, .skill-pill, .project-card, input, textarea, [role="button"], .pill-link')
      ring?.classList.toggle('pointer', !!interactive)
    }

    const onDown = () => ring?.classList.add('down')
    const onUp = () => ring?.classList.remove('down')
    const onLeave = () => ring?.classList.add('hide')
    const onEnter = () => ring?.classList.remove('hide')

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
