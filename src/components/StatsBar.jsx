import { stats } from '../data'
import CountUp from './CountUp'

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Key stats">
      <div className="container">
        <div className="stats-inner">
          {stats.map((s) => (
            <div className="stat-cell" key={s.label}>
              <div className="stat-num">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
