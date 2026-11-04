'use client';
import { useState } from 'react';
import { burst } from '@/lib/animations';
import Panel from './Panel';
type Errs = Record<string, string>;
export default function RSVPForm() {
  const [errs, setErrs] = useState<Errs>({}), [state, setState] = useState<'idle' | 'sending' | 'done'>('idle'), [fail, setFail] = useState('');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setFail('');
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const er: Errs = {};
    if ((f.name || '').trim().length < 2) er.name = 'Enter your full name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email || '')) er.email = 'Enter a valid email address.';
    if (!/^[+\d][\d\s-]{6,}$/.test(f.phone || '')) er.phone = 'Enter a valid mobile number.';
    setErrs(er); if (Object.keys(er).length) return;
    setState('sending');
    try {
      const r = await fetch('/api/rsvp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      if (!r.ok) throw new Error((await r.json()).error || 'Something went wrong.');
      setState('done'); burst();
    } catch (x) { setFail(x instanceof Error ? x.message : 'Could not send. Try again.'); setState('idle'); }
  }
  return (
    <Panel title="Will you join us?" id="rsvp">
      {state === 'done' ? <p id="thanks" style={{ display: 'block' }} role="status">Your presence will make our Christmas more magical!</p> : (
        <form onSubmit={submit} noValidate>
          <input name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
          <div><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" /><div className="err">{errs.name}</div></div>
          <div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" /><div className="err">{errs.email}</div></div>
          <div><label htmlFor="phone">Mobile number</label><input id="phone" name="phone" type="tel" autoComplete="tel" /><div className="err">{errs.phone}</div></div>
          <div><label htmlFor="guests">Number of guests</label><select id="guests" name="guests">{[1, 2, 3, 4].map(n => <option key={n}>{n}</option>)}</select></div>
          <fieldset className="choice" style={{ border: 0, padding: 0, margin: 0 }}>
            <label><input type="radio" name="attendance" value="yes" defaultChecked /> Yes, I’ll be there!</label>
            <label><input type="radio" name="attendance" value="no" /> Sorry, I can’t attend.</label>
          </fieldset>
          <div><label htmlFor="diet">Dietary restrictions</label><input id="diet" name="diet" /></div>
          <div><label htmlFor="msg">Special message</label><textarea id="msg" name="message" rows={3} /></div>
          {fail && <div className="err" role="alert">{fail}</div>}
          <button className="btn" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send my RSVP'}</button>
        </form>
      )}
    </Panel>
  );
}
