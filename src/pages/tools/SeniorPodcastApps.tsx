import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorPodcastApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Podcasts for Seniors — Senior Guide" description="Find and listen to free podcasts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Podcasts</h1>
          <p className="text-lg text-muted-foreground">Free shows on every topic.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Podcasts</h2><p>Built into iPhone. Tap purple icon. Search any topic.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Spotify</h2><p>Free with ads. Same app for music. Most popular podcasts free here.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Subscribe</h2><p>Tap Follow on shows you like. New episodes appear in your library automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Download</h2><p>Tap download icon. Listen offline on planes or hikes — no data needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Speed</h2><p>1.0x is normal. 1.25x or 1.5x lets you finish more shows. Voice still clear.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Senior favorites</h2><p>Try The Daily, NPR Up First, This American Life, AARP The Perfect Scam.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Bluetooth headphones make podcasts hands-free during walks or yardwork.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
