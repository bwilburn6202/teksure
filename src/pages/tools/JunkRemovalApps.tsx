import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

const SVCS = [
  { name: '1-800-Got-Junk', cost: '$200-700/load', best: 'Most reliable. Two-person crews. Schedule online. National.', good: 'Best overall.' },
  { name: 'College Hunks Hauling Junk', cost: '$200-700', best: 'Same idea. Often slightly cheaper. Donations to charities.', good: 'Best charity-focused.' },
  { name: 'LoadUp', cost: '$100-500', best: 'Tech-forward, online quotes, often cheaper.', good: 'Best for online quote.' },
  { name: 'Local + Craigslist haulers', cost: '$50-200', best: 'Cheapest if available. Verify insurance + references.', good: 'Best budget.' },
  { name: 'Town bulk pickup', cost: 'FREE-$50', best: 'Most cities offer 1-2 free bulk pickups/year. Check your city.', good: 'Best free.' },
  { name: 'Habitat ReStore', cost: 'FREE pickup', best: 'Free pickup of furniture, appliances, building materials. Tax deduction.', good: 'Best for usable items.' },
];

export default function JunkRemovalApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Junk Removal Services | TekSure" description="1-800-Got-Junk vs alternatives. Plain-English picks for clearing out senior homes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trash2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Junk Removal Services</h1>
          <p className="text-lg text-muted-foreground">Clear it out. Move on.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use each</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Few items, lightweight</strong> — Town bulk pickup or thrift donation.</li>
              <li><strong>Furniture in OK condition</strong> — Habitat ReStore (free pickup).</li>
              <li><strong>1-2 truckloads</strong> — Junk removal company.</li>
              <li><strong>Whole house clean-out</strong> — full-service estate sale company OR Junk Removal big crew.</li>
              <li><strong>Rent dumpster</strong> — bigster cleanouts. $300-700 for a roll-off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hazardous items</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Paint, batteries, electronics</strong> — local hazmat day OR Best Buy / Lowes recycling.</li>
              <li><strong>Mattresses</strong> — extra fee, some cities free.</li>
              <li><strong>Tires</strong> — drop at tire shop, $5-10 each.</li>
              <li><strong>Old TVs</strong> — Best Buy charges $30 to recycle.</li>
              <li><strong>Refrigerators</strong> — utility may pay $50 to take old ones (energy efficiency program).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior estate cleanouts</h3>
            <p className="text-sm text-muted-foreground">Many junk removal companies have "senior estate" specialty crews. Lifetime accumulation = bigger emotional weight than just stuff. Find compassionate removers — interview before hiring.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
