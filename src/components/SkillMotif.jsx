// Decorative animated watermark per skill category.
export default function SkillMotif({ type, color }) {
  const stroke = { fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <div className="motif" aria-hidden="true">
      {type === 'brackets' && (
        <svg viewBox="0 0 100 100" className="motif-float"><path {...stroke} d="M38 20 18 50l20 30M62 20l20 30-20 30" /></svg>
      )}
      {type === 'database' && (
        <svg viewBox="0 0 100 100" className="motif-pulse"><ellipse {...stroke} cx="50" cy="26" rx="28" ry="11" /><path {...stroke} d="M22 26v22c0 6 12.5 11 28 11s28-5 28-11V26M22 48v22c0 6 12.5 11 28 11s28-5 28-11V48" /></svg>
      )}
      {type === 'chart' && (
        <svg viewBox="0 0 100 100" className="motif-float"><path {...stroke} d="M18 82V18M18 82h64" /><rect {...stroke} x="30" y="56" width="11" height="20" /><rect {...stroke} x="48" y="42" width="11" height="34" /><rect {...stroke} x="66" y="30" width="11" height="46" /></svg>
      )}
      {type === 'gear' && (
        <svg viewBox="0 0 100 100" className="motif-spin"><circle {...stroke} cx="50" cy="50" r="14" /><path {...stroke} d="M50 18v10M50 72v10M18 50h10M72 50h10M27 27l7 7M66 66l7 7M73 27l-7 7M34 66l-7 7" /></svg>
      )}
      {type === 'neural' && (
        <svg viewBox="0 0 100 100" className="motif-pulse"><g {...stroke}><circle cx="22" cy="30" r="5" /><circle cx="22" cy="70" r="5" /><circle cx="50" cy="50" r="5" /><circle cx="78" cy="30" r="5" /><circle cx="78" cy="70" r="5" /><path d="M27 30 45 48M27 70 45 52M55 48 73 30M55 52 73 70" /></g></svg>
      )}
    </div>
  )
}
