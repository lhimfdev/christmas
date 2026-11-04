import { useEffect, useRef, useState } from 'react';
export const burst = () => window.dispatchEvent(new Event('xmas-burst'));
export const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
/** Adds "on" once the element scrolls into view; a timer guarantees nothing stays hidden. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const chk = () => { const r = el.getBoundingClientRect(); if (r.top < innerHeight * 0.92 && r.bottom > 0) setOn(true); };
    chk(); addEventListener('scroll', chk, { passive: true }); addEventListener('resize', chk);
    const t = setTimeout(() => setOn(true), 6000);
    return () => { removeEventListener('scroll', chk); removeEventListener('resize', chk); clearTimeout(t); };
  }, []);
  return [ref, on] as const;
}
