import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown } from 'lucide-react';

export default function TaxLossHarvesting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tax-Loss Harvesting Explained | TekSure" description="Sell losing investments to offset taxes. Plain-English guide for seniors with brokerage accounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingDown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tax-Loss Harvesting</h1>
          <p className="text-lg text-muted-foreground">Make losses pay tax savings.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <p className="text-sm">In your TAXABLE brokerage account, sell investments that LOST value. Use the loss to offset capital gains, OR up to $3,000/year against ordinary income. Buy similar (NOT identical) investment to maintain market exposure.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Example</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You sold a stock 2024 for $20K profit (gain).</li>
              <li>Another stock down 20% — $5K loss on paper.</li>
              <li>Sell losing stock → realize $5K loss.</li>
              <li>$20K gain - $5K loss = $15K taxable gain.</li>
              <li>Save 15-25% × $5K = $750-1,250 in taxes.</li>
              <li>Buy similar (NOT exact same) stock.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wash sale rule</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Can&apos;t buy SAME stock within 30 days BEFORE or AFTER sale (60-day window total).</li>
              <li>Disallowed sale loss.</li>
              <li>Solutions:</li>
              <li>Buy SIMILAR (S&amp;P 500 fund → total market fund).</li>
              <li>Wait 31 days to buy back.</li>
              <li>Auto-investments must be turned off in window.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You have TAXABLE brokerage (NOT IRA / 401k).</li>
              <li>Some investments have unrealized losses.</li>
              <li>You have either: capital gains to offset, OR working income.</li>
              <li>Best done DECEMBER for tax year.</li>
              <li>Not worth it on small accounts (under $50K typically).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto-harvest services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wealthfront / Betterment</strong> — robo-advisors auto-harvest. 0.25% fee.</li>
              <li><strong>Fidelity / Schwab tax-loss harvesting</strong> — included in some advisor services.</li>
              <li><strong>DIY</strong> — once a year, December review.</li>
              <li>Most helpful for accounts $100K+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t let tail wag dog</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t sell winners just to "harvest" — pays bigger taxes. Don&apos;t buy crappy investments just because they fit harvesting plan. Tax savings should follow good investing — not drive it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
