import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from 'lucide-react';

const PICKS = [
  { name: 'Sonos Era 100', cost: '$250', best: 'Best new mid-size speaker. Voice control. Great senior pick.', good: 'Best overall.' },
  { name: 'Sonos Roam', cost: '$180', best: 'Portable. Take to deck/yard. Battery 10 hrs.', good: 'Best portable.' },
  { name: 'Sonos Beam', cost: '$500', best: 'TV soundbar. Dialogue mode for hearing.', good: 'Best for TV.' },
  { name: 'Sonos Era 300', cost: '$450', best: 'Premium. Spatial audio. Music room.', good: 'Best premium.' },
  { name: 'Apple HomePod mini', cost: '$100', best: 'Cheaper alternative if all-Apple home.', good: 'Best Apple alternative.' },
];

export default function SonosSetupGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sonos Setup Guide for Seniors | TekSure" description="Easy whole-home audio. Plain-English Sonos picks for senior homes + setup tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speaker className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sonos Setup Guide</h1>
          <p className="text-lg text-muted-foreground">Premium audio. Senior-friendly app.</p>
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
            <h2 className="font-bold text-xl mb-3">Why Sonos for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One app controls all speakers.</li>
              <li>Stream from Spotify, Apple Music, Amazon, Pandora.</li>
              <li>Whole-home audio — same song everywhere.</li>
              <li>Or different rooms = different music.</li>
              <li>Voice control (Alexa or Google).</li>
              <li>Dialogue mode for TV — hear shows clearly.</li>
              <li>Lasts 10+ years — software updates keep working.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start with one speaker</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t buy whole system at once.</li>
              <li>Era 100 in living room — most listening.</li>
              <li>Try for 2-3 months.</li>
              <li>Add Beam/Arc for TV if want better dialogue.</li>
              <li>Add Roam for outdoor/portable.</li>
              <li>Add bedroom speaker if liked.</li>
              <li>Build slowly — speakers connect automatically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Sonos app.</li>
              <li>Plug speaker in.</li>
              <li>App finds it automatically.</li>
              <li>Connect to WiFi.</li>
              <li>Run Trueplay tuning (walks you through, optimizes for room).</li>
              <li>Add music services — log in once.</li>
              <li>15 min total typical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TV soundbar = game-changer for hearing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sonos Beam / Arc with Speech Enhancement.</li>
              <li>Boosts dialogue clearly.</li>
              <li>Night mode reduces loud explosions.</li>
              <li>Many seniors with mild hearing loss love this.</li>
              <li>Cheaper alternative: Vizio M-Series soundbar ($250).</li>
              <li>Better than hearing aids for TV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cheaper alternatives</h3>
            <p className="text-sm text-muted-foreground"><strong>Echo Studio</strong> ($200) — Amazon&apos;s best speaker. <strong>Apple HomePod mini</strong> ($100) — small Apple speaker. <strong>JBL Charge 5</strong> ($180) — portable Bluetooth. Sonos worth premium for those who entertain or value sound — others fine with cheaper.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
