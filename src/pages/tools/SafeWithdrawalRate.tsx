import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Percent } from 'lucide-react';

export default function SafeWithdrawalRate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Safe Withdrawal Rate / 4% Rule | TekSure" description="How much can you safely spend each year in retirement without running out? The 4% rule, bucket strategy, and modern updates — plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Percent className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Safe Withdrawal Rate</h1>
          <p className="text-lg text-muted-foreground">How much can you spend each year without running out?</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The classic "4% rule"</h2>
            <p className="text-sm">From a famous 1994 study (Bengen). For a 30-year retirement, withdraw 4% of your initial portfolio in year 1, then adjust for inflation each year. Historically — high success rate.</p>
            <p className="text-sm mt-2">Example: $1,000,000 portfolio. Year 1: take $40,000. If inflation is 3%, year 2: $41,200.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Updated thinking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>3.3-3.7%</strong> may be safer for current low-yield environment, says Morningstar 2024.</li>
              <li><strong>5-5.5%</strong> may be okay if you start a "guard rails" plan — flex up/down based on market.</li>
              <li><strong>For longer retirements (40 years)</strong>, lower the starting rate to 3-3.5%.</li>
              <li><strong>Social Security delays</strong> let you withdraw more from portfolio early because larger SS check arrives later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bucket strategy — popular alternative</h2>
            <p className="text-sm mb-2">Split retirement money into 3 buckets:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bucket 1 (1-2 years of expenses)</strong> — cash + money market. Spend from this.</li>
              <li><strong>Bucket 2 (3-7 years)</strong> — bonds and bond funds. Refill bucket 1.</li>
              <li><strong>Bucket 3 (8+ years)</strong> — stocks. Long-term growth. Refill bucket 2.</li>
            </ul>
            <p className="text-sm mt-2">If stocks crash, you don\'t sell — you spend from buckets 1 and 2 while stocks recover.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Order of withdrawal — taxes matter</h2>
            <p className="text-sm">For a couple with traditional IRA + Roth IRA + taxable brokerage, conventional wisdom:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Spend taxable brokerage first (uses up old gains, makes room for withdrawals).</li>
              <li>Then Traditional IRA / 401(k) (forced withdrawals start at 73 anyway).</li>
              <li>Save Roth IRA for last (no RMDs, tax-free heir money).</li>
            </ol>
            <p className="text-sm mt-2">Real strategies are more nuanced — Roth conversions in 60s can save lots of tax later. Run by a fee-only advisor.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free tools</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Empower (free)</strong> — has retirement planner with Monte Carlo simulation.</li>
              <li><strong>Vanguard Retirement Planner</strong> — free for account holders.</li>
              <li><strong>Schwab Retirement Calculator</strong>.</li>
              <li><strong>Fidelity Retirement Score</strong>.</li>
              <li><strong>FIRECalc</strong> (firecalc.com) — historical simulation for any spending plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get a real plan</h3>
            <p className="text-sm text-muted-foreground">For decisions this big, pay a one-time fee-only fiduciary advisor ($1,000-3,000). They build a 30-year plan accounting for Social Security, inflation, taxes, RMDs, healthcare. Worth far more than the fee. Find at NAPFA.org.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
