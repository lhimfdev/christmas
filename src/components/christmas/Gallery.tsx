'use client';
import { useEffect, useState } from 'react';
import { burst } from '@/lib/animations';
import Panel from './Panel';
const KS = ['g1', 'g2', 'tr'];
export default function Gallery() {
  const [cur, setCur] = useState<number | null>(null);
  const go = (i: number) => setCur((i + KS.length) % KS.length);
  useEffect(() => {
    if (cur === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setCur(null); if (e.key === 'ArrowLeft') go(cur - 1); if (e.key === 'ArrowRight') go(cur + 1); };
    addEventListener('keydown', k); return () => removeEventListener('keydown', k);
  });
  return (
    <Panel title="Christmas gallery" id="gl">
      <div className="gal">{KS.map((k, i) => <button key={k} className={`gi ${k}`} aria-label={`Open photo ${i + 1}`} onClick={() => { setCur(i); burst(); }} />)}</div>
      {cur !== null && (
        <div id="lb" role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button aria-label="Previous photo" onClick={() => go(cur - 1)}>‹</button>
          <div className={`lbi ${KS[cur]}`} />
          <button aria-label="Next photo" onClick={() => go(cur + 1)}>›</button>
          <button id="lbx" aria-label="Close" onClick={() => setCur(null)}>×</button>
        </div>
      )}
    </Panel>
  );
}
