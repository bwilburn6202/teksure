import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

const TOOLS = [
  { name: 'Empower (Personal Capital)', cost: 'FREE', best: 'Connects to all your accounts. Real-time net worth, retirement projection. The best free tool, period.', good: 'Best overall.' },
  { name: 'Boldin (NewRetirement)', cost: 'FREE / $120/year Premium', best: 'Most detailed retirement modeling. Tax planning, Roth conversion, Social Security strategy.', good: 'Best for serious planners.' },
  { name: 'Fidelity Retirement Score', cost: 'FREE', best: 'Quick check — am I on track? Color-coded scoring. Don&apos;t need a Fidelity account.', good: 'Best 5-minute check.' },
  { name: 'Vanguard Retirement Income Calculator', cost: 'FREE', best: 'Simple, conservative projections. Best aligned with Vanguard&apos;s "stay the course" philosophy.', good: 'Best simple.' },
  { name: 'Social Security Quick Calculator', cost: 'FREE', best: 'Official SSA estimator. Plug in earnings → see monthly benefit at age 62, 67, 70.', good: 'Best for SS estimate.' },
  { name: 'Bogleheads Forum + Wiki', cost: 'FREE', best: 'Not a calculator — a community. Free advice from retired financial pros.', good: 'Best for free advice.' },
];

export default function RetirementCalculatorPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Calculator Picks — Free | TekSure" description="The best free retirement calculators. Plain-English picks for figuring out if you&apos;re on track without a $200/hour advisor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Calculators</h1>
          <p className="text-lg text-muted-foreground">Are you on track? Free tools say yes/no.</p>
        </div>

        <div className="space-y-3 mb-6">
          {TOOLS.map(t => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-sm font-semibold text-primary">{t.cost}</span>
                </div>
                <p className="text-sm">{t.best}</p>
                <p className="text-sm text-muted-foreground">{t.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Rule-of-thumb numbers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>4% rule</strong> — withdraw 4% of nest egg yearly. Lasts 30+ years (most cases). $1M = $40,000/year.</li>
              <li><strong>25× expenses</strong> — multiply yearly spending by 25. $50K/year × 25 = $1.25M nest egg target.</li>
              <li><strong>Social Security</strong> — average benefit $1,975/month (2025). Wait until 67-70 for higher.</li>
              <li><strong>Healthcare in retirement</strong> — Fidelity estimates $165,000 per couple lifetime (over Medicare).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Numbers to gather</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Total saved (401k + IRA + brokerage + cash).</li>
              <li>Monthly expenses (Mint, Copilot, or just bank statement).</li>
              <li>Your Social Security estimate (ssa.gov).</li>
              <li>Pension (if any) monthly amount.</li>
              <li>Other income — rental property, part-time, etc.</li>
              <li>Current age and target retirement age.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to see a real advisor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$1M+ saved with complex situation (multiple accounts, real estate, business).</li>
              <li>Considering Roth conversions.</li>
              <li>Trying to reduce taxes in retirement.</li>
              <li>Estate planning + trust questions.</li>
              <li>Use ONLY a fee-only fiduciary — search at <strong>NAPFA.org</strong> or <strong>letsmakeaplan.org</strong>.</li>
              <li>NEVER an "advisor" who sells annuities or works on commission.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help — AARP and SHIP</h3>
            <p className="text-sm text-muted-foreground"><strong>AARP Foundation Tax-Aide</strong> — free retirement tax help for 50+ regardless of AARP membership. <strong>SHIP</strong> (State Health Insurance Assistance Program) — free Medicare counseling. Both free, both excellent.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
