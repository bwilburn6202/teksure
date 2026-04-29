import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cog } from 'lucide-react';

const SVCS = [
  { name: 'AppliancePartsPros', cost: 'Varies, no shipping deals', best: 'Largest US appliance parts site. Type model, find part. Repair videos for each.', good: 'Best overall.' },
  { name: 'RepairClinic', cost: 'Varies', best: 'Same idea. Strong videos. Easy returns.', good: 'Best videos.' },
  { name: 'Sears PartsDirect', cost: 'Varies', best: 'Large catalog. Diagrams of every appliance. Genuine OEM parts.', good: 'Best diagrams.' },
  { name: 'Amazon (search part #)', cost: 'Often cheapest', best: 'Type model + part number. Often cheaper. Fast shipping.', good: 'Best price hunt.' },
  { name: 'eBay (search part #)', cost: 'Often discounted', best: 'New + used parts. Often discontinued parts only here.', good: 'Best for old parts.' },
];

export default function AppliancePartsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Appliance Parts Online — Save 50% | TekSure" description="Replace dishwasher, washer, fridge parts yourself. Plain-English picks for parts websites with video repair guides." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cog className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Appliance Parts Apps</h1>
          <p className="text-lg text-muted-foreground">Fix it yourself. Save $200+/repair.</p>
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
            <h2 className="font-bold text-xl mb-3">Find your model number</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Refrigerator</strong> — sticker inside on left wall or ceiling.</li>
              <li><strong>Dishwasher</strong> — inside top edge (open + look up).</li>
              <li><strong>Washer / dryer</strong> — top opening rim or back panel.</li>
              <li><strong>Stove / range</strong> — inside oven door, lift drawer.</li>
              <li><strong>Microwave</strong> — back of unit or inside door.</li>
              <li>Take photo. Type into parts website — gets exploded diagrams of every part.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy DIY appliance fixes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Refrigerator water filter — $30, swap in 5 min.</li>
              <li>Dishwasher spray arm clogged — pop off, rinse, reinstall.</li>
              <li>Washer hose replacement — $20, pinch + swap.</li>
              <li>Dryer thermal fuse — $15, blocked vent burns it. 30-min repair.</li>
              <li>Microwave fuse — $5, often kills it during power surge.</li>
              <li>Garbage disposal jam — Allen wrench in bottom socket, twist.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call a pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Compressor / sealed system on fridge or AC.</li>
              <li>Anything gas-related (stove, dryer, furnace).</li>
              <li>Inside an electric panel / hardwired electric.</li>
              <li>Repair cost over 50% of new appliance — replace instead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save warranty info</h3>
            <p className="text-sm text-muted-foreground">Snap photo of every appliance receipt + serial number. Save in a "Receipts" album in Photos. Many appliances have 1-10 year warranties. With proof, repair often free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
