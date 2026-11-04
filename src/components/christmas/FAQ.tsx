import { config } from '@/lib/christmas-config';
import Panel from './Panel';
export default function FAQ() {
  return <Panel title="Good to know" id="f">{config.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</Panel>;
}
