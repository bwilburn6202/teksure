import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home, AlertTriangle } from 'lucide-react';

export default function ReverseMortgageExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reverse Mortgage Explained — When It Helps, When It Hurts | TekSure" description="Tom Selleck on TV makes them sound great. The truth is more complicated. Plain-English guide to reverse mortgages — when they work and when they don&apos;t." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reverse Mortgage Explained</h1>
          <p className="text-lg text-muted-foreground">When it actually helps — and when it ruins families.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What it is</h2>
            <p className="text-sm">A loan against your home equity for homeowners 62+. The bank pays YOU (lump sum, monthly, or line of credit). You don\'t make payments. Loan + interest is repaid when you sell, move, or die.</p>
            <p className="text-sm mt-2">Most are FHA-insured "Home Equity Conversion Mortgages" (HECM).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real costs (not always advertised)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Origination fee</strong> — up to $6,000.</li>
              <li><strong>FHA mortgage insurance</strong> — 2% upfront + 0.5%/year of loan balance.</li>
              <li><strong>Interest rate</strong> — usually higher than regular mortgages.</li>
              <li><strong>Compounding</strong> — interest accrues on the growing balance, doubling debt every 8-12 years.</li>
              <li><strong>Property taxes, insurance, maintenance</strong> — you still pay these. Failure to pay = default = foreclosure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When a reverse mortgage CAN make sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You\'re 70+, paid-off home, plan to stay there until death.</li>
              <li>Home equity is your biggest asset and you have low retirement income.</li>
              <li>You want to delay Social Security, using a HECM line of credit as a bridge.</li>
              <li>Your spouse and you both 62+ are listed as co-borrowers.</li>
              <li>You don\'t care about leaving the house to heirs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">When it\'s a TRAP</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>You might move within 5 years (heavy upfront fees, bad ROI).</li>
                  <li>You can\'t afford property tax/insurance — you\'ll be foreclosed.</li>
                  <li>Spouse not on the loan — they may lose the house when you die.</li>
                  <li>You want to leave the house to children — usually consumes most or all of equity.</li>
                  <li>You\'re using it for risky investments (some salespeople push this).</li>
                  <li>Aggressive sales pitch with TV celebrity — go elsewhere.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Required counseling — get the most out of it</h2>
            <p className="text-sm">Federal law requires you to attend a free HUD-approved counseling session before getting a reverse mortgage. Treat it seriously. Bring a family member. Ask hard questions about long-term costs.</p>
            <p className="text-sm mt-2">Find a counselor at <strong>hud.gov</strong>.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives to consider first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Downsize</strong> — sell, buy smaller, pocket the cash. Often nets more than reverse mortgage.</li>
              <li><strong>HELOC</strong> — home equity line of credit. Cheaper but requires monthly payments.</li>
              <li><strong>Sell to family + lease back</strong> — child buys your house at fair value; you rent it back. Keeps the asset in family.</li>
              <li><strong>Property tax deferral</strong> — many states let seniors defer property tax until home is sold.</li>
              <li><strong>Cut expenses, increase income</strong> — part-time work, downsizing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Final word</h3>
            <p className="text-sm text-muted-foreground">Reverse mortgages aren\'t inherently bad — but they\'re very expensive and complicated. Talk to a fee-only fiduciary advisor BEFORE signing. Bring an adult child to every meeting. Don\'t sign in the first meeting.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
