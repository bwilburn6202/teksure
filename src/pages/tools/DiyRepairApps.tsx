import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

const RESOURCES = [
  { name: 'YouTube', cost: 'FREE', best: 'Search "[appliance brand model] not heating" or whatever. Step-by-step videos for every imaginable repair.', good: 'Best free repair resource ever invented.' },
  { name: 'iFixit', cost: 'FREE', best: 'Best phone, laptop, tablet, appliance repair guides. Sells parts + tools.', good: 'Best for electronics + small devices.' },
  { name: 'RepairClinic', cost: 'FREE diagnostics; sells parts', best: 'Symptom-based diagnosis for appliances. Plain-English what\'s wrong + how to fix.', good: 'Best for big appliances.' },
  { name: 'AppliancePartsPros', cost: 'FREE diagnostics; sells parts', best: 'Same idea, sometimes cheaper parts.', good: 'Compare to RepairClinic.' },
  { name: 'YouTube channels: Bob & Brad PT, Engineer775, This Old House', cost: 'FREE', best: 'Specific channels for body issues, off-grid, and home repair.', good: 'Top-tier expert content.' },
  { name: 'Reddit r/HomeImprovement, r/Plumbing, r/Electricians', cost: 'FREE', best: 'Photo your issue. Real pros chime in.', good: 'For real diagnosis on tough issues.' },
];

export default function DiyRepairApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DIY Repair Apps & Sites — YouTube, iFixit, RepairClinic | TekSure" description="Save thousands on appliance, plumbing, and small home repairs. Plain-English guide to free DIY resources that actually work." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">DIY Repair Apps</h1>
          <p className="text-lg text-muted-foreground">YouTube + a few sites = save thousands on repairs.</p>
        </div>

        <div className="space-y-3 mb-6">
          {RESOURCES.map(r => (
            <Card key={r.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{r.name}</h3>
                  <span className="text-sm font-semibold text-primary">{r.cost}</span>
                </div>
                <p className="text-sm">{r.best}</p>
                <p className="text-sm text-muted-foreground">{r.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY worth attempting</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Replace a toilet flapper or fill valve ($5 + 30 min).</li>
              <li>Unclog a drain (snake $15, plunger $10).</li>
              <li>Replace a refrigerator water filter.</li>
              <li>Fix a running toilet.</li>
              <li>Replace a doorknob or deadbolt.</li>
              <li>Caulk a tub or window.</li>
              <li>Tighten a faucet.</li>
              <li>Replace washer hoses (every 5-7 years).</li>
              <li>Battery in a smoke detector.</li>
              <li>Lightbulb in any fixture.</li>
              <li>HVAC filter (every 1-3 months).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Get a pro for</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Anything gas (water heaters, gas stove, furnace).</li>
              <li>Major electrical (panel, new circuits).</li>
              <li>Roof repairs (fall risk).</li>
              <li>Tree felling.</li>
              <li>Septic.</li>
              <li>Refrigerant work in HVAC.</li>
              <li>Anything where mistakes cost a lot more than the labor saved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When you\'re unsure</h3>
            <p className="text-sm text-muted-foreground">Try DIY for 30 minutes. If you\'re not making progress — STOP, call a pro. The hours you save sometimes cost more than the pro would have. Knowing your limits is wisdom.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
