'use client';
import { useReveal } from '@/lib/animations';
export default function Panel({ id, title, className = '', children }: { id?: string; title: string; className?: string; children: React.ReactNode }) {
  const [ref, on] = useReveal<HTMLElement>();
  return (
    <section ref={ref} id={id} className={`panel rv ${on ? 'on' : ''} ${className}`} aria-labelledby={`${id ?? title}-h`}>
      <h2 className="script" id={`${id ?? title}-h`}>{title}</h2>
      {children}
    </section>
  );
}
