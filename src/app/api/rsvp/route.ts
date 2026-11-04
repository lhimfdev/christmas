import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const hits = new Map<string, number[]>();
const clean = (v: unknown, max: number) => String(v ?? '').replace(/[<>]/g, '').trim().slice(0, max);

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'local';
  const now = Date.now(), recent = (hits.get(ip) ?? []).filter(t => now - t < 60_000);
  if (recent.length >= 5) return NextResponse.json({ error: 'Too many attempts. Try again in a minute.' }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot

  const r = { name: clean(b.name, 120), email: clean(b.email, 160), phone: clean(b.phone, 30), guests: Math.min(10, Math.max(1, parseInt(String(b.guests), 10) || 1)),
    attendance: b.attendance === 'no' ? 'no' : 'yes', diet: clean(b.diet, 200), message: clean(b.message, 600), at: new Date().toISOString() };
  if (r.name.length < 2) return NextResponse.json({ error: 'Enter your full name.' }, { status: 400 });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(r.email)) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  if (!/^[+\d][\d\s-]{6,}$/.test(r.phone)) return NextResponse.json({ error: 'Enter a valid mobile number.' }, { status: 400 });

  try {
    const file = path.join(process.cwd(), process.env.RSVP_FILE || 'data/rsvps.json');
    await fs.mkdir(path.dirname(file), { recursive: true });
    const all = JSON.parse(await fs.readFile(file, 'utf8').catch(() => '[]'));
    all.push(r); await fs.writeFile(file, JSON.stringify(all, null, 2));
  } catch (e) {
    console.error('RSVP save failed', e); // replace with a database write on serverless hosts
    return NextResponse.json({ error: 'Could not save your RSVP. Please try again.' }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
