import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

const APPS = [
  { name: 'TuneIn Radio', cost: 'FREE / $10/mo Premium', best: 'Largest. 100,000+ stations. Local + worldwide. Senior-friendly UI.', good: 'Best overall.' },
  { name: 'iHeartRadio', cost: 'FREE / $5/mo Plus', best: 'Strong on US AM/FM stations. Podcasts.', good: 'Best for US radio.' },
  { name: 'NPR One', cost: 'FREE', best: 'Public radio + podcasts. Clean UI.', good: 'Best for NPR.' },
  { name: 'SiriusXM', cost: '$8-22/mo', best: 'Premium. Howard Stern + curated channels. Often free in new cars.', good: 'Best premium.' },
  { name: 'Pandora', cost: 'FREE / $5-10/mo', best: 'Music genome project. Discovers new music senior-friendly.', good: 'Best music discovery.' },
  { name: 'Apple Music Radio / Spotify Radio', cost: 'Included', best: 'Built-in radio in your music app.', good: 'Best with subscription.' },
];

export default function RadioApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Radio Apps for Seniors | TekSure" description="TuneIn, iHeartRadio, NPR One, SiriusXM. Plain-English picks for radio apps to listen to local + worldwide stations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Radio Apps</h1>
          <p className="text-lg text-muted-foreground">Old-school radio. Modern delivery.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why radio still wins for many</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local news + weather always.</li>
              <li>Sports — your home team always.</li>
              <li>No "now playing" guesswork — always something on.</li>
              <li>Talk show personality friends.</li>
              <li>Familiar — feels like home.</li>
              <li>Free everywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Listen via Echo / Google</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Alexa, play NPR" — instant national.</li>
              <li>"Alexa, play 89.7 FM" — your local station.</li>
              <li>"Hey Google, play classic rock radio."</li>
              <li>"Alexa, news" — quick news brief.</li>
              <li>Better than fiddling with radio dial in kitchen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Old-school radios still work</h3>
            <p className="text-sm text-muted-foreground">If you LOVE physical knobs — buy a tabletop radio (Sangean, Tivoli). $50-200. Sounds great. No app battle. Many include Bluetooth + AM/FM.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
