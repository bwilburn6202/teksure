import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function HighYieldSavingsAndIBonds() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="High-Yield Savings & I Bonds — Make Your Cash Earn 4-5% | TekSure" description="Brick-and-mortar bank pays 0.05%? Online savings accounts pay 4-5%, FDIC-insured, instant transfers. Plus I Bonds explained. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">High-Yield Savings & I Bonds</h1>
          <p className="text-lg text-muted-foreground">Make your cash earn real money. Same FDIC protection.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">Your local bank pays 0.01-0.10% on savings. Online banks pay 4-5% — same FDIC insurance, same instant access. On $50,000 in savings, the difference is about $2,000/year. Pure profit for moving once.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best high-yield savings accounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ally Bank</strong> — best overall. Strong customer service, easy app. ~4-5% APY.</li>
              <li><strong>Marcus by Goldman Sachs</strong> — high rates, simple interface.</li>
              <li><strong>Discover Bank</strong> — competitive rates, integrated with Discover credit card.</li>
              <li><strong>SoFi</strong> — highest rates if you also direct-deposit.</li>
              <li><strong>Capital One 360</strong> — slightly lower rate but Capital One has physical branches.</li>
              <li><strong>American Express Personal Savings</strong> — solid rate.</li>
              <li><strong>Wealthfront Cash Account</strong> — high rate, FDIC-insured up to $8 million.</li>
            </ul>
            <p className="text-sm mt-3">All FDIC-insured up to $250,000. Same protection as Bank of America.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to open one</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Apply online at the bank\'s website (5-10 minutes). Need name, address, SSN, ID.</li>
              <li>Link your existing checking account.</li>
              <li>Transfer money — first transfer takes 2-3 days.</li>
              <li>You\'re done. Money earns interest.</li>
              <li>Withdrawals take 1-3 days to your regular bank — fine for emergency funds, retirement income, etc.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CDs (Certificates of Deposit)</h2>
            <p className="text-sm mb-2">Lock money for a fixed time, get higher rate. Often 4.5-5.5% for 6-12 month CDs. Same online banks above offer them.</p>
            <p className="text-sm">Penalty for early withdrawal — usually 3-6 months interest. Use only money you don\'t need access to.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Treasury I Bonds (savings bonds for inflation)</h2>
            <p className="text-sm mb-2">Government bonds that protect against inflation. Currently paying about 4-5%. Tax-deferred federally, tax-free for state.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Buy at <strong>treasurydirect.gov</strong> (the only place).</li>
              <li>Up to $10,000/year per person.</li>
              <li>Hold at least 1 year. Hold 5+ years for full interest.</li>
              <li>Best for an emergency fund or 5-year savings goal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Money market funds (in a brokerage)</h2>
            <p className="text-sm">If you have a brokerage account (Vanguard, Fidelity, Schwab) — keep cash in a money market fund. Currently paying 4.5-5%. Different from FDIC-insured savings, but extremely safe and pays a great rate.</p>
            <p className="text-sm mt-2">Examples: VMFXX (Vanguard), SPRXX (Fidelity), SWVXX (Schwab).</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick math</h3>
            <p className="text-sm text-muted-foreground">If you have $25,000+ in a regular savings account at 0.05% — moving to a 4.5% online account earns you ~$1,100/year in interest. Pure profit for 30 minutes of paperwork. The risk is exactly the same (both FDIC-insured up to $250k).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
