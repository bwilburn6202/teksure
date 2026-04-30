import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const PICKS = [
  { name: 'AARP / The Hartford', cost: 'Varies', best: 'AARP partnership. Senior-specific. Lifetime renewal guarantee.', good: 'Best AARP.' },
  { name: 'GEICO 50+ discount', cost: 'Varies', best: 'Often cheapest with senior discount. Strong customer service.', good: 'Best price.' },
  { name: 'USAA', cost: 'Varies', best: 'Veterans + family. Often best rates + service.', good: 'Best for vets.' },
  { name: 'State Farm', cost: 'Varies', best: 'Local agents. Helpful at-fault claim handling.', good: 'Best for in-person.' },
  { name: 'Liberty Mutual + AARP', cost: 'Varies', best: 'AARP discount via Liberty Mutual. RightTrack discount option.', good: 'Best for safe drivers.' },
];

export default function AutoInsuranceSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Insurance for Seniors — Discounts | TekSure" description="GEICO 50+, AARP, Hartford. Plain-English picks for senior auto insurance + 5-10% safe-driver discount tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Auto Insurance</h1>
          <p className="text-lg text-muted-foreground">Save $300-500/year.</p>
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
            <h2 className="font-bold text-xl mb-3">Save 10-25% with these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior discount (50+)</strong> — most insurers.</li>
              <li><strong>Defensive driver / refresher course</strong> — 5-15%, 3-year discount.</li>
              <li><strong>Multi-policy bundle</strong> (home + auto) — 15-25%.</li>
              <li><strong>Low-mileage</strong> — drive under 7,500 miles/year.</li>
              <li><strong>Telematics device</strong> (Snapshot, Drivewise) — saves 10-30% if you drive safely.</li>
              <li><strong>Pay annual</strong> instead of monthly.</li>
              <li><strong>Higher deductible</strong> — $1,000 vs $500 saves 10%.</li>
              <li><strong>Anti-theft + safety features</strong> on car.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shop every 1-2 years</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Get 3 quotes online — Geico, Progressive, State Farm.</li>
              <li>Compare same coverage limits.</li>
              <li>Mention your current insurer&apos;s rate — they often beat it.</li>
              <li>Ask about EVERY discount.</li>
              <li>Insurance loyalty rarely pays — switching saves $100-500/year.</li>
              <li>Insurify, Compare.com — free comparison sites.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific concerns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cancellation after age</strong> — illegal age-based denial. Some insurers raise rates instead.</li>
              <li><strong>Cognitive decline disclosure</strong> — required for some states. Talk to insurance agent.</li>
              <li><strong>Hartford has lifetime renewal guarantee</strong> via AARP — won&apos;t drop you for age alone.</li>
              <li><strong>Pay-per-mile (Metromile)</strong> — great if you drive less than 5,000/yr.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Drop comprehensive on old cars</h3>
            <p className="text-sm text-muted-foreground">If your car is 10+ years old + worth under $5,000 — drop comprehensive + collision coverage. Premium savings exceed value of car. Keep liability + UM. Check current value at kbb.com.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
