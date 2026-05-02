import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Spade } from 'lucide-react';

export default function SeniorBridgeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bridge Apps for Seniors — TekSure" description="Online bridge for seniors — Funbridge, BBO, Trickster Cards." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Spade className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bridge Apps</h1>
          <p className="text-lg text-muted-foreground">Play bridge anytime.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bridge Base Online</h2><p>FREE. Largest community. Play with real people worldwide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Funbridge</h2><p>$8/month. Best for solo. AI partners. Tournaments.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trickster Cards</h2><p>FREE. Easier interface. Bridge + Spades + Hearts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mental benefits</h2><p>Bridge linked to slower cognitive decline. Real measurable benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior leagues</h2><p>ACBL.org has senior tournaments. Often free for ages 75+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Friends online</h2><p>Set up table on BBO. Play with real friends remotely.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Bridge is the senior brain workout. 1-2 games daily great for cognitive health.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
