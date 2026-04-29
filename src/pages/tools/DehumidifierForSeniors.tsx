import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

const PICKS = [
  { name: 'Frigidaire 50-pint', cost: '$280', best: 'Best mid-size. Reliable + Energy Star.', good: 'Best overall.' },
  { name: 'hOmeLabs 4500 sq ft', cost: '$280', best: 'Big basements. Senior favorite.', good: 'Best large.' },
  { name: 'GE Profile Smart', cost: '$330', best: 'WiFi + senior-friendly app.', good: 'Best smart.' },
  { name: 'Honeywell 30-pint', cost: '$200', best: 'Smaller spaces. Quieter.', good: 'Best for small rooms.' },
  { name: 'Eva-Dry Edv-1100', cost: '$30', best: 'Tiny rechargeable for closets.', good: 'Best mini.' },
];

export default function DehumidifierForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dehumidifier Picks for Seniors | TekSure" description="Stop basement mold + arthritis. Plain-English dehumidifier picks for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dehumidifier Picks</h1>
          <p className="text-lg text-muted-foreground">Healthy air. Less mold. Better breathing.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Less mold = better breathing.</li>
              <li>Reduces dust mite allergies.</li>
              <li>Eases arthritis pain (humidity worsens).</li>
              <li>Prevents wood damage to keepsakes.</li>
              <li>Damp basement smell = gone.</li>
              <li>Goal: 30-50% humidity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Basement</strong> — almost always needed.</li>
              <li><strong>Crawl space</strong> — prevents joint rot.</li>
              <li><strong>Bathroom</strong> — after showers.</li>
              <li><strong>Garage</strong> — protect tools/cars.</li>
              <li><strong>Closets</strong> — clothing protection.</li>
              <li><strong>Whole home</strong> — high-humidity climates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drainage options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bucket</strong> — empty 1-3x daily. Heavy when full!</li>
              <li><strong>Hose drain</strong> — gravity drain to floor drain.</li>
              <li><strong>Pump drain</strong> — push water uphill.</li>
              <li>Senior tip: Hose or pump = no lifting buckets.</li>
              <li>Worth $50 extra for hose-ready model.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save energy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Energy Star certified saves 20-30%.</li>
              <li>Run when needed (humidistat).</li>
              <li>Don&apos;t run if AC dehumidifies enough.</li>
              <li>Empty bucket = unit doesn&apos;t shut off.</li>
              <li>Costs $25-60/month if always-on.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When NOT needed</h3>
            <p className="text-sm text-muted-foreground">Dry climate (Phoenix, Denver) — humidifier needed instead. Test with cheap hygrometer ($10) first. If room consistently 30-50% humidity = no dehumidifier needed. Damp basements + humid summers = essential. Most homes need.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
