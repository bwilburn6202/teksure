import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';

const APPS = [
  { name: 'PSA Card App', cost: 'FREE', best: 'Photo a card → get population data, certified prices.', good: 'Best for sports cards.' },
  { name: 'Beckett', cost: 'FREE app, paid pricing', best: 'Sports card pricing standard for 50 years.', good: 'Most authoritative.' },
  { name: 'eBay sold listings', cost: 'FREE', best: 'Real recent prices for any card.', good: 'Best for genuine market price.' },
  { name: '130point.com', cost: 'FREE', best: 'Aggregates eBay sold prices.', good: 'Quick lookup tool.' },
  { name: 'GoCollect (comics)', cost: 'Free; Premium', best: 'Comic book pricing + market data.', good: 'Best comic resource.' },
  { name: 'Heritage Auctions', cost: 'Free archives', best: 'Past auction prices for high-end.', good: 'For certified gems.' },
  { name: 'CGC, PSA, BGS', cost: '$30-200 grading', best: 'Authentication + grading. Required for $500+ value.', good: 'Send graded for high-value items.' },
];

export default function SportsCardsComics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sports Cards & Comic Books — Pricing & Selling | TekSure" description="That box of 1980s baseball cards in the attic? Plain-English guide to identifying valuable cards and selling them properly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScrollText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sports Cards & Comics</h1>
          <p className="text-lg text-muted-foreground">Boxes in the attic. Worth millions or pocket change?</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honest truth — sports cards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Junk wax era (1986-1992)</strong> — produced in huge numbers. Most worth 10 cents each.</li>
              <li><strong>Pre-1980 cards</strong> — much rarer, worth checking carefully.</li>
              <li><strong>Rookie cards of HOF players in mint condition</strong> — can be valuable.</li>
              <li><strong>Modern (2010+)</strong> — only "rare parallels", autographs, relics matter.</li>
              <li>If your collection is mostly 1986-1992 — be prepared for disappointment. Selling whole "boxes" gets you $5-20 typically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honest truth — comics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pre-1965 (Golden + Silver Age)</strong> — most valuable.</li>
              <li><strong>Bronze/Copper Age (1970s-1985)</strong> — variable value. Key issues + first appearances valuable.</li>
              <li><strong>Modern (1986+)</strong> — overprinted. Most worth cover price.</li>
              <li><strong>Condition is everything</strong> — even rare books in poor shape sell for fraction.</li>
              <li>Don\'t rely on Overstreet Price Guide alone — eBay sold listings tell the real story.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to grade (CGC / PSA)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Card / comic looks pristine.</li>
              <li>Raw value at least $100+.</li>
              <li>You\'re willing to wait 3-12 months for return.</li>
              <li>Cost: $20-200 per item.</li>
              <li>Graded items typically sell for 2-10x ungraded.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to sell</h3>
            <p className="text-sm text-muted-foreground"><strong>High-value certified</strong>: Heritage Auctions, PWCC. <strong>Mid-range</strong>: eBay. <strong>Bulk lots</strong>: card shops will buy at 30-40% of retail. <strong>Unsure</strong>: post photos in Reddit r/baseballcards or r/comicbookcollecting — kind communities help identify value.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
