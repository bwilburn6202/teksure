import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

export default function CDTreasuryHighYield() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CDs vs Treasuries vs HYSA | TekSure" description="Where to park cash safely. Plain-English guide to CDs, Treasuries, high-yield savings for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Banknote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CDs vs Treasuries vs HYSA</h1>
          <p className="text-lg text-muted-foreground">Safe places to earn 4%+ on cash.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">High-Yield Savings (HYSA)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most flexible. Withdraw anytime.</li>
              <li>Currently 4-5% APY.</li>
              <li><strong>Marcus by Goldman Sachs</strong>, <strong>Ally</strong>, <strong>SoFi</strong>, <strong>Discover</strong> — all good.</li>
              <li>FDIC-insured up to $250K.</li>
              <li>Best for emergency fund + short-term cash.</li>
              <li>Rate changes with Fed decisions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CDs (Certificates of Deposit)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lock money for 3 months to 5 years.</li>
              <li>Locked rate — won&apos;t drop.</li>
              <li>Currently 4-5% for 1-yr CDs.</li>
              <li>Penalty for early withdrawal (3-12 months interest).</li>
              <li>FDIC-insured up to $250K.</li>
              <li>Brokered CDs (via Fidelity/Schwab) — no penalty if sold on secondary market.</li>
              <li>Senior favorite for predictable income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Treasuries</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backed by US government — safest.</li>
              <li><strong>T-Bills</strong> — 4 weeks to 1 year. 4-5%.</li>
              <li><strong>T-Notes</strong> — 2-10 years. 4-5%.</li>
              <li><strong>I-Bonds</strong> — 30 yrs, inflation-protected. ~3-4% currently.</li>
              <li><strong>TIPS</strong> — Treasury Inflation Protected Securities.</li>
              <li>NO state income tax (big benefit in CA, NY).</li>
              <li>Buy at TreasuryDirect.gov or via brokerage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Money Market Funds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>At brokerages — Fidelity SPAXX, Vanguard VMFXX.</li>
              <li>Currently 4-5% APY.</li>
              <li>Withdraw anytime.</li>
              <li>NOT FDIC-insured (rare to lose money but possible).</li>
              <li>Government MMFs safest.</li>
              <li>Convenient at brokerage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CD Ladder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Split money across 1-yr, 2-yr, 3-yr, 4-yr, 5-yr CDs.</li>
              <li>Each year, one matures — reinvest at then-current rates.</li>
              <li>Liquidity + locked rates.</li>
              <li>Most rate-environment-proof strategy.</li>
              <li>Senior favorite for predictable cash flow.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tax tip</h3>
            <p className="text-sm text-muted-foreground">Treasuries = no state income tax (big in high-tax states like CA, NY, NJ). CDs/HYSA = state + federal tax. In Roth IRA = tax-free everywhere. In Traditional IRA = tax-deferred. For taxable accounts, Treasuries often better than CDs after tax for high-tax-state residents.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
