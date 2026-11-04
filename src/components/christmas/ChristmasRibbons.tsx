export default function ChristmasRibbons() {
  const p = <><path d="M0 40 L100 0 L140 0 L0 100Z" fill="#D7192D" /><path d="M0 40 L100 0 L108 12 L0 58Z" fill="#8F0715" opacity=".5" /></>;
  return (
    <>
      <svg className="ribbon" viewBox="0 0 140 140" aria-hidden="true">{p}<circle cx="26" cy="26" r="14" fill="#8F0715" /></svg>
      <svg className="ribbon br" viewBox="0 0 140 140" aria-hidden="true">{p}</svg>
      <svg className="bow2" viewBox="0 0 200 110" aria-hidden="true">
        <defs><linearGradient id="sat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff5566" /><stop offset=".5" stopColor="#D7192D" /><stop offset="1" stopColor="#65000B" /></linearGradient></defs>
        <path d="M92 66 L58 108 L84 100 L98 72Z" fill="#8F0715" /><path d="M108 66 L142 108 L116 100 L102 72Z" fill="#8F0715" />
        <path d="M100 60C60 0 5 5 10 45 14 85 70 75 100 60Z" fill="url(#sat)" /><path d="M100 60C140 0 195 5 190 45 186 85 130 75 100 60Z" fill="url(#sat)" />
        <path d="M30 28C55 20 75 35 92 58M170 28C145 20 125 35 108 58" stroke="#fff" strokeOpacity=".45" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="87" y="46" width="26" height="28" rx="9" fill="#D7192D" /><rect x="92" y="50" width="6" height="18" rx="3" fill="#fff" opacity=".4" />
      </svg>
    </>
  );
}
