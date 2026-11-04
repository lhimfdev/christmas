import { config } from '@/lib/christmas-config';
import ChristmasOrnaments from './ChristmasOrnaments';
import ChristmasRibbons from './ChristmasRibbons';
export default function InvitationCard() {
  return (
    <article className="card" aria-label="Christmas invitation">
      <ChristmasRibbons />
      <ChristmasOrnaments />
      <h1 className="script">Merry Christmas!</h1>
      <div className="sub">AND A HAPPY NEW YEAR</div>
      <h2 className="script">You’re Invited!</h2>
      <p className="lead">Join us for a magical celebration filled with joy, laughter, love, and unforgettable Christmas memories.</p>
      <div className="facts">
        <div><b>DATE</b>{config.dateLabel}</div><div><b>TIME</b>{config.timeLabel}</div><div><b>VENUE</b>{config.venue}</div>
      </div>
      <p className="serif" style={{ fontSize: '1.15rem', margin: '0 0 1.6rem' }}>May the magic of Christmas fill your heart and home with happiness.</p>
      <a href="#rsvp"><button className="btn" type="button">RSVP</button></a>
      <p className="serif" style={{ letterSpacing: '.2em', margin: '1.8rem 0 0', color: 'var(--red)' }}>WITH LOVE, {config.host}</p>
    </article>
  );
}
