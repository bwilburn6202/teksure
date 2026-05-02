import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorPandora() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pandora for Seniors — Senior Guide" description="Free music streaming with Pandora." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pandora</h1>
          <p className="text-lg text-muted-foreground">Free music — easy to use.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free with ads</h2><p>App or pandora.com. No subscription required.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Make a station</h2><p>Type artist or song. Pandora plays similar music.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Thumbs up/down</h2><p>Trains the station. More songs you like over time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Premium</h2><p>$11/month. No ads. Listen on demand. Download offline.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cars</h2><p>Built into many newer cars. Tap and play through dashboard.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Senior discount</h2><p>AARP members get $4 off Plus tier. Activate at AARP benefits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pandora is simpler than Spotify. Many seniors prefer it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
