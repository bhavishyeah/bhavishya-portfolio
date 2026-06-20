import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? h.scrollTop / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const r = 20
  const c = 2 * Math.PI * r
  const pct = Math.round(progress * 100)

  return (
    <div className="scroll-ring" aria-hidden="true">
      <svg width="46" height="46" viewBox="0 0 46 46">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle className="track" cx="23" cy="23" r={r} fill="none" strokeWidth="2.5" />
        <circle
          className="prog"
          cx="23" cy="23" r={r} fill="none" strokeWidth="2.5"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
        />
      </svg>
      <span className="pct">{pct}</span>
    </div>
  )
}
