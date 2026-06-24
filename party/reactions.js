// PartyKit server — live reaction counts shared across every connected visitor.
// Counts persist in room storage; "online" reflects current open connections.
const DEFAULT_COUNTS = { thumb: 0, fire: 0, eyes: 0 }

export default class ReactionsServer {
  constructor(room) {
    this.room = room
    this.counts = { ...DEFAULT_COUNTS }
  }

  async onStart() {
    const saved = await this.room.storage.get('counts')
    if (saved) this.counts = { ...DEFAULT_COUNTS, ...saved }
  }

  online() {
    return [...this.room.getConnections()].length
  }

  onConnect(connection) {
    connection.send(JSON.stringify({ type: 'state', counts: this.counts, online: this.online() }))
    this.room.broadcast(JSON.stringify({ type: 'online', online: this.online() }))
  }

  onClose() {
    this.room.broadcast(JSON.stringify({ type: 'online', online: this.online() }))
  }

  async onMessage(message) {
    let data
    try {
      data = JSON.parse(message)
    } catch {
      return
    }
    if (data && data.type === 'react' && Object.prototype.hasOwnProperty.call(this.counts, data.key)) {
      this.counts[data.key] += 1
      await this.room.storage.put('counts', this.counts)
      this.room.broadcast(JSON.stringify({ type: 'state', counts: this.counts, online: this.online() }))
    }
  }
}
