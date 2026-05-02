import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from 'lucide-react';

export default function SeniorBluetoothSpeakers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluetooth Speakers for Seniors — TekSure" description="Best Bluetooth speakers for seniors — JBL Flip, Sonos, Bose." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speaker className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluetooth Speakers</h1>
          <p className="text-lg text-muted-foreground">Music anywhere from your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">JBL Flip 6</h2><p>$130. Most popular. 12-hour battery. Waterproof.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bose SoundLink Flex</h2><p>$150. Premium sound. Used outdoors safely.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sonos Roam</h2><p>$180. Great for whole-house if you have other Sonos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Anker Soundcore</h2><p>$50. Budget pick. Surprisingly good.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pair to phone</h2><p>Settings → Bluetooth → Tap speaker name. Once paired, auto-connects.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bigger sound for hearing loss</h2><p>Many speakers louder than phone. Better music for hard-of-hearing seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take to porch, kitchen, bedroom. Music goes wherever you do.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
