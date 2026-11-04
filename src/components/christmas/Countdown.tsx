'use client';
import { useEffect, useState } from 'react';
import { config } from '@/lib/christmas-config';
import Panel from './Panel';
export default function Countdown() {
  const [d, setD] = useState<number | null>(null);
  useEffect(() => { const t = () => setD(new Date(config.eventDate).getTime() - Date.now()); t(); const i = setInterval(t, 1000); return () => clearInterval(i); }, []);
  const s = Math.max(0, Math.floor((d ?? 0) / 1000));
  const cells: [number, string][] = [[Math.floor(s / 86400), 'Days'], [Math.floor((s % 86400) / 3600), 'Hours'], [Math.floor((s % 3600) / 60), 'Minutes'], [s % 60, 'Seconds']];
  return (
    <Panel title="Counting down to the magic" id="c">
      {d !== null && d <= 0 ? <div id="count" style={{ display: 'block' }}><b>THE MAGIC BEGINS!</b></div> : (
        <div id="count" role="timer">{cells.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>
      )}
    </Panel>
  );
}
