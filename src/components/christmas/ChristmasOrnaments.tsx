'use client';
import { useEffect } from 'react';
import { burst, reduceMotion } from '@/lib/animations';
const BALLS: [number, number, string, boolean, number][] = [[2, 78, 'top:40px;left:2%', false, 0], [1, 92, 'top:30px;right:2%', false, 1], [4, 54, 'top:130px;left:12%', true, 2], [6, 60, 'top:140px;right:13%', true, 3]];
const css = (s: string) => Object.fromEntries(s.split(';').map(p => p.split(':'))) as React.CSSProperties;
export default function ChristmasOrnaments() {
  useEffect(() => {
    if (reduceMotion()) return; let last = 0;
    const move = (e: PointerEvent) => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      document.querySelectorAll<HTMLElement>('.ball').forEach((b, i) => { const d = (i + 1) * 10; b.style.translate = `${x * d}px ${y * d}px`; });
      const t = Date.now(); if (t - last < 45 || e.pointerType === 'touch') return; last = t;
      const s = document.createElement('div'); s.className = 'sp'; s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
      document.body.appendChild(s); setTimeout(() => s.remove(), 800);
    };
    addEventListener('pointermove', move); return () => removeEventListener('pointermove', move);
  }, []);
  return <>{BALLS.map(([n, w, pos, hm, d]) => (
    <div key={n} className={`ball ob b${n}${hm ? ' hm' : ''}`} style={{ width: w, animationDelay: `-${d}s`, ...css(pos) }} onClick={burst} aria-hidden="true" />
  ))}</>;
}
