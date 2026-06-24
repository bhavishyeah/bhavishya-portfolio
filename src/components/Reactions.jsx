import { useEffect, useRef, useState, useCallback } from 'react'

// Cloudflare Worker host for the reactions Durable Object.
const HOST = import.meta.env.VITE_REACTIONS_HOST || null
const STORAGE_KEY = 'portfolio_starred'

/* ─── Confetti particle component ─── */
function Confetti({ active }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#fbbf24', '#f59e0b', '#ffffff', '#a78bfa']
    const particles = Array.from({ length: 36 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.7) * 9,
      size: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 14,
      life: 1,
      decay: Math.random() * 0.018 + 0.012,
      shape: Math.random() > 0.4 ? 'circle' : 'rect',
    }))

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      particles.forEach((p) => {
        if (p.life <= 0) return
        alive = true
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.2
        p.vx *= 0.98
        p.rotation += p.rotSpeed
        p.life -= p.decay
        ctx.save()
        ctx.globalAlpha = p.life
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color
        if (p.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        }
        ctx.restore()
      })
      if (alive) {
        animRef.current = requestAnimationFrame(animate)
      }
    }
    animate()
    return () => cancelAnimationFrame(animRef.current)
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      className="rx-confetti"
      aria-hidden="true"
    />
  )
}

/* ─── Star SVG icon ─── */
function StarIcon({ filled }) {
  return (
    <svg
      className={`rx-star-icon ${filled ? 'filled' : ''}`}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="starGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={filled ? 'url(#starGradBlue)' : 'none'}
        stroke={filled ? '#3b82f6' : 'currentColor'}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ─── Eye SVG icon ─── */
function EyeIcon() {
  return (
    <svg
      className="rx-eye-icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default function Reactions() {
  const [stars, setStars] = useState(0)
  const [online, setOnline] = useState(0)
  const [live, setLive] = useState(false)
  const [pop, setPop] = useState(false)
  const [confetti, setConfetti] = useState(0)
  const [starred, setStarred] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) === '1' } catch { return false }
  })
  const socketRef = useRef(null)
  const reconnectRef = useRef(null)

  useEffect(() => {
    if (!HOST) return undefined

    let closed = false

    function connect() {
      const protocol = HOST.startsWith('localhost') ? 'ws' : 'wss'
      const socket = new WebSocket(`${protocol}://${HOST}`)
      socketRef.current = socket

      socket.addEventListener('open', () => setLive(true))
      socket.addEventListener('close', () => {
        setLive(false)
        if (!closed) {
          reconnectRef.current = setTimeout(connect, 3000)
        }
      })
      socket.addEventListener('message', (event) => {
        try {
          const data = JSON.parse(event.data)
          if (data.type === 'state') {
            const total = Object.values(data.counts || {}).reduce((a, b) => a + b, 0)
            setStars(total)
            if (typeof data.online === 'number') setOnline(data.online)
          } else if (data.type === 'online') {
            setOnline(data.online)
          }
        } catch {
          /* ignore malformed frames */
        }
      })
    }

    connect()

    return () => {
      closed = true
      clearTimeout(reconnectRef.current)
      socketRef.current?.close()
    }
  }, [])

  const handleStar = useCallback(() => {
    // One vote per device — if already starred, do nothing
    if (starred) return

    setStars((s) => s + 1)
    setStarred(true)
    setPop(true)
    setConfetti((c) => c + 1)
    setTimeout(() => setPop(false), 450)

    // Persist vote to localStorage
    try { localStorage.setItem(STORAGE_KEY, '1') } catch { /* noop */ }

    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: 'react', key: 'thumb' }))
    }
  }, [starred])

  return (
    <div className="reactions" role="group" aria-label="Star and live viewers">
      {/* Star button */}
      <button
        type="button"
        className={`rx-star-btn ${pop ? 'pop' : ''} ${starred ? 'starred' : ''}`}
        onClick={handleStar}
        aria-label={starred ? `You starred this portfolio, ${stars} stars` : `Star this portfolio, ${stars} stars`}
        disabled={starred}
      >
        <span className="rx-star-wrap">
          <StarIcon filled={starred} />
          <Confetti active={confetti} key={confetti} />
        </span>
        <span className="rx-star-label">{starred ? 'Starred' : 'Star'}</span>
        <span className="rx-star-count">{stars}</span>
      </button>

      {/* Separator */}
      <span className="rx-sep" aria-hidden="true" />

      {/* Live viewers */}
      <span className={`rx-viewers ${live ? 'on' : ''}`} aria-label={`${online} live viewers`}>
        <EyeIcon />
        <span className="rx-viewer-count">{live ? online : '–'}</span>
      </span>
    </div>
  )
}
