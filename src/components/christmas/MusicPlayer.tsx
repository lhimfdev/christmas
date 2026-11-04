'use client';
import { useRef, useState } from 'react';
import { config } from '@/lib/christmas-config';
const SEQ = [0, 4, 7, 12, 7, 4, 9, 12, 9, 4, 7, 4, 5, 9, 12, 9, 7, 4, 2, 7, 4, 0];
export default function MusicPlayer() {
  const [on, setOn] = useState(false);
  const ac = useRef<AudioContext>(null), timer = useRef<ReturnType<typeof setInterval>>(null), au = useRef<HTMLAudioElement>(null), step = useRef(0), broken = useRef(false);
  const note = (n: number) => {
    const c = ac.current!, t = c.currentTime + 0.05, o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.value = 392 * Math.pow(2, n / 12 - 1);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + 1.5);
  };
  const synth = (next: boolean) => {
    if (next) { ac.current = ac.current ?? new AudioContext(); ac.current.resume(); const loop = () => note(SEQ[step.current++ % SEQ.length]); loop(); timer.current = setInterval(loop, 520); }
    else if (timer.current) clearInterval(timer.current);
  };
  const toggle = () => {
    const next = !on; setOn(next);
    if (config.musicSrc && !broken.current) {
      if (!au.current) { au.current = Object.assign(new Audio(config.musicSrc), { loop: true }); au.current.onerror = () => { broken.current = true; synth(true); }; }
      if (next) au.current.play().catch(() => { broken.current = true; synth(true); }); else au.current.pause();
      return;
    }
    synth(next);
  };
  return <button id="music" aria-label={on ? 'Pause Christmas music' : 'Play Christmas music'} aria-pressed={on} onClick={toggle}>{on ? '❚❚' : '♪'}</button>;
}
