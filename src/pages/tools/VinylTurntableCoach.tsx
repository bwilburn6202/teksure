import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Disc } from 'lucide-react';

const PICKS = [
  { name: 'Audio-Technica AT-LP60X / LP120X', price: '$200-400', best: 'Best beginner-friendly turntable. Belt drive, good sound, no surprises.', good: 'Most recommended starter.' },
  { name: 'U-Turn Orbit Plus', price: '$400-650', best: 'Made in USA, audiophile-friendly. Upgradable.', good: 'Best craft option.' },
  { name: 'Pro-Ject T1', price: '$400', best: 'Austrian build. Premium feel, great sound.', good: 'Premium beginner.' },
  { name: 'Crosley Cruiser', price: '$60-100', best: 'Cheapest. Suitcase style. WARNING: damages records over time.', good: 'Skip — long-term ruins your collection.' },
  { name: 'Victrola wireless turntable', price: '$80-150', best: 'Cute, Bluetooth-out. Damages records like Crosley.', good: 'Skip if you care about records.' },
  { name: 'Fluance RT-series', price: '$300-700', best: 'Mid-range Canadian-designed. Great for serious listeners.', good: 'Solid mid-range.' },
];

export default function VinylTurntableCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vinyl Record & Turntable Coach | TekSure" description="Rediscover the joy of vinyl. Plain-English picks for turntables, what NOT to buy, and how to set one up with modern speakers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Disc className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vinyl Turntable Coach</h1>
          <p className="text-lg text-muted-foreground">Records you saved from the 70s? Time to rediscover.</p>
        </div>

        <Card className="mb-6 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">⚠️ Skip the cheap "suitcase" turntables</h2>
            <p className="text-sm">Crosley, Victrola, "1byone" cheap suitcase-style players have heavy needles that damage records. Each play wears the record more. After 50 plays, your treasured 1973 Stevie Wonder LP is unwearable.</p>
            <p className="text-sm mt-2">Spend at least $200 on a real turntable. Otherwise, you\'re destroying value.</p>
          </CardContent>
        </Card>

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
            <h2 className="font-bold text-xl mb-3">Connect to speakers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Powered speakers (Audioengine A2+, Edifier R1280T)</strong> — connect turntable directly. ~$200-400.</li>
              <li><strong>Vintage receiver + speakers</strong> — find at thrift stores, often great quality $50-100.</li>
              <li><strong>Bluetooth turntable + Sonos</strong> — many newer turntables have Bluetooth out.</li>
              <li><strong>Powered subwoofer</strong> for fuller sound — $150-300.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Caring for records</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Always handle by edges, never the surface.</li>
              <li>Clean before each play — record cleaning brush ($15) or LP cleaning kit ($30).</li>
              <li>Store vertically, never stacked.</li>
              <li>Replace stylus every 1,000-2,000 hours of play (~1-3 years for typical use).</li>
              <li>Keep away from heat, sunlight, humidity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buying records</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Discogs.com</strong> — global record marketplace. Almost any album you remember.</li>
              <li><strong>Local record stores</strong> — find at recordstoreday.com.</li>
              <li><strong>Thrift stores</strong> — good for finding 60s/70s albums cheap.</li>
              <li><strong>Estate sales / yard sales</strong> — most underrated source.</li>
              <li><strong>Avoid eBay</strong> for valuable records — Discogs has better grading and seller ratings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Recommended starter setup</h3>
            <p className="text-sm text-muted-foreground"><strong>Audio-Technica AT-LP60X-BT</strong> ($200) + <strong>Edifier R1280T powered speakers</strong> ($130). Total $330. Plays vinyl like your dad\'s setup did. Bluetooth-pair to phone for digital backup.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
