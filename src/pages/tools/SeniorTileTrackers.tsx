import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorTileTrackers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tile Trackers — Senior Guide" description="Use Tile to find lost items on Android or iPhone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tile Trackers</h1>
          <p className="text-lg text-muted-foreground">Works on Android and iPhone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a Tile</h2><p>Tile Mate $25 — keys. Slim $30 — wallets. Pro $35 — louder ring.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Free Tile app</h2><p>Get the Tile app. Sign up. Press button on Tile to pair.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Find lost item</h2><p>Open app, tap Tile name, tap Find. Tile rings — even from a couch cushion.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Find phone too</h2><p>Lost your phone? Press the Tile twice. Your phone rings, even on silent.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Out of range</h2><p>If Tile is far away, the network of other Tile users updates the location anonymously.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Battery</h2><p>Some Tiles last 1 year (replaceable battery). Some last 3 years (not replaceable).</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If you only have iPhones, AirTag is better. Tile is best for Android or mixed households.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
