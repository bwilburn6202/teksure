import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

const PICKS = [
  { name: 'AirPods (4th gen)', price: '$129', best: 'iPhone users — instant pairing, hands-free Siri. Open style (no rubber tip), good for talking on calls.', cons: 'Open fit means people near you can hear what\'s playing. Not for noisy gym/airports.' },
  { name: 'AirPods Pro 2', price: '$249', best: 'Best AirPods. Active noise cancellation. NEW: also work as basic hearing aids — boost voices in noisy rooms.', cons: 'Pricey. The hearing-aid feature needs an iPhone.' },
  { name: 'Beats Solo Buds', price: '$80', best: 'Cheapest decent earbuds that work well with both iPhone and Android. Long battery life.', cons: 'No noise cancellation.' },
  { name: 'Samsung Galaxy Buds 2 / 3', price: '$130-180', best: 'Best for Samsung phone owners. Tight integration. Clear calls.', cons: 'Some find the bean-shape less comfortable.' },
  { name: 'Sony WF-1000XM5', price: '$300', best: 'Audiophile pick. Best noise cancellation in earbuds. Works with all phones.', cons: 'Expensive. App is a little fiddly.' },
  { name: 'JBL Tune Buds', price: '$50', best: 'Budget pick. 80% of the experience for 30% of the price.', cons: 'Battery only lasts 4-5 hours.' },
  { name: 'Bose QuietComfort Earbuds', price: '$180-280', best: 'Best comfort, great noise cancellation. Many find Bose more comfortable than AirPods Pro.', cons: 'Slightly bulkier.' },
];

export default function WirelessEarbudPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wireless Earbuds Picker — AirPods, Beats, Samsung, Sony | TekSure" description="Plain-English earbud picks. Hearing-aid features, noise cancellation, and which work with iPhone vs Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wireless Earbud Picker</h1>
          <p className="text-lg text-muted-foreground">No more tangled cords. Right pair for the right purpose.</p>
        </div>

        <div className="space-y-3">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1"><strong>Best for:</strong> {p.best}</p>
                <p className="text-sm text-muted-foreground"><strong>Watch out:</strong> {p.cons}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🦻 Earbuds as hearing aids (yes, really)</h2>
            <p className="text-sm mb-2"><strong>AirPods Pro 2 with iOS 18+</strong> are FDA-approved as over-the-counter hearing aids for mild-to-moderate hearing loss.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Settings → Accessibility → Hearing → Hearing Aid Mode.</li>
              <li>Take the included Apple hearing test.</li>
              <li>AirPods adjust to your hearing profile.</li>
              <li>"Live Listen" — turn on, then place iPhone near the speaker (across the table at dinner). AirPods amplify the sound.</li>
            </ol>
            <p className="text-sm mt-2 bg-muted/50 p-3 rounded">$249 vs $2,000-$5,000 for traditional hearing aids. For mild hearing loss, this is a real game-changer.</p>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for buying</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Match your phone — AirPods truly shine on iPhone; Galaxy Buds on Samsung.</li>
              <li>Try them in store. Apple Store and Best Buy let you test.</li>
              <li>Black Friday and Prime Day usually have $30-50 off AirPods.</li>
              <li>Check Apple\'s Certified Refurbished — same warranty, $30+ off.</li>
              <li>Don\'t lose them — Apple\'s Find My works with AirPods. Use it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Earbud or over-ear?</h3>
            <p className="text-sm text-muted-foreground">Over-ear headphones (Sony WH-1000XM5, Bose QuietComfort, Apple AirPods Max) sound better and last longer per charge but are bulkier. Worth it for long flights and home listening; earbuds win for everyday use, walks, and travel.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
