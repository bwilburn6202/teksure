import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorAppleMusic() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Music for Seniors — Senior Guide" description="Stream music with Apple Music." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Music</h1>
          <p className="text-lg text-muted-foreground">Millions of songs.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Cost</h2><p>$11/month. Try free for 1 month.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Family plan</h2><p>$17/month for 6 people. Best deal for families.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Lyrics</h2><p>Tap song. Tap lyrics icon. Lyrics scroll along. Like karaoke.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Stations</h2><p>Tap any song, then Create Station. Plays similar songs forever.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Download albums</h2><p>Tap cloud icon. Listen offline.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Cast to speakers</h2><p>AirPlay button. Stream to HomePod, Sonos, AirPods.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If you mostly listen on Android, Spotify is a better fit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
