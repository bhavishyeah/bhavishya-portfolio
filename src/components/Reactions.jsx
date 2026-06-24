import { useEffect, useRef, useState } from 'react'
import PartySocket from 'partysocket'

const REACTIONS = [
  { key: 'thumb', emoji: '👍', label: 'Like' },
  { key: 'fire', emoji: '🔥', label: 'Fire' },
  { key: 'eyes', emoji: '👀', label: 'Watching' },
]

// PartyKit host: set VITE_PARTYKIT_HOST in production (e.g. your-project.username.partykit.dev).
// Falls back to the local dev server; if neither exists the widget still works locally (offline).
const HOST = import.meta.env.VITE_PARTYKIT_HOST || (import.meta.env.DEV ? 'localhost:1999' : null)

// Live reaction bar — counts update in real time across every visitor on the site.
export default function Reactions() {
  const [counts, setCounts] = useState({ thumb: 0, fire: 0, eyes: 0 })
  const [online, setOnline] = useState(0)
  const [live, setLive] = useState(false)
  const [pop, setPop] = useState(null)
  const socketRef = useRef(null)

  useEffect(() => {
    if (!HOST) return undefined
    const socket = new PartySocket({ host: HOST, room: 'portfolio-reactions' })
    socketRef.current = socket

    const onOpen = () => setLive(true)
    const onClose = () => setLive(false)
    const onMessage = (event) => {
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
    }

    socket.addEventListener('open', onOpen)
    socket.addEventListener('close', onClose)
    socket.addEventListener('message', onMessage)
    return () => {
      socket.removeEventListener('open', onOpen)
      socket.removeEventListener('close', onClose)
      socket.removeEventListener('message', onMessage)
      socket.close()
    }
  }, [])

  const react = (key) => {
    setCounts((c) => ({ ...c, [key]: c[key] + 1 })) // optimistic
    setPop(key)
    setTimeout(() => setPop(null), 320)
    socketRef.current?.send(JSON.stringify({ type: 'react', key }))
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
