# Christmas Invitation (Next.js)

1. `npm install`
2. `cp .env.example .env`
3. `npm run dev` then open http://localhost:3000
4. `npm run build && npm start` for production

Edit everything (date, venue, host, timeline, FAQ, music file, GCash QR) in `src/lib/christmas-config.ts`.

- RSVPs are validated on the server and saved to `data/rsvps.json`. On serverless hosts (Vercel) the disk is read-only: replace the save step in `src/app/api/rsvp/route.ts` with your database (Neon/Prisma, Supabase, etc.).
- Music: put your own licensed audio at `public/audio/christmas.mp3` and set `musicSrc`. Without it a soft synthesized tune plays.
- Video: put `public/videos/christmas.mp4` and set `videoSrc`; the page works without it.
- GCash: add your real QR at `public/images/gcash-qr.png` and set `giftQr`.
