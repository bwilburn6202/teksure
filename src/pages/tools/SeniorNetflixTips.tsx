import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function SeniorNetflixTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Netflix Tips for Seniors — TekSure" description="Get more from your Netflix subscription — captions, profiles, hidden categories." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Netflix Tips for Seniors</h1>
          <p className="text-lg text-muted-foreground">Get more from your subscription.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bigger subtitles</h2><p>Account → Profile → Subtitle appearance. Set size to Large or Extra Large.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Make a personal profile</h2><p>Up to 5 profiles per account. Yours stays clean from grandkids&apos; cartoons.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hidden categories</h2><p>Visit netflix.com/browse/genre/52858 for &ldquo;Classic British TV.&rdquo; Many other senior-friendly codes online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audio description</h2><p>Some shows include narration of action for low-vision viewers. Look for &ldquo;Audio&rdquo; menu.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pause auto-play</h2><p>Account → Profile → Playback. Turn off &ldquo;Autoplay next episode.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Download for travel</h2><p>Tap download arrow on a show. Watch offline on your tablet on a flight.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: The Standard with Ads plan is $7.99/month — same shows, occasional ads.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
