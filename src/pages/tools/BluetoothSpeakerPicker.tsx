import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from 'lucide-react';

const PICKS = [
  { name: 'JBL Flip 6 / Charge 5', price: '$80-150', best: 'Best portable. Waterproof, durable, great sound. Travel-friendly.', good: 'Best mid-range portable.' },
  { name: 'Bose SoundLink Flex / Mini II', price: '$130-250', best: 'Premium sound, premium build.', good: 'Best premium portable.' },
  { name: 'Anker Soundcore Motion+', price: '$80', best: 'Punches above price. Hi-Fi audio for the cost.', good: 'Best value.' },
  { name: 'Sonos One / Era 100', price: '$170-250', best: 'Multi-room audio. Add more around the house, sync everything.', good: 'Best home system speaker.' },
  { name: 'Apple HomePod Mini', price: '$100', best: 'Apple-only. Voice via Siri, smart home control.', good: 'iPhone users.' },
  { name: 'Echo Dot / Echo', price: '$30-100', best: 'Alexa + speaker. Great for kitchen.', good: 'Best multi-purpose value.' },
  { name: 'UE Wonderboom 4', price: '$100', best: 'Tough little speaker. Truly waterproof — survives pools, beaches.', good: 'Best for travel/outdoors.' },
];

export default function BluetoothSpeakerPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluetooth Speaker Picker — JBL, Bose, Sonos | TekSure" description="Music in any room. Plain-English picks for portable speakers, home speakers, and multi-room systems." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speaker className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluetooth Speaker Picker</h1>
          <p className="text-lg text-muted-foreground">Music anywhere. Pick one for the patio, kitchen, or travel.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pool / patio</strong> → waterproof JBL or UE.</li>
              <li><strong>Kitchen radio</strong> → Echo Dot or HomePod Mini.</li>
              <li><strong>Multi-room music</strong> → Sonos system.</li>
              <li><strong>Travel</strong> → small JBL or UE.</li>
              <li><strong>Living room casual</strong> → Anker Motion+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pair to phone (any speaker)</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Turn ON the speaker. Press the Bluetooth button (looks like a ⑂).</li>
              <li>On phone: Settings → Bluetooth → ON.</li>
              <li>Speaker name appears in list. Tap it.</li>
              <li>Connected. Plays whatever audio is on the phone.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For party hosts</h3>
            <p className="text-sm text-muted-foreground">Many JBL and Sonos speakers can pair to EACH OTHER for stereo or whole-house. Read the manual on "Stereo Pair" or "PartyConnect" feature.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
