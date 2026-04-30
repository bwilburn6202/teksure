import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileMusic } from 'lucide-react';

export default function SheetMusicAppsDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Sheet Music Apps for Seniors | TekSure" description="Buy and read sheet music on tablet. Best apps for senior musicians explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileMusic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Sheet Music</h1>
          <p className="text-lg text-muted-foreground">Replace paper music with tablet apps.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why digital sheet music?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No more searching for lost paper music.</li>
              <li>Adjust text size — easier on eyes.</li>
              <li>Auto-page-turn with foot pedal.</li>
              <li>Carry whole library on one tablet.</li>
              <li>Buy individual songs or subscribe.</li>
              <li>Annotate without ruining originals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Musicnotes — buy individual</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 million+ songs available.</li>
              <li>$5–$10 per song typically.</li>
              <li>Choose key + difficulty version.</li>
              <li>Print or read on tablet.</li>
              <li>Sync to multiple devices.</li>
              <li>Best for occasional purchases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sheet Music Plus</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest sheet music store.</li>
              <li>Both physical + digital.</li>
              <li>Classical to current pop.</li>
              <li>Best for variety + selection.</li>
              <li>Frequent sales + free shipping.</li>
              <li>Established + reliable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">forScore — best reader app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$19.99 one-time on iPad.</li>
              <li>Best digital sheet music reader.</li>
              <li>Annotate with stylus or finger.</li>
              <li>Auto-page-turn with foot pedal.</li>
              <li>Organize by composer, instrument, etc.</li>
              <li>Worth it for serious musicians.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free sheet music sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>IMSLP — public domain classical, completely free.</li>
              <li>MuseScore — community-contributed, mostly free.</li>
              <li>Public library — many lend physical sheet music.</li>
              <li>Hymns + folk songs often free.</li>
              <li>YouTube tutorials show notes too.</li>
              <li>Hundreds of thousands of free pieces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tablet setup for sheet music</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPad — best for sheet music apps.</li>
              <li>10-inch+ screen better for reading.</li>
              <li>Music stand tablet holder — under $20.</li>
              <li>Bluetooth foot pedal for page turns ($30).</li>
              <li>Apple Pencil for annotation.</li>
              <li>Used iPads great option for this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with IMSLP free</h3>
            <p className="text-sm text-muted-foreground">If you play classical or hymns, IMSLP.org is incredible — every public-domain piece ever published, available free as PDF. Bach, Beethoven, Chopin, all the hymns. Download to your tablet, view in any PDF reader. No app or subscription needed. For modern songs, Musicnotes is the standard. Eventually consider forScore if you become a serious tablet musician.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
