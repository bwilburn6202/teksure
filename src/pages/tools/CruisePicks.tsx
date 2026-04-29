import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Anchor } from 'lucide-react';

const LINES = [
  { name: 'Holland America', cost: '$100-300/day', best: 'Senior favorite. Mid-size ships. Classic, less-crazy. Strong dining.', good: 'Best for traditional seniors.' },
  { name: 'Princess Cruises', cost: '$100-300/day', best: 'MedallionClass tech, mid-size ships. Senior-friendly excursions.', good: 'Best with smart tech.' },
  { name: 'Viking Ocean', cost: '$300-500/day', best: 'Adults-only. Smaller ships. Cultural focus. NO kids onboard.', good: 'Best premium.' },
  { name: 'Royal Caribbean', cost: '$80-300/day', best: 'Big-ship variety. Family + kids. Lots of shows + activities.', good: 'Best for grandkids trips.' },
  { name: 'Norwegian (NCL)', cost: '$80-300/day', best: '"Freestyle" — eat anytime. No formal nights. Less stuffy.', good: 'Best for casual cruisers.' },
  { name: 'Carnival', cost: '$60-200/day', best: 'Cheapest mainstream. Family-focused. Party atmosphere.', good: 'Best budget.' },
  { name: 'Disney Cruise Line', cost: '$200-500/day', best: 'Multi-generation trips. Best service. Magical for grandkids.', good: 'Best with grandkids.' },
];

export default function CruisePicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cruise Line Picks for Seniors | TekSure" description="Holland America, Viking, Princess, Royal Caribbean. Plain-English picks for the best cruise lines for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Anchor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cruise Picks</h1>
          <p className="text-lg text-muted-foreground">Match the right line to YOU.</p>
        </div>

        <div className="space-y-3 mb-6">
          {LINES.map(l => (
            <Card key={l.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{l.name}</h3>
                  <span className="text-sm font-semibold text-primary">{l.cost}</span>
                </div>
                <p className="text-sm">{l.best}</p>
                <p className="text-sm text-muted-foreground">{l.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mid-size ships</strong> (1,500-2,500 passengers) = sweet spot. Big enough for variety, small enough to navigate.</li>
              <li><strong>Mid-ship cabins</strong> = least motion sickness.</li>
              <li><strong>Balcony rooms</strong> = worth the $200 upgrade.</li>
              <li><strong>Late dining (8 PM)</strong> = less crowded, better service.</li>
              <li><strong>Avoid spring break weeks</strong> + summer school holidays for fewer kids.</li>
              <li><strong>Embark a day early</strong> — flight delays don&apos;t miss boat.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best destinations for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Caribbean</strong> — short, cheap, easy. First-timer favorite.</li>
              <li><strong>Alaska</strong> — scenic, cool weather, gentler ports.</li>
              <li><strong>Mediterranean</strong> — Italy, Greece, Spain. Cultural.</li>
              <li><strong>Northern Europe / Baltic</strong> — Stockholm, St. Petersburg, Copenhagen.</li>
              <li><strong>River cruises</strong> (Viking, AMA, Avalon) — Rhine, Danube, Mekong. Senior gold-standard.</li>
              <li><strong>Avoid</strong> — Mexican Riviera (party), Galapagos (rough seas).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Book 12-18 months ahead for best cabins.</li>
              <li>Costco Travel — cash card + onboard credit. Same price as cruise line.</li>
              <li>Last-minute deals 30-60 days out (if cabins still open).</li>
              <li>Repositioning cruises (one-way) — half price, longer.</li>
              <li>Senior + AARP discounts — ASK at booking.</li>
              <li>Travel insurance — REQUIRED for cruises. See /tools/travel-insurance-reality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First-time tip</h3>
            <p className="text-sm text-muted-foreground">First cruise — pick 7-night Caribbean from Florida. Direct flights cheap, ship docks daily, easy ports. Holland America Eurodam or Princess Caribbean Princess are senior-perfect picks. Test-cruise before committing to longer voyages.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
