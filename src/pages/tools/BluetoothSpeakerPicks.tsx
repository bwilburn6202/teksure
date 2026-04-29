import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

const PICKS = [
  { name: 'JBL Charge 5', cost: '$180', best: 'Loud + clear. 20-hr battery. Waterproof. Senior favorite.', good: 'Best portable.' },
  { name: 'Bose SoundLink Flex', cost: '$150', best: 'Premium audio. Bose quality. Smaller.', good: 'Best premium.' },
  { name: 'Anker Soundcore 3', cost: '$50', best: 'Cheapest decent. Surprising bass.', good: 'Best budget.' },
  { name: 'Sonos Era 100', cost: '$250', best: 'Wifi + Bluetooth + Alexa. Whole-home audio.', good: 'Best smart speaker.' },
  { name: 'Echo Studio', cost: '$200', best: 'Big Echo. Strong sound + Alexa. Best Amazon ecosystem fit.', good: 'Best Amazon.' },
  { name: 'HomePod Mini', cost: '$99', best: 'Apple ecosystem. Small + clear. Two paired = stereo.', good: 'Best Apple.' },
];

export default function BluetoothSpeakerPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluetooth Speaker Picks for Seniors | TekSure" description="JBL, Bose, Sonos, Echo. Plain-English picks for portable + home Bluetooth speakers. Senior-friendly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluetooth Speaker Picks</h1>
          <p className="text-lg text-muted-foreground">Music anywhere.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pair with phone</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Turn speaker on.</li>
              <li>iPhone — Settings → Bluetooth → Tap speaker name.</li>
              <li>Or pull down Control Center → tap Bluetooth icon → speaker.</li>
              <li>Music auto-routes to speaker.</li>
              <li>Once paired, auto-connects next time.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Music in kitchen while cooking.</li>
              <li>Audiobooks in garden / outside.</li>
              <li>Phone calls hands-free (most have mic).</li>
              <li>Loud TV audio for hard-of-hearing.</li>
              <li>Beach / pool / RV — JBL waterproof.</li>
              <li>Outdoor parties.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Echo as TV speaker</h3>
            <p className="text-sm text-muted-foreground">Echo + smart TV combo: TV audio routed to Echo Bluetooth — louder + clearer than TV speakers. Especially helpful for hard-of-hearing seniors. $50 Echo Dot upgrade is huge accessibility help.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
