import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

const APPS = [
  { name: 'Monarch Money', cost: '$15/month', best: 'Most popular Mint replacement. Connects to bank accounts, credit cards, retirement. Beautiful dashboards.', good: 'Net worth tracking. Goals. Couples can share.' },
  { name: 'Rocket Money (formerly Truebill)', cost: 'Free version + $4-12/month premium', best: 'Cancels unwanted subscriptions for you. Negotiates lower bills. The "what am I paying for?" app.', good: 'Free version is fine for tracking spending.' },
  { name: 'Copilot', cost: '$13/month, iPhone only', best: 'Smartest auto-categorization. Best for someone who wants to see where money actually goes without manual tagging.', good: 'Free trial.' },
  { name: 'YNAB (You Need A Budget)', cost: '$15/month', best: 'For people who want hands-on budget control. Every dollar gets a job. Steeper learning curve, big results.', good: '34-day free trial.' },
  { name: 'Empower (free) — formerly Personal Capital', cost: 'Free', best: 'Best for retirement and net-worth tracking. Free retirement calculators. They want you to use their advisors but you don\'t have to.', good: 'No cost. Strong fee analyzer for 401(k)s and IRAs.' },
  { name: 'EveryDollar (Dave Ramsey)', cost: 'Free basic, $18/month for premium', best: 'Zero-based budgeting in plain English. Good for the Dave Ramsey approach.', good: 'Free version works for manual tracking.' },
];

export default function BudgetAppPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Budget App Picker — Mint Closed, Now What? | TekSure" description="Mint shut down. Monarch, Rocket Money, Copilot, YNAB, Empower — which is right for you? Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Budget App Picker</h1>
          <p className="text-lg text-muted-foreground">Pick the right app for tracking spending and planning savings.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What changed</h2>
            <p className="text-sm">Mint (free, popular for 15 years) shut down in 2024. Several apps stepped in. Most charge a monthly fee — but for tracking $50,000+ in retirement and credit cards, $10-15/month often pays for itself in spotted errors and saved subscriptions.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-2"><strong>Best for:</strong> {a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you want totally free</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Empower</strong> — best free option for tracking everything in one place.</li>
              <li><strong>EveryDollar Free</strong> — manual entry but works.</li>
              <li><strong>Your bank's app</strong> — Chase, Bank of America, Wells Fargo all have spending breakdowns built in.</li>
              <li><strong>A spreadsheet</strong> — old-fashioned but free. Google Sheets has free templates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Security worry?</h2>
            <p className="text-sm">All these apps use Plaid (or similar) to connect to your bank — read-only. They can SEE transactions but cannot move money. Still, set up two-factor on your bank, never share login codes, and use unique passwords.</p>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">If you don't know where your money goes — start with Rocket Money's free version. It surfaces every subscription you're paying for. Most users find $20-50/month to cancel right away.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
