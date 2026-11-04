import { config } from '@/lib/christmas-config';
export default function ChristmasFooter() {
  return (
    <footer>
      <h2>The greatest gift is being together.</h2>
      <p className="serif" style={{ fontSize: '1.2rem' }}>Merry Christmas and Happy New Year!</p>
      <div className="script">With love, {config.host}</div>
    </footer>
  );
}
