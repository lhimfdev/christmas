import { config } from '@/lib/christmas-config';
import Panel from './Panel';
export default function GuestList() {
  return <Panel title="Who’s invited" id="w"><div className="gl">{config.guests.map(([t, m]) => <div key={t}><b>{t}</b>{m}</div>)}</div></Panel>;
}
