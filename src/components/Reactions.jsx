import { useEffect, useRef, useState } from 'react'

const REACTIONS = [
  { key: 'thumb', emoji: '👍', label: 'Like' },
  { key: 'fire', emoji: '🔥', label: 'Fire' },
  { key: 'eyes', emoji: '👀', label: 'Watching' },
]

// Cloudflare Worker host for the reactions Durable Object.
// Set VITE_REACTIONS_HOST in production (e.g. bhavishya-reactions.<account>.workers.dev)
const HOST = import.meta.env.VITE_REACTIONS_HOST || null

export default function Reactions() {
  const [counts, setCounts] = useState({ thumb: 0, fire: 0, eyes: 0 })
  const [online, setOnline] = useState(0)
  const [live, setLive] = useState(false)
  const [pop, setPop] = useState(null)
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
        // Auto-reconnect after 3s unless component unmounted
        if (!closed) {
          reconnectRef.current = setTimeout(connect, 3000)
        }
      })
      socket.addEventListener('message', (event) => {
        try {
          const data = JSON.parse(event.data)
          if (data.type === 'state') {
            setCounts(data.counts)
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

  const react = (key) => {
    setCounts((c) => ({ ...c, [key]: c[key] + 1 })) // optimistic
    setPop(key)
    setTimeout(() => setPop(null), 320)
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: 'react', key }))
    }
  }

  return (
    <div className="reactions" role="group" aria-label="Live visitor reactions">
      <span className={`rx-live ${live ? 'on' : ''}`}>
        <i className="rx-dot" />
        {live ? `${online} live` : 'react'}
      </span>
      <div className="rx-btns">
        {REACTIONS.map((r) => (
          <button
            key={r.key}
            type="button"
            className={`rx-btn ${pop === r.key ? 'pop' : ''}`}
            onClick={() => react(r.key)}
            aria-label={r.label}
          >
            <span className="rx-emoji" aria-hidden="true">{r.emoji}</span>
            <span className="rx-count">{counts[r.key]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
