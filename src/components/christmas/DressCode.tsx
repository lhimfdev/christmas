import { config } from '@/lib/christmas-config';
import Panel from './Panel';
export default function DressCode() {
  return <Panel title="Dress in Christmas colors" id="d"><div className="sw">{config.colors.map(([n, c]) => <div key={n}><i style={{ background: c }} />{n}</div>)}</div></Panel>;
}
