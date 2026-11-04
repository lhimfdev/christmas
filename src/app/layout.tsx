import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'You’re Invited — Merry Christmas', description: 'A Christmas invitation.' };
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' as const };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
