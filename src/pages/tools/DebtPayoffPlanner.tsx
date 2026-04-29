import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown } from 'lucide-react';

export default function DebtPayoffPlanner() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Debt Payoff Planner for Seniors | TekSure" description="Get out of credit card debt. Plain-English plan + tools. Snowball vs Avalanche method explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingDown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Debt Payoff Planner</h1>
          <p className="text-lg text-muted-foreground">Get out. Stay out.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">List all debts (5 min)</h2>
            <p className="text-sm">For each: balance, interest rate, minimum payment.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Credit cards.</li>
              <li>Personal loans.</li>
              <li>Medical bills.</li>
              <li>Car loan.</li>
              <li>HELOC.</li>
              <li>Student loans (yes, even at 65 — many parents have them).</li>
              <li>Mortgage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Snowball vs Avalanche</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Snowball</strong> — pay smallest first. Quick wins motivate. Best for emotional motivation.</li>
              <li><strong>Avalanche</strong> — pay highest-rate first. Saves more money. Best for math.</li>
              <li>Pick whichever you&apos;ll stick with — winning habit beats optimal math.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Undebt.it</strong> — free. Builds payoff timeline.</li>
              <li><strong>Debt Free Charts (printable)</strong> — color in as you pay off. Visual motivation.</li>
              <li><strong>Empower Debt Tracker</strong> — free.</li>
              <li><strong>Bankrate calculators</strong> — payoff timeline, balance transfer, debt consolidation.</li>
              <li><strong>NerdWallet free debt manager</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior debt tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Don&apos;t cash out 401k early</strong> — taxes + lost retirement. Last resort.</li>
              <li><strong>0% balance transfer cards</strong> — pay off before promo ends.</li>
              <li><strong>Personal loans (5-10% APR)</strong> often beat credit card rates (18-29%).</li>
              <li><strong>Negotiate medical debt</strong> — hospitals settle 30-60% off if you ask.</li>
              <li><strong>NEVER pay debt collectors before verifying debt</strong> — many scams.</li>
              <li><strong>Bankruptcy</strong> — last resort. Free legal aid for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AVOID debt-relief scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Debt forgiveness" + government loans = often lies.</li>
              <li>Stop-paying-creditors schemes hurt credit + may not work.</li>
              <li>Door-to-door = always scam.</li>
              <li>For-profit debt-settlement charges 15-25%, sometimes makes worse.</li>
              <li>USE: Free <strong>NFCC.org</strong> non-profit credit counseling.</li>
              <li>USE: Free legal aid for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free non-profit help</h3>
            <p className="text-sm text-muted-foreground"><strong>NFCC.org</strong> — National Foundation for Credit Counseling. Real non-profit. Free counseling. Can negotiate debt management plans with creditors. <strong>Money Management International</strong> — same thing. Avoid for-profit "debt relief" companies.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
