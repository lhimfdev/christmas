import { config } from '@/lib/christmas-config';
import Panel from './Panel';
export default function Timeline() {
  return <Panel title="The evening" id="t"><ol className="tl">{config.timeline.map(([t, e]) => <li key={t}><b>{t}</b> {e}</li>)}</ol></Panel>;
}
