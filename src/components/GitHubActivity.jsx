import { useEffect, useState } from 'react'

const CACHE_KEY = 'gh_activity'
const CACHE_TTL = 600000 // 10 minutes in ms
const API_URL = 'https://api.github.com/users/bhavishyeah/events/public'
const GITHUB_URL = 'https://github.com/bhavishyeah'

/**
 * Filter the first PushEvent or CreateEvent from an array of GitHub events.
 * @param {Array} events - Array of GitHub event objects
 * @returns {object|null} The first matching event, or null
 */
export function filterEvent(events) {
  if (!Array.isArray(events)) return null
  return events.find((e) => e.type === 'PushEvent' || e.type === 'CreateEvent') || null
}

/**
 * Format a date string into a relative time label.
 * @param {string} dateString - ISO date string
 * @returns {string} Relative time string like "3m ago"
 */
export function formatRelativeTime(dateString) {
  const delta = Math.max(0, Date.now() - new Date(dateString).getTime())
  const seconds = Math.floor(delta / 1000)
  if (seconds < 60) return `${seconds}s ago`
  const minutes = Math.floor(delta / 60000)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(delta / 3600000)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(delta / 86400000)
  return `${days}d ago`
}

function isCacheFresh(timestamp) {
  return Date.now() - timestamp < CACHE_TTL
}

function getActionLabel(type) {
  if (type === 'PushEvent') return 'Pushed to'
  if (type === 'CreateEvent') return 'Created'
  return ''
}

export default function GitHubActivity() {
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Check sessionStorage cache
    try {
      const cached = sessionStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (parsed.timestamp && isCacheFresh(parsed.timestamp) && parsed.data) {
          setEvent(parsed.data)
          setLoading(false)
          return
        }
      }
    } catch {
      // Cache read failed, proceed with fetch
    }

    // Fetch from GitHub API with 5-second timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        const matched = filterEvent(data)
        if (matched) {
          setEvent(matched)
          // Cache the result
          try {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ data: matched, timestamp: Date.now() })
            )
          } catch {
            // Storage full or unavailable — ignore
          }
        } else {
          setError(true)
        }
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        clearTimeout(timeoutId)
        setLoading(false)
      })

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [])

  // Loading skeleton
  if (loading) {
    return (
      <div className="gh-activity" aria-busy="true" aria-label="Loading GitHub activity">
        <div className="gh-activity-skeleton">
          <span className="gh-skeleton-bar" />
          <span className="gh-skeleton-bar short" />
        </div>
      </div>
    )
  }

  // Fallback on error or no data
  if (error || !event) {
    return (
      <div className="gh-activity">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="gh-fallback-link"
        >
          See my latest work on GitHub →
        </a>
      </div>
    )
  }

  // Success state
  const repoName = event.repo?.name?.split('/').pop() || event.repo?.name || 'unknown'
  const actionLabel = getActionLabel(event.type)
  const timeAgo = formatRelativeTime(event.created_at)

  return (
    <div className="gh-activity">
      <span className="gh-activity-icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </span>
      <span className="gh-activity-text">
        {actionLabel} <strong>{repoName}</strong>
      </span>
      <span className="gh-activity-time">{timeAgo}</span>
    </div>
  )
}
