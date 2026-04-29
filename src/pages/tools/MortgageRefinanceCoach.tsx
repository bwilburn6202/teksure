import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function MortgageRefinanceCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mortgage Refinance Coach — Should You Refinance? | TekSure" description="Rates dropped? Plain-English guide to whether refinancing makes sense, the math, and what to watch for." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mortgage Refinance Coach</h1>
          <p className="text-lg text-muted-foreground">Should you refinance? The math, in plain English.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">When refinancing makes sense</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Current rates are 0.75-1% LOWER than your existing rate AND you\'ll stay in the home 3+ more years.</li>
              <li>You can shorten loan term (30 → 15 year) and afford the higher payment.</li>
              <li>You want to drop PMI (private mortgage insurance).</li>
              <li>You have an adjustable-rate (ARM) and want to lock in a fixed rate.</li>
              <li>You need cash and have lots of equity (cash-out refinance).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When NOT to refinance</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Rate savings under 0.5%.</li>
              <li>You plan to sell in 2-3 years.</li>
              <li>Closing costs eat the savings.</li>
              <li>Resetting a mostly-paid mortgage to 30 years (you\'ll pay more interest over life of loan).</li>
              <li>Your credit score has dropped since the original mortgage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The math — break-even</h2>
            <p className="text-sm mb-2">Closing costs (typically $3,000-6,000) ÷ monthly savings = months to break even.</p>
            <p className="text-sm">Example: Save $200/month. Closing $4,000. Break even at month 20.</p>
            <p className="text-sm mt-2">If you\'ll stay past break-even by years — refinance is profitable.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to shop</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bankrate.com / NerdWallet</strong> — current rates by zip code.</li>
              <li><strong>Your existing lender</strong> — sometimes offers "streamline" refinance with lower closing costs.</li>
              <li><strong>Local credit union</strong> — often cheapest. NavyFed, USAA for military / families.</li>
              <li><strong>Better.com, Rocket, LoanDepot</strong> — online lenders, competitive rates.</li>
              <li>Get 3-4 quotes the SAME DAY (rates change daily).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch out for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"No closing cost" refis</strong> — the costs are rolled into the loan or a higher rate.</li>
              <li><strong>Cash-out refinance</strong> — fine for clear purposes, but don\'t refi to fund vacations.</li>
              <li><strong>Resetting a 30-year</strong> when you\'re 65 — you might pass before paid off, leaving heirs with the mortgage.</li>
              <li><strong>HELOC alternative</strong> — for cash, a HELOC may be cheaper than cash-out refi.</li>
              <li><strong>Appraisal fee</strong> — $400-600. Built into closing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For seniors specifically</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If close to paying off — DON\'T restart 30 years. Better: refi to remaining term (15-year, 10-year).</li>
              <li>If income is reduced — lower payment may help cash flow.</li>
              <li>Check VA loan refinance if veteran — usually lowest rate available.</li>
              <li>Reverse mortgage is NOT a refinance — different product entirely. (See our Reverse Mortgage Explained tool.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free tools</h3>
            <p className="text-sm text-muted-foreground"><strong>Bankrate refinance calculator</strong>, <strong>NerdWallet</strong>, or <strong>your bank\'s app</strong>. Plug in current loan + new rate. Tells you break-even and lifetime savings instantly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
