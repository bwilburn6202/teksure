import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

const PICKS = [
  { name: 'SimpliSafe', cost: '$300-700 + $20-30/mo', best: 'Easiest DIY install. No contract. Works with cellular if power/internet out. Most senior-friendly.', good: 'Best overall.' },
  { name: 'Ring Alarm', cost: '$200-500 + $20/mo', best: 'Pairs with Ring doorbell + cameras. Cheapest professional monitoring.', good: 'Best if you have Ring already.' },
  { name: 'Abode', cost: '$280-450 + $20-30/mo', best: 'Works with Apple HomeKit + Alexa + Google. Optional pro monitoring.', good: 'Best for smart-home integration.' },
  { name: 'ADT', cost: '$400-1,500 + $40-60/mo + 36 month contract', best: 'Old-school, professional install. Most reputation.', good: 'Worst price-to-features. Avoid contracts.' },
  { name: 'Vivint', cost: '$1,000-2,500 + $40-60/mo', best: 'High-end professional install with smart home.', good: 'Premium, locked into contract.' },
  { name: 'Wyze Home Monitoring', cost: '$60 + $5/mo', best: 'Cheapest "real" monitoring. Limited features.', good: 'Best ultra-budget option.' },
];

export default function HomeSecuritySystemPick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Security System Picker — SimpliSafe, Ring, ADT | TekSure" description="DIY or professional install. Plain-English picks for home security systems with honest pricing and contract warnings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Security System</h1>
          <p className="text-lg text-muted-foreground">DIY easy install. No 36-month contracts.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">DIY vs pro</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>DIY (SimpliSafe, Ring, Abode)</strong> — $300-700 once. Self-install in 30 min. No contracts. Cancel monitoring anytime.</li>
              <li><strong>Professional (ADT, Vivint)</strong> — high-pressure sales, 36-60 month contracts. Hard to cancel. Don\'t recommend unless very specific need.</li>
            </ul>
          </CardContent>
        </Card>

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
            <h2 className="font-bold text-xl mb-3">What to include</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Base station with cellular backup.</li>
              <li>Door/window sensors on EVERY accessible door + bottom-floor windows.</li>
              <li>Motion sensor in the main living area.</li>
              <li>Smart smoke + CO detector connected to alarm — calls fire dept automatically.</li>
              <li>Outdoor + indoor camera — see what triggered alarm.</li>
              <li>Yard sign + window stickers — biggest deterrent of all.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Monitoring — yes or no?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>WITH professional monitoring</strong> ($20-30/mo): Police dispatched on confirmed break-in. Required for insurance discount.</li>
              <li><strong>WITHOUT</strong>: Alarm sounds + you get a phone alert. You decide whether to call 911. Saves $250-360/year.</li>
              <li><strong>Insurance discount</strong>: 5-20% off homeowners with monitored system. Often pays for monitoring.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For frugal seniors</h3>
            <p className="text-sm text-muted-foreground"><strong>Ring Alarm 8-piece kit ($199) + Ring Doorbell ($100) + 1 outdoor cam ($100) + $10/mo monitoring</strong> = full coverage, no contract, less than $30/month forever. Hard to beat.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
