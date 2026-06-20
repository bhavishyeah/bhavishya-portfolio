export default function Marquee({ items }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i}>
            <b>{item}</b>
          </span>
        ))}
      </div>
    </div>
  )
}
