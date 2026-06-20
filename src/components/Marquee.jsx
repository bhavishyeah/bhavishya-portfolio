// Outlined infinite marquee band between sections.
export default function Marquee({ items }) {
  const loop = [...items, ...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i}>{item}<span className="sep">●</span></span>
        ))}
      </div>
    </div>
  )
}
