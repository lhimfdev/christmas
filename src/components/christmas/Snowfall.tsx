'use client';
import { useEffect, useRef } from 'react';
import { reduceMotion } from '@/lib/animations';
type F = { x: number; y: number; r: number; v: number; p: number; vx?: number; vy?: number; gold?: boolean };
export default function Snowfall() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!, cx = cv.getContext('2d')!; let W = 0, H = 0, raf = 0;
    const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; }; size();
    const N = innerWidth < 640 ? 60 : 130;
    const mk = (r: boolean): F => { const z = Math.random(); return { x: Math.random() * W, y: r ? Math.random() * H : -10, r: 1 + z * 3.2, v: 0.4 + z * 1.6, p: Math.random() * 6.3 }; };
    const fl: F[] = Array.from({ length: N }, () => mk(true));
    const burst = () => { for (let i = 0; i < 80; i++) { const f = mk(false); f.x = W / 2; f.y = H / 2; f.vx = (Math.random() - 0.5) * 14; f.vy = (Math.random() - 0.5) * 14; f.gold = i % 3 === 0; fl.push(f); } };
    const tick = () => {
      cx.clearRect(0, 0, W, H);
      for (let i = fl.length - 1; i >= 0; i--) {
        const f = fl[i];
        if (f.vx !== undefined && f.vy !== undefined) { f.x += f.vx; f.y += f.vy; f.vx *= 0.96; f.vy = f.vy * 0.96 + 0.05; if (Math.abs(f.vx) < 0.15) { f.vx = f.vy = undefined; f.gold = false; } }
        else { f.p += 0.01; f.x += Math.sin(f.p) * 0.6; f.y += f.v; }
        if (f.y > H + 10) { if (fl.length > N) { fl.splice(i, 1); continue; } f.y = -10; f.x = Math.random() * W; }
        cx.beginPath(); cx.fillStyle = f.gold ? 'rgba(255,215,122,.9)' : `rgba(255,255,255,${0.45 + f.r / 8})`; cx.arc(f.x, f.y, f.r, 0, 6.3); cx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduceMotion()) tick();
    addEventListener('resize', size); addEventListener('xmas-burst', burst);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('xmas-burst', burst); };
  }, []);
  return <canvas id="snow" ref={ref} aria-hidden="true" />;
}
