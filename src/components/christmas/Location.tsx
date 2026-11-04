import { config } from '@/lib/christmas-config';
import Panel from './Panel';
export default function Location() {
  const q = encodeURIComponent(`${config.venue} ${config.address}`);
  return (
    <Panel title="Where we’ll celebrate" id="l">
      <p className="serif" style={{ fontSize: '1.5rem', margin: '1rem 0 .2rem' }}>{config.venue}</p>
      <p style={{ margin: '0 0 1.4rem' }}>{config.address}</p>
      <a className="btn" style={{ display: 'inline-block', textDecoration: 'none', lineHeight: 1.4 }} target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Get directions</a>
    </Panel>
  );
}
