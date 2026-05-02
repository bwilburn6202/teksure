import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorFreeMusicApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Music Apps for Seniors — TekSure" description="Free ways to listen to music — Spotify free, Pandora, YouTube Music, library apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Music Apps</h1>
          <p className="text-lg text-muted-foreground">All your favorite songs — for free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spotify Free</h2><p>Free with ads. 100 million songs. Make playlists by decade.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pandora</h2><p>Free. Type a song name — Pandora plays similar music. Great for discovery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube Music</h2><p>Free with ads. Includes live concerts and rare recordings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iHeartRadio</h2><p>Free. Live radio stations from across the country.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hoopla / Freegal</h2><p>FREE music from your library card. 5+ free song downloads weekly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>&ldquo;Hey Siri, play Frank Sinatra&rdquo; or &ldquo;Hey Google, play 60s oldies.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Spotify Premium is $5.99/month for seniors with low income through Premium for Students/Limited offers — check eligibility.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
