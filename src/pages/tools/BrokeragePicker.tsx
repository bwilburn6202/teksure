import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart } from 'lucide-react';

const PICKS = [
  { name: 'Vanguard', best: 'Best for "buy and hold" investors. Inventor of the index fund. Lowest fund expense ratios in the industry.', cons: 'Older, slower app. Phone support is hit-or-miss.' },
  { name: 'Fidelity', best: 'Best all-around. Excellent app, strong research, free phone support, free identity protection. Great for retirees.', cons: 'None major.' },
  { name: 'Charles Schwab', best: 'Best customer service. ATMs reimburse worldwide (free for international travelers). Strong research and education.', cons: 'Few — top pick for service-focused users.' },
  { name: 'TD Ameritrade (now Schwab)', best: 'Merged into Schwab in 2023. Existing accounts unchanged.', cons: 'Just use Schwab.' },
  { name: 'Robinhood', best: 'Sleek app. Free trades. Aggressive marketing.', cons: 'Designed to make trading addictive. Hidden costs in "payment for order flow". For investing, not for retirement.' },
  { name: 'E*TRADE', best: 'Solid old-school broker. Now owned by Morgan Stanley.', cons: 'Apps not as polished as Fidelity/Schwab.' },
  { name: 'Interactive Brokers', best: 'Best for active traders. Tightest spreads. Best international stock access.', cons: 'Complex for beginners.' },
];

export default function BrokeragePicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Brokerage Picker — Vanguard, Fidelity, Schwab | TekSure" description="Where to keep your retirement and investment accounts. Plain-English picks for the best brokerages — service vs. cost vs. tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LineChart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Brokerage Picker</h1>
          <p className="text-lg text-muted-foreground">Where your retirement money lives. Pick wisely.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">For most retirees</h2>
            <p className="text-sm">Pick ONE big broker (Vanguard, Fidelity, or Schwab) and consolidate. They\'re all SIPC-insured, all charge $0 commissions on stocks/ETFs, all offer help over the phone. You don\'t need accounts at three different places.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-sm mb-1"><strong>Best:</strong> {p.best}</p>
                <p className="text-sm text-muted-foreground"><strong>Cons:</strong> {p.cons}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Should you consolidate?</h2>
            <p className="text-sm mb-2">If you have accounts at 3-4 brokers from old jobs and IRA rollovers — consolidating to ONE saves headaches:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>One statement, one tax form.</li>
              <li>Easier RMD calculations.</li>
              <li>One login for spouse/heirs to learn.</li>
              <li>Sometimes better client tier (Fidelity Premium, Schwab Pinnacle) at higher balances.</li>
            </ul>
            <p className="text-sm mt-2">To consolidate: at the receiving broker, fill out an "ACAT transfer" form. Brokers move the assets in 5-10 days. No tax event for "in-kind" transfers.</p>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">A word of warning on advisor fees</h2>
            <p className="text-sm">If a "financial advisor" charges 1% of assets per year — on a $1M portfolio that\'s $10,000/year. Over 20 years of retirement: $200,000+ to that advisor. Often you can do better with a fee-only fiduciary (one-time $300-1000 plan) plus self-managing simple index funds.</p>
            <p className="text-sm mt-2">Fee-only fiduciaries: search NAPFA.org. Vanguard Personal Advisor at 0.30%/year is also popular and much cheaper than the typical advisor.</p>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">If you don\'t have a broker — open a free Schwab or Fidelity account. Both are excellent for retirees. Vanguard if you\'re happy holding a few index funds and don\'t need much hand-holding.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
