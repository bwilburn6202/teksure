import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

const BANKS = [
  { name: 'Ally Bank', cost: '4.20% APY (2025)', best: 'Best-known online bank. No fees, no minimums. Easy app. 24/7 phone support.', good: 'Best overall.' },
  { name: 'Marcus by Goldman Sachs', cost: '4.40% APY', best: 'Backed by Goldman Sachs. Slightly higher rate. Simple website.', good: 'Best rate.' },
  { name: 'Discover Online Savings', cost: '4.00% APY', best: 'Same Discover that does credit cards. Good integrated app.', good: 'Best if you have Discover card.' },
  { name: 'Capital One 360 Performance Savings', cost: '4.00% APY', best: 'Capital One brand. Has physical Cafés in major cities. Free ATM at Capital One.', good: 'Best with branches.' },
  { name: 'CIT Bank Platinum Savings', cost: '4.55% APY (with $5K min)', best: 'Highest rate (with minimum balance). FDIC insured.', good: 'Best for $5K+ savers.' },
  { name: 'Vanguard Cash Plus', cost: '4.60% APY', best: 'Tied to Vanguard brokerage. SIPC + FDIC. Best if you invest with Vanguard.', good: 'Best for investors.' },
];

export default function HighYieldSavingsPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="High Yield Savings Accounts (HYSA) | TekSure" description="Big bank pays 0.01%. Online banks pay 4-5%. Plain-English picks for high-yield savings accounts that are FDIC insured." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">High-Yield Savings (HYSA)</h1>
          <p className="text-lg text-muted-foreground">Earn $400/year on $10K instead of $1.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick math</h2>
            <p className="text-sm">$10,000 sitting in Bank of America savings = $1/year (0.01% APY). Same $10,000 in Ally Bank = $420/year. Most people leave $300-500/year on the table because they&apos;ve never moved their savings.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {BANKS.map(b => (
            <Card key={b.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{b.name}</h3>
                  <span className="text-sm font-semibold text-primary">{b.cost}</span>
                </div>
                <p className="text-sm">{b.best}</p>
                <p className="text-sm text-muted-foreground">{b.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Are these safe?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YES — all FDIC insured up to $250,000</strong> per person per bank.</li>
              <li>Same protection as Bank of America, Chase, Wells Fargo.</li>
              <li>Online-only banks save money on branches → pass savings to you in higher rates.</li>
              <li>If bank ever fails, FDIC pays you within 1-2 business days.</li>
              <li>Don&apos;t exceed $250K at any single bank.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to open one</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick a bank (Ally is most senior-friendly).</li>
              <li>Go to bank&apos;s website. Click "Open an Account".</li>
              <li>Fill in name, address, SSN, email, phone.</li>
              <li>Link to existing checking account at any bank.</li>
              <li>Bank verifies via 2 small "test" deposits ($0.04 + $0.07).</li>
              <li>Confirm amounts back. Done.</li>
              <li>Transfer money in. Earns interest immediately.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Keep checking at your old bank</h2>
            <p className="text-sm">Don&apos;t move your CHECKING — keep that at your local bank. HYSA is just for savings. Transfers between them take 1-3 days. Set up auto-transfer monthly to "save without thinking".</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Watch the rate</h3>
            <p className="text-sm text-muted-foreground">High-yield rates change with Fed rates. 4.5% today, could be 3% next year, 5% the year after. Check rates every 6 months. Switching banks is annoying but possible. Or just open a CD if rates start dropping (locks rate for 6-24 months).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
