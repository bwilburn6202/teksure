import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const SVCS = [
  { name: 'SimpliSafe', cost: '$250-400 + $20-30/mo monitoring', best: 'DIY install. No contract. Senior favorite.', good: 'Best DIY.' },
  { name: 'Ring Alarm', cost: '$200-400 + $10-20/mo', best: 'Ring doorbell + cameras + alarm in one. Cheapest pro monitoring.', good: 'Best with cameras.' },
  { name: 'ADT', cost: '$600-1,500 + $40-60/mo', best: '150-year brand. Pro install. Long contract.', good: 'Best traditional.' },
  { name: 'Vivint', cost: '$700-2,000 + $50-100/mo', best: 'High-end smart home + security combo.', good: 'Best premium.' },
  { name: 'Wyze Home Monitoring', cost: '$100 + $5/mo', best: 'Cheapest with pro monitoring. Wyze ecosystem.', good: 'Best budget.' },
  { name: 'Local police + neighbor + dog', cost: 'FREE', best: 'Visible signs of life beat fancy systems for many.', good: 'Best free.' },
];

export default function HomeSecuritySystems() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Security Systems for Seniors | TekSure" description="SimpliSafe, Ring, ADT. Plain-English picks for senior-friendly home security. DIY vs pro install." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Security Systems</h1>
          <p className="text-lg text-muted-foreground">Real protection. Real options.</p>
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
            <h2 className="font-bold text-xl mb-3">Best parts for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medical alert button</strong> built into many systems — ADT, SimpliSafe.</li>
              <li><strong>Fall detection</strong> — additional sensor.</li>
              <li><strong>Smoke + CO monitoring</strong> — pro monitor calls fire if alarm sounds.</li>
              <li><strong>Door + window sensors</strong> — alert if open while armed.</li>
              <li><strong>Yard signs + window stickers</strong> — burglar deterrent alone reduces break-ins 60%.</li>
              <li><strong>Smart lights</strong> — fool away-attempt burglars.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip these gimmicks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Free" systems with 5-year contracts.</li>
              <li>Door-to-door sales — they pressure-sell + lock you in.</li>
              <li>"Smart locks" that fail when battery dies.</li>
              <li>Camera systems with $30/mo subscription if it&apos;s the only way to view recordings.</li>
              <li>Anyone who says "the police won&apos;t respond fast enough without us".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most-protective without spending</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lock doors. (60% of burglaries are unlocked doors.)</li>
              <li>Motion lights at all entrances.</li>
              <li>Trim shrubs by windows.</li>
              <li>Mail/newspaper hold when traveling.</li>
              <li>Light timer — looks lived-in.</li>
              <li>Don&apos;t share trip dates on Facebook.</li>
              <li>Fake "Beware of Dog" signs.</li>
              <li>Know your neighbors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance discount</h3>
            <p className="text-sm text-muted-foreground">Most homeowners insurance gives 5-20% discount for monitored security system. Document it. Often saves $200-500/year — partial payment for the system.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
