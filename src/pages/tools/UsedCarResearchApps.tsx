import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const APPS = [
  { name: 'Carfax / AutoCheck', cost: '$45/report or $100/3 months unlimited', best: 'Vehicle history reports — accidents, owners, mileage history, recalls, service records.', good: 'Free if a dealer offers it; many do.' },
  { name: 'Kelley Blue Book (KBB)', cost: 'FREE', best: 'See market value of any car. Fair purchase price + trade-in value.', good: 'Bring KBB on your phone to negotiations.' },
  { name: 'Edmunds', cost: 'FREE', best: 'Reviews, ratings, true price ranges. Strong ownership cost calculator (gas + insurance + repairs).', good: 'Best reviews of new and used.' },
  { name: 'AutoTrader / Cars.com', cost: 'FREE', best: 'Biggest classified listings. Filter by year, mileage, distance.', good: 'Both have apps and websites.' },
  { name: 'CarGurus', cost: 'FREE', best: '"Great Deal" / "Fair Deal" / "High Price" tags. Tells you if a listing is overpriced for the market.', good: 'Most useful for spotting deals.' },
  { name: 'NADA Guides', cost: 'FREE', best: 'Used by lenders for loan amounts. Sometimes higher value than KBB — useful when negotiating with the bank.', good: 'Always check both KBB and NADA.' },
  { name: 'NHTSA Recalls (free)', cost: 'FREE', best: 'Type the VIN at nhtsa.gov to see all open recalls.', good: 'Always check before buying.' },
];

export default function UsedCarResearchApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Used Car Research Apps — Carfax, KBB, Edmunds | TekSure" description="Buying a used car? Plain-English guide to vehicle history, market price, and recall checks. Don&apos;t buy without these." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Used Car Research Apps</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t buy a used car without checking these.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-purchase checklist</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>VIN check</strong> — copy the VIN from the dashboard. Run on Carfax / NHTSA recalls.</li>
              <li><strong>KBB and NADA values</strong> — what should this car cost? Don\'t pay over Fair Market.</li>
              <li><strong>Edmunds ownership cost</strong> — gas, repairs, insurance, depreciation over 5 years.</li>
              <li><strong>Independent mechanic inspection</strong> — $80-150. Money well spent. Catches problems sellers hide.</li>
              <li><strong>Title check</strong> — make sure it\'s a clean title, not salvage / rebuilt / flood.</li>
              <li><strong>Test drive 30 minutes minimum</strong> — highway, city, parking, hills.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Listed price way below market — "if it\'s too good to be true...".</li>
              <li>Seller refuses inspection.</li>
              <li>Pressure to buy fast.</li>
              <li>Only accepts cash, wire transfer, or strange payment.</li>
              <li>Out-of-state seller wanting you to wire money.</li>
              <li>"Salvage", "rebuilt", or "flood" title — usually means major damage history.</li>
              <li>Engine warning lights, even briefly.</li>
              <li>Fluid leaks under the car.</li>
              <li>Burning smell or unusual noises during test drive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best places to buy</h3>
            <p className="text-sm text-muted-foreground"><strong>Certified Pre-Owned</strong> from a dealer of the same brand — most scrutinized, often comes with extended warranty. <strong>CarMax / Carvana</strong> — no haggling but might pay 5-10% more for the convenience. <strong>Private party</strong> — usually cheapest if you do all the homework above. Tax-wise: private sales avoid dealer fees but you owe tax through DMV.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
