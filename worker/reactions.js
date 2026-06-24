// Cloudflare Worker + Durable Object for live reactions
// Replaces PartyKit with the same functionality

export class ReactionsRoom {
  constructor(state, env) {
    this.state = state
    this.env = env
    this.counts = { thumb: 0, fire: 0, eyes: 0 }
    this.connections = new Set()

    // Load persisted counts on first request
    this.state.blockConcurrencyWhile(async () => {
      const saved = await this.state.storage.get('counts')
      if (saved) this.counts = { ...this.counts, ...saved }
    })
  }

  async fetch(request) {
    // Only accept WebSocket upgrade requests
    const upgradeHeader = request.headers.get('Upgrade')
    if (!upgradeHeader || upgradeHeader !== 'websocket') {
      // Allow CORS preflight for non-WS requests
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': '*',
          },
        })
      }
      return new Response('Expected WebSocket', { status: 426 })
    }

    const pair = new WebSocketPair()
    const [client, server] = Object.values(pair)

    this.state.acceptWebSocket(server)
    this.connections.add(server)

    // Send current state to the new connection
    server.send(JSON.stringify({
      type: 'state',
      counts: this.counts,
      online: this.connections.size,
    }))

    // Broadcast updated online count to everyone else
    this.broadcast(JSON.stringify({ type: 'online', online: this.connections.size }), server)

    return new Response(null, { status: 101, webSocket: client })
  }

  async webSocketMessage(ws, message) {
    let data
    try {
      data = JSON.parse(message)
    } catch {
      return
    }

    if (data && data.type === 'react' && Object.prototype.hasOwnProperty.call(this.counts, data.key)) {
      this.counts[data.key] += 1
      await this.state.storage.put('counts', this.counts)
      this.broadcast(JSON.stringify({ type: 'state', counts: this.counts, online: this.connections.size }))
    }
  }

  webSocketClose(ws) {
    this.connections.delete(ws)
    this.broadcast(JSON.stringify({ type: 'online', online: this.connections.size }))
  }

  webSocketError(ws) {
    this.connections.delete(ws)
    this.broadcast(JSON.stringify({ type: 'online', online: this.connections.size }))
  }

  broadcast(message, exclude = null) {
    for (const conn of this.connections) {
      if (conn !== exclude) {
        try {
          conn.send(message)
        } catch {
          this.connections.delete(conn)
        }
      }
    }
  }
}

// Worker entry point — routes all requests to the single Durable Object instance
export default {
  async fetch(request, env) {
    // CORS headers for all responses
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Upgrade, Connection, Sec-WebSocket-Key, Sec-WebSocket-Version, Sec-WebSocket-Protocol',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    // Use a single room for all reactions (same as PartyKit's "portfolio-reactions" room)
    const id = env.REACTIONS.idFromName('portfolio-reactions')
    const stub = env.REACTIONS.get(id)
    return stub.fetch(request)
  },
}
