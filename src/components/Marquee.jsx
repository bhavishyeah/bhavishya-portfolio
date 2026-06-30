import { useEffect, useRef, useState, useCallback } from 'react'
import { marqueeLogos } from '../data'

// Each item shows the brand logo (white for dark bg) next to its name.
function LogoChip({ name, slug }) {
  const [err, setErr] = useState(false)
  return (
    <span className="logo-item">
      {!err && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt=""
          aria-hidden="true"
          onError={() => setErr(true)}
        />
      )}
      <span className="logo-name">{name}</span>
    </span>
  )
}

// Infinite marquee with JS-driven animation + drag interaction.
export default function Marquee() {
  const loop = [...marqueeLogos, ...marqueeLogos, ...marqueeLogos]
  const bannerRef = useRef(null)
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const animRef = useRef(null)
  const speedRef = useRef(-0.5) // pixels per frame (negative = scroll left)

  // Drag state
  const dragging = useRef(false)
  const startX = useRef(0)
  const dragStartOffset = useRef(0)
  const velocity = useRef(0)
  const lastX = useRef(0)
  const lastTime = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  // Animation loop
  const animate = useCallback(() => {
    if (!trackRef.current) return

    if (!dragging.current) {
      offsetRef.current += speedRef.current
    }

    // Reset offset when one-third of the track has scrolled past (infinite loop)
    const trackWidth = trackRef.current.scrollWidth / 3
    if (Math.abs(offsetRef.current) >= trackWidth) {
      offsetRef.current += trackWidth * Math.sign(-offsetRef.current)
    }

    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`
    animRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [animate])

  const handlePointerDown = (e) => {
    dragging.current = true
    setIsDragging(true)
    startX.current = e.clientX
    dragStartOffset.current = offsetRef.current
    velocity.current = 0
    lastX.current = e.clientX
    lastTime.current = Date.now()
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!dragging.current) return
    const dx = e.clientX - startX.current
    const now = Date.now()
    const dt = now - lastTime.current
    if (dt > 0) {
      velocity.current = (e.clientX - lastX.current) / dt
    }
    lastX.current = e.clientX
    lastTime.current = now
    offsetRef.current = dragStartOffset.current + dx
  }

  const handlePointerUp = (e) => {
    if (!dragging.current) return
    dragging.current = false
    setIsDragging(false)
    e.currentTarget.releasePointerCapture(e.pointerId)

    // Apply momentum — gradually decay into auto-scroll speed
    let v = velocity.current * 8
    const decel = () => {
      if (Math.abs(v) < Math.abs(speedRef.current)) return
      v *= 0.92
      offsetRef.current += v
      requestAnimationFrame(decel)
    }
    decel()
  }

  return (
    <div
      ref={bannerRef}
      className={`logo-banner grain ${isDragging ? 'is-dragging' : ''}`}
      aria-label="Technologies I work with"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={trackRef} className="logo-track">
        {loop.map((logo, i) => (
          <LogoChip name={logo.name} slug={logo.slug} key={`${logo.slug}-${i}`} />
        ))}
      </div>
    </div>
  )
}
