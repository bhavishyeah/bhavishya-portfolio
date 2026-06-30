import { useEffect, useRef, useState, useCallback } from 'react'

// Cloudflare Worker host for the reactions Durable Object.
const HOST = import.meta.env.VITE_REACTIONS_HOST || null
const STORAGE_KEY = 'portfolio_starred'

// GitHub API for activity status
const GH_CACHE_KEY = 'gh_activity'
const GH_CACHE_TTL = 600000 // 10 minutes
const GH_API_URL = 'https://api.github.com/users/bhavishyeah/events/public'

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

/* ─── GitHub icon ─── */
function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  )
}

/* ─── Activity status helpers ─── */
function getISTHour() {
  const now = new Date()
  // Convert to IST (UTC+5:30)
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000
  const istMs = utcMs + 5.5 * 3600000
  return new Date(istMs).getHours()
}

function getActivityStatus(ghEvent) {
  const hour = getISTHour()

  // 10 PM – 6 AM → sleeping
  if (hour >= 22 || hour < 6) return { emoji: '😴', text: 'Sleeping' }
  // 4 PM – 6 PM → sleeping (nap)
  if (hour >= 16 && hour < 18) return { emoji: '😴', text: 'Sleeping' }
  // 9 AM – 4 PM → studying
  if (hour >= 9 && hour < 16) return { emoji: '📚', text: 'Studying' }
  // 6 AM – 9 AM or 6 PM – 10 PM → GitHub activity
  if (ghEvent) {
    const repoName = ghEvent.repo?.name?.split('/').pop() || 'repo'
    const delta = Math.max(0, Date.now() - new Date(ghEvent.created_at).getTime())
    const minutes = Math.floor(delta / 60000)
    let timeAgo
    if (minutes < 1) timeAgo = 'just now'
    else if (minutes < 60) timeAgo = `${minutes}m ago`
    else if (minutes < 1440) timeAgo = `${Math.floor(minutes / 60)}h ago`
    else timeAgo = `${Math.floor(minutes / 1440)}d ago`
    return { emoji: null, icon: 'github', text: `Pushed to ${repoName} · ${timeAgo}` }
  }
  return { emoji: '💻', text: 'Active on GitHub' }
}

function fetchGitHubEvent() {
  // Check cache
  try {
    const cached = sessionStorage.getItem(GH_CACHE_KEY)
    if (cached) {
      const parsed = JSON.parse(cached)
      if (parsed.timestamp && Date.now() - parsed.timestamp < GH_CACHE_TTL && parsed.data) {
        return Promise.resolve(parsed.data)
      }
    }
  } catch { /* noop */ }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000)

  return fetch(GH_API_URL, { signal: controller.signal })
    .then((res) => {
      clearTimeout(timeoutId)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
    .then((data) => {
      const event = Array.isArray(data)
        ? data.find((e) => e.type === 'PushEvent' || e.type === 'CreateEvent') || null
        : null
      if (event) {
        try {
          sessionStorage.setItem(GH_CACHE_KEY, JSON.stringify({ data: event, timestamp: Date.now() }))
        } catch { /* noop */ }
      }
      return event
    })
    .catch(() => {
      clearTimeout(timeoutId)
      return null
    })
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
  const [flipped, setFlipped] = useState(false)
  const [ghEvent, setGhEvent] = useState(null)
  const [status, setStatus] = useState({ emoji: '💻', text: 'Loading...' })
  const socketRef = useRef(null)
  const reconnectRef = useRef(null)

  // Fetch GitHub event on mount
  useEffect(() => {
    fetchGitHubEvent().then((event) => {
      setGhEvent(event)
      setStatus(getActivityStatus(event))
    })
  }, [])

  // Flip interval — 7 seconds each side
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((f) => {
        if (!f) {
          // About to flip to back — refresh status
          setStatus(getActivityStatus(ghEvent))
        }
        return !f
      })
    }, 7000)
    return () => clearInterval(interval)
  }, [ghEvent])

  // WebSocket for live reactions
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
    if (starred) return
    setStars((s) => s + 1)
    setStarred(true)
    setPop(true)
    setConfetti((c) => c + 1)
    setTimeout(() => setPop(false), 450)
    try { localStorage.setItem(STORAGE_KEY, '1') } catch { /* noop */ }
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: 'react', key: 'thumb' }))
    }
  }, [starred])

  return (
    <div className="reactions-flip-wrapper" aria-label="Star and activity status">
      <div className={`reactions-flipper ${flipped ? 'is-flipped' : ''}`}>
        {/* FRONT — Stars & Viewers */}
        <div className="reactions reactions-front" role="group" aria-label="Star and live viewers">
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
            <span className="rx-star-count">{stars}</span>
          </button>
          <span className="rx-sep" aria-hidden="true" />
          <span className={`rx-viewers ${live ? 'on' : ''}`} aria-label={`${online} live viewers`}>
            <EyeIcon />
            <span className="rx-viewer-count">{live ? online : '–'}</span>
          </span>
        </div>

        {/* BACK — Activity Status */}
        <div className="reactions reactions-back grain" role="status" aria-label="Current activity">
          <span className="rx-status-icon">
            {status.icon === 'github' ? <GithubIcon /> : <span className="rx-status-emoji">{status.emoji}</span>}
          </span>
          <span className="rx-status-text">{status.text}</span>
        </div>
      </div>
    </div>
  )
}
