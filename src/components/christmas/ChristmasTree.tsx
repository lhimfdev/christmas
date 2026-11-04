'use client';
import { useReveal, burst } from '@/lib/animations';
const TW = [[50,24],[42,38],[58,40],[34,54],[50,52],[64,56],[26,70],[44,68],[62,72],[74,66],[38,84],[56,86],[20,84],[80,82]];
export default function ChristmasTree() {
  const [ref, on] = useReveal<HTMLDivElement>();
  return (
    <div className="treewrap">
      <div ref={ref} className={`treebox ${on ? 'on' : ''}`}>
        <div className="treeimg tr" role="img" aria-label="Decorated Christmas tree" />
        <button id="star" aria-label="Christmas surprise" onClick={burst} />
        {TW.map((p, i) => <i key={i} className="tw" style={{ left: p[0] + '%', top: p[1] + '%', animationDelay: i * 0.23 + 's' }} />)}
      </div>
      <p className="serif" style={{ fontSize: '1.2rem', margin: '.6rem 0 0' }}>Tap the star for a surprise.</p>
    </div>
  );
}
