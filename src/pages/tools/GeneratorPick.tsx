import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const PICKS = [
  { name: 'Whole-house Generac Guardian (24kw)', price: '$5,000-7,000 + install $5-10k', best: 'Auto-starts when grid fails. Powers entire home. Natural gas or propane.', good: 'Best for hurricane/winter storm areas.' },
  { name: 'Kohler 26RCAL (whole-house)', price: '$5,000-8,000 + install', best: 'Premium alternative. Quieter.', good: 'Premium pick.' },
  { name: 'Champion 100485 (portable, 8500W)', price: '$1,000-1,500', best: 'Great mid-range portable. Runs essentials (fridge, lights, furnace) for hours.', good: 'Best portable value.' },
  { name: 'EcoFlow Delta Pro (battery)', price: '$3,500-5,000', best: 'Big battery + solar option. Whisper quiet. No gas.', good: 'Best battery option.' },
  { name: 'Honda EU2200i (small portable)', price: '$1,200', best: 'Whisper quiet. Reliable. Best small inverter generator.', good: 'Best for camping + emergency.' },
  { name: 'Predator from Harbor Freight', price: '$500-1,200', best: 'Cheapest reliable portable. Honda clone.', good: 'Budget pick.' },
];

export default function GeneratorPick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Generator Picker — Whole-House, Portable, Battery | TekSure" description="Power outages can last days. Plain-English picks for whole-house generators, portables, and modern battery alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Generator Picker</h1>
          <p className="text-lg text-muted-foreground">From $500 portable to $15,000 whole-house auto.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Match to need</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Few outages a year, no medical equipment</strong> → portable ($500-1,500).</li>
              <li><strong>Frequent outages, medical equipment, refrigerator critical</strong> → whole-house ($10-15k).</li>
              <li><strong>No gas, low maintenance</strong> → battery (EcoFlow / Bluetti).</li>
            </ul>
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
            <h2 className="font-bold text-xl mb-3">Whole-house — what to know</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Auto-start</strong> within 10-30 seconds of outage.</li>
              <li><strong>Natural gas (preferred)</strong> — never run out.</li>
              <li><strong>Propane</strong> — bigger tank fills longer outages.</li>
              <li><strong>Permit + electrician + concrete pad</strong> — install adds $5-10k.</li>
              <li><strong>Maintenance</strong> — annual oil change ($200/yr).</li>
              <li><strong>Insurance discount</strong> — many homeowners insurers offer 5-10% off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Portable safety</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>NEVER run a portable generator in or near garage or porch</strong>. CO kills.</li>
              <li>20 feet from any window/door.</li>
              <li>Keep dry — covered shelter open on sides.</li>
              <li>Use proper extension cords (rated for outdoor + amperage).</li>
              <li>Transfer switch installed by electrician = safer than running cords.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Critical for medical needs</h3>
            <p className="text-sm text-muted-foreground">If you use CPAP, oxygen concentrator, dialysis, or insulin (refrigerated): a whole-house generator OR battery system is genuinely life-protecting. Some Medicare Advantage and disability programs partially fund medically-necessary backup power.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
