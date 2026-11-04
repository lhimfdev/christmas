import { config } from '@/lib/christmas-config';
import Snowfall from '@/components/christmas/Snowfall';
import ChristmasIntro from '@/components/christmas/ChristmasIntro';
import InvitationCard from '@/components/christmas/InvitationCard';
import ChristmasTree from '@/components/christmas/ChristmasTree';
import Countdown from '@/components/christmas/Countdown';
import Timeline from '@/components/christmas/Timeline';
import Gallery from '@/components/christmas/Gallery';
import Location from '@/components/christmas/Location';
import GuestList from '@/components/christmas/GuestList';
import DressCode from '@/components/christmas/DressCode';
import GiftSection from '@/components/christmas/GiftSection';
import RSVPForm from '@/components/christmas/RSVPForm';
import FAQ from '@/components/christmas/FAQ';
import ChristmasFooter from '@/components/christmas/ChristmasFooter';
import MusicPlayer from '@/components/christmas/MusicPlayer';

export default function Home() {
  return (
    <>
      {config.videoSrc && (
        <video className="bgvid" autoPlay muted loop playsInline preload="none" aria-hidden="true"><source src={config.videoSrc} type="video/mp4" /></video>
      )}
      <Snowfall />
      <ChristmasIntro />
      <main>
        <InvitationCard />
        <ChristmasTree />
        <Countdown />
        <Timeline />
        <Gallery />
        <Location />
        <GuestList />
        <DressCode />
        <GiftSection />
        <RSVPForm />
        <FAQ />
        <ChristmasFooter />
      </main>
      <MusicPlayer />
    </>
  );
}
