import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const FUNDS = [
  { name: 'Vanguard VTSAX / VTI', what: 'Total US Stock Market', cost: '0.04%', good: 'Owns ~4,000 US companies in one fund.' },
  { name: 'Vanguard VTIAX / VXUS', what: 'Total International Stock', cost: '0.07%', good: 'Owns ~8,000 non-US stocks.' },
  { name: 'Vanguard VBTLX / BND', what: 'Total US Bond Market', cost: '0.05%', good: 'Owns thousands of investment-grade bonds.' },
  { name: 'Vanguard VTWAX / VT', what: 'Total World Stock', cost: '0.10%', good: '"Set it and forget it" — entire world stock market in one fund.' },
  { name: 'Vanguard Target Retirement 2030 (or 2025/2035)', what: 'Auto-balanced for retirement year', cost: '0.08%', good: 'Adjusts as you age. The simplest possible portfolio.' },
  { name: 'Fidelity ZERO Total Market Index (FZROX)', what: 'Same as VTSAX, but ZERO expense ratio', cost: '0.00%', good: 'Free at Fidelity.' },
];

export default function IndexFundCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Index Fund Coach — Bogle Simple Investing | TekSure" description="The Bogleheads way: buy the whole market, hold forever, sleep well. Plain-English guide to index funds and why most investors should just use them." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Index Fund Coach</h1>
          <p className="text-lg text-muted-foreground">Beat 90% of professional investors. By doing nothing.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The Bogle revelation</h2>
            <p className="text-sm">John Bogle (Vanguard founder) proved that buying ALL stocks in the market — and holding them forever — beats almost every active fund manager. Why? Because most managers can\'t beat the market AFTER fees.</p>
            <p className="text-sm mt-2">A $10,000 investment in the S&P 500 in 1994 would be worth ~$200,000 today. Almost no one beat that.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top index funds (2025)</h2>
            <div className="space-y-3 text-sm">
              {FUNDS.map(f => (
                <div key={f.name} className="border-l-4 border-primary pl-3">
                  <p className="font-bold">{f.name}</p>
                  <p className="text-muted-foreground"><strong>Type:</strong> {f.what} • <strong>Fee:</strong> {f.cost}</p>
                  <p>{f.good}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Three-fund portfolio (Boglehead classic)</h2>
            <p className="text-sm mb-2">Most retirement portfolios can be built with 3 funds:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>60% US Total Stock (VTSAX/VTI)</strong>.</li>
              <li><strong>20% International Stock (VTIAX/VXUS)</strong>.</li>
              <li><strong>20% Bonds (VBTLX/BND)</strong>.</li>
            </ul>
            <p className="text-sm mt-2">Adjust ratios for your age:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Younger / aggressive — more stocks, less bonds (80/20).</li>
              <li>Closer to retirement / conservative — more bonds (60/40 or 50/50).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Even simpler — target-date fund</h2>
            <p className="text-sm">Pick a fund that matches your retirement year (Vanguard 2030, 2035, etc.). It auto-balances stocks and bonds for you. ONE fund covers everything.</p>
            <p className="text-sm mt-2">Examples: <strong>VFFVX (Vanguard 2025)</strong>, <strong>FXIFX (Fidelity 2025)</strong>, <strong>SWYJX (Schwab 2025)</strong>.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Funds with expense ratios over 0.5%.</li>
              <li>Front-loaded mutual funds (5% sales charge upfront).</li>
              <li>"Hot" sector funds (tech, AI, gold).</li>
              <li>Hedge funds.</li>
              <li>Variable annuities sold by insurance brokers.</li>
              <li>Individual stock picking with retirement money.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to learn more</h3>
            <p className="text-sm text-muted-foreground"><strong>Bogleheads.org</strong> — friendly forum with thousands of retirees discussing this. <strong>"The Little Book of Common Sense Investing" by John Bogle</strong> — 200 pages, life-changing. <strong>Reddit r/Bogleheads</strong> for community Q&A.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
