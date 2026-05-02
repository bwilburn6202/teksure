import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cast } from 'lucide-react';

export default function SeniorChromecast() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chromecast for Seniors — Senior Guide" description="Cast videos to your TV with Chromecast." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cast className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chromecast</h1>
          <p className="text-lg text-muted-foreground">Phone or computer onto the TV.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Get Google TV Streamer</h2><p>$99. Replaces the older Chromecast. Plugs into HDMI on the TV.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set up</h2><p>Free Google Home app. Walk through setup. Connect to home Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Cast YouTube</h2><p>Open YouTube on phone. Tap the cast button (square with curves). Pick your TV.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Cast Netflix and more</h2><p>Same idea. Most streaming apps support cast — Hulu, Prime, Disney+.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Voice control</h2><p>With Google Home, say Hey Google, play news on the bedroom TV.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Mirror screen</h2><p>Show family photos from phone on the big TV. Great for visits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Apple users — pick Apple TV ($129) instead. Better for AirPlay from iPhone and iPad.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
