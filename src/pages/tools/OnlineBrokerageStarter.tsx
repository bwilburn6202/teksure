import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const PICKS = [
  { name: 'Fidelity', cost: 'FREE', best: 'Best for seniors. No fees. Real customer service phone.', good: 'Best overall.' },
  { name: 'Charles Schwab', cost: 'FREE', best: 'Tied with Fidelity. Branches nationwide.', good: 'Best with branches.' },
  { name: 'Vanguard', cost: 'FREE', best: 'Lowest-cost index funds. Simple website.', good: 'Best index funds.' },
  { name: 'TD Ameritrade (Schwab)', cost: 'FREE', best: 'Now part of Schwab. Same access.', good: 'Best for traders.' },
  { name: 'Robinhood', cost: 'FREE', best: 'Simple app — but bare bones support.', good: 'Best mobile.' },
];

export default function OnlineBrokerageStarter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Brokerage for Seniors | TekSure" description="Open + use a brokerage account safely. Plain-English guide for senior investing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Brokerage Starter</h1>
          <p className="text-lg text-muted-foreground">Take control of your investing.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior-friendly choices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fidelity</strong> = best overall. Free. Real phone support. Great for seniors.</li>
              <li><strong>Schwab</strong> = comparable. Has physical branches.</li>
              <li><strong>Vanguard</strong> = simple. Lowest fund costs.</li>
              <li>All 3 = stock trades FREE.</li>
              <li>All 3 = thousands of mutual funds + ETFs.</li>
              <li>Avoid app-only brokerages without phone support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What account to open</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Brokerage</strong> — taxable. Fully flexible.</li>
              <li><strong>Roth IRA</strong> — tax-free growth (income limits).</li>
              <li><strong>Traditional IRA</strong> — tax-deferred (RMDs at 73).</li>
              <li><strong>Rollover IRA</strong> — for old 401(k)s.</li>
              <li>Don&apos;t have to choose 1 — open multiple.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Simple senior portfolio</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50-60% bonds (stability) — VTBLX, FXNAX.</li>
              <li>30-40% US stocks — VTI, FZROX.</li>
              <li>10% international stocks — VXUS, FZILX.</li>
              <li>Or: ONE target-date retirement fund — auto-balances.</li>
              <li>Boring is good. Don&apos;t day-trade.</li>
              <li>Rebalance annually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Open account safely</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type fidelity.com (or schwab.com) directly — never through email.</li>
              <li>Strong unique password.</li>
              <li>2-factor authentication ON.</li>
              <li>Link bank account via direct connection.</li>
              <li>SIPC protected up to $500K.</li>
              <li>Add trusted contact (POA) — they can&apos;t trade but can verify identity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free advisor option</h3>
            <p className="text-sm text-muted-foreground">Fidelity + Schwab offer FREE consultations with advisors over $25K balance. Help with retirement planning, RMDs, withdrawal strategy. No commission — they&apos;re salaried. Better than fee-based advisor for most seniors. Vanguard PAS = 0.30% for managed account if want hands-off.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
