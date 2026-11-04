'use client';
import { useState } from 'react';
import { config } from '@/lib/christmas-config';
import { burst } from '@/lib/animations';
import Panel from './Panel';
export default function GiftSection() {
  const [open, setOpen] = useState(false);
  return (
    <Panel title="Share the magic of giving" id="g" className="giftsec">
      <p>Tap the gift to open it.</p>
      <button className="btn" aria-expanded={open} aria-controls="qr" onClick={() => { setOpen(!open); if (!open) burst(); }}>{open ? 'Close the gift' : 'Open the gift'}</button>
      <div id="qr" className={open ? 'show' : ''}>
        <div>{config.giftQr ? <img src={config.giftQr} alt="GCash QR code" style={{ width: '100%', borderRadius: 12 }} /> : 'The host’s GCash QR code and payment details go here. Set giftQr in christmas-config.ts.'}</div>
      </div>
    </Panel>
  );
}
