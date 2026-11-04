export const config = {
  eventDate: '2026-12-24T18:00:00',
  dateLabel: 'December 24, 2026',
  timeLabel: '6:00 PM',
  venue: '[VENUE NAME]',
  address: '[Complete address]',
  host: '[HOST NAME]',
  videoSrc: '', // e.g. '/videos/christmas.mp4'
  musicSrc: '/audio/christmas.mp3', // drop your own licensed file at public/audio/christmas.mp3
  giftQr: '', // e.g. '/images/gcash-qr.png'
  timeline: [
    ['6:00 PM', 'Guest arrival'], ['6:30 PM', 'Welcome message'], ['7:00 PM', 'Christmas dinner'],
    ['8:00 PM', 'Games and activities'], ['9:00 PM', 'Gift exchange'], ['10:00 PM', 'Christmas celebration'],
  ],
  faqs: [
    ['What time should I arrive?', 'Doors open at 6:00 PM. Dinner starts at 7:00 PM.'],
    ['What should I wear?', 'Christmas red, forest green, white, champagne gold, or black.'],
    ['Can I bring a guest?', 'Add your guests in the RSVP form so we can set a place for each.'],
    ['Is there parking available?', 'Add parking details for your venue here.'],
    ['Can I bring a gift?', 'Your presence is the gift. If you wish to give, open the gift box above.'],
  ],
  guests: [
    ['Family', 'Come as you are and bring everyone. The table is long.'],
    ['Friends', 'Your laughter is the best decoration we could ask for.'],
    ['Colleagues', 'Leave work at the door and join the celebration.'],
  ],
  colors: [['Christmas red', '#D7192D'], ['Forest green', '#1f5a3a'], ['Snow white', '#ffffff'], ['Champagne gold', '#D5B16D'], ['Black', '#222222']],
};
