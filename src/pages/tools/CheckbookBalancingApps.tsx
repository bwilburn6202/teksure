import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

const APPS = [
  { name: 'Mint', cost: 'FREE / $5/mo', best: 'Auto-track all accounts.', good: 'Best comprehensive.' },
  { name: 'Personal Capital', cost: 'FREE', best: 'Net worth + investments.', good: 'Best wealth.' },
  { name: 'YNAB', cost: '$15/mo', best: 'Detailed budgeting.', good: 'Best detailed.' },
  { name: 'EveryDollar', cost: 'FREE', best: 'Dave Ramsey style.', good: 'Best simple.' },
  { name: 'Bank app', cost: 'FREE', best: 'Built-in checkbook register.', good: 'Best built-in.' },
];

export default function CheckbookBalancingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Checkbook Balancing Apps | TekSure" description="Modern checkbook balancing. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Checkbook Balancing</h1>
          <p className="text-lg text-muted-foreground">Apps replace old register.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why balance still matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Catch fraud quickly.</li>
              <li>Spot bank errors.</li>
              <li>Know real balance — avoid bounce.</li>
              <li>Track spending patterns.</li>
              <li>Tax records ready.</li>
              <li>Caregiver oversight signs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: bank app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Already have account.</li>
              <li>Real-time updates.</li>
              <li>Sees pending charges.</li>
              <li>Shows running balance.</li>
              <li>Search transactions easily.</li>
              <li>No extra app needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Modern balancing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open bank app weekly.</li>
              <li>Review every transaction.</li>
              <li>Look for unfamiliar charges.</li>
              <li>Note recurring auto-payments.</li>
              <li>Compare against receipts.</li>
              <li>Report any unauthorized.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Old paper register OK</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Paper still works.</li>
              <li>Combine with bank app.</li>
              <li>Best for some seniors.</li>
              <li>Tactile + reassuring.</li>
              <li>No tech failure risk.</li>
              <li>Just compare to bank statement monthly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Catch fraud fast</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set up text alerts on charges.</li>
              <li>Above $50 — alert.</li>
              <li>Foreign transactions — alert.</li>
              <li>Online purchases — alert.</li>
              <li>Federal Reg E — 60-day report rule.</li>
              <li>Faster reporting = better recovery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family transparency</h3>
            <p className="text-sm text-muted-foreground">Some seniors give &quot;view-only&quot; bank app access to adult child. Watches for unusual activity. Catches fraud faster. Doesn&apos;t allow them to spend. AARP recommends. Mint can be shared with family. Trusted family member as backup. Empowering, not intrusive.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
