'use client';
import { useState } from 'react';
import { burst, reduceMotion } from '@/lib/animations';
export default function ChristmasIntro() {
  const [open, setOpen] = useState(false), [gone, setGone] = useState(false), [hidden, setHidden] = useState(false);
  const go = () => {
    setOpen(true); const r = reduceMotion();
    setTimeout(() => { burst(); setGone(true); document.body.classList.add('in'); }, r ? 100 : 2300);
    setTimeout(() => setHidden(true), r ? 200 : 3500);
  };
  if (hidden) return null;
  return (
    <div id="intro" className={`${open ? 'open ' : ''}${gone ? 'gone' : ''}`}>
      <div>
        <div className="rays" aria-hidden="true" />
        <div className="gift" aria-hidden="true"><div className="body"><div className="v" /></div><div className="h" /><div className="lid"><i /></div><div className="bow" /><div className="glow" /></div>
        <h1>The Magic of Christmas</h1>
        <p>Something magical is waiting for you…</p>
        <button className="btn" onClick={go}>Open your Christmas invitation</button>
      </div>
    </div>
  );
}
