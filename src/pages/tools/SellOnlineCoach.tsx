import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

const PLATFORMS = [
  { name: 'Facebook Marketplace', cost: 'FREE to list', best: 'Big items, local pickup. Furniture, appliances, large household.', good: 'Free, local, easy.' },
  { name: 'eBay', cost: '~13% fee on sale', best: 'Collectibles, electronics, vintage, niche. National shipping.', good: 'Best for items worth $50+.' },
  { name: 'Poshmark', cost: 'Flat $2.95 (under $15) or 20% (over $15)', best: 'Clothing and accessories. Easy listing — they make shipping labels.', good: 'Best for clothes you\'ll actually sell.' },
  { name: 'Etsy', cost: '$0.20/listing + 6.5% fee', best: 'Handmade, vintage, craft supplies. Has a built-in audience for unusual items.', good: 'Best if you make things.' },
  { name: 'Mercari', cost: '~10% fee', best: 'Variety. Easier than eBay for casual sellers.', good: 'Free shipping label option.' },
  { name: 'Nextdoor', cost: 'FREE', best: 'Local only. Free things or community sales.', good: 'Best for "free, take it" items.' },
  { name: 'Decluttr', cost: 'Set price, no auction', best: 'Old phones, DVDs, books. Mail in, get a check. Lower price, zero hassle.', good: 'Best for stuff you don\'t want to bother selling.' },
];

export default function SellOnlineCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sell Online Coach — eBay, Poshmark, Marketplace | TekSure" description="Turn unused stuff into cash. Plain-English picks for the best place to sell each kind of item, with fees and effort honestly compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sell Online Coach</h1>
          <p className="text-lg text-muted-foreground">Turn closet stuff into spending money. The right place for each item.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PLATFORMS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 things every listing needs</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li><strong>Clear photos</strong> — daylight, plain background, multiple angles.</li>
              <li><strong>Honest description</strong> — note flaws clearly. "Small scratch on left side" beats a return.</li>
              <li><strong>Realistic price</strong> — search what similar items SOLD for (not what they\'re listed at).</li>
              <li><strong>Brand and model</strong> in the title — helps search.</li>
              <li><strong>Measurements</strong> for clothing or furniture.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams when selling</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cash for in-person pickup</strong> — best. Meet in public; bring a friend. (See our Marketplace Safety guide.)</li>
              <li><strong>Don\'t accept checks or money orders</strong> — almost always fake.</li>
              <li><strong>Use the platform\'s payment system</strong> — eBay, Poshmark, Mercari handle the money. Don\'t agree to "PayPal Friends and Family" with strangers.</li>
              <li><strong>Buyer wants you to ship to a different address</strong> — common fraud signal. Stick to the address they checked out with.</li>
              <li><strong>Don\'t share personal info</strong> beyond what the platform shows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax tip</h2>
            <p className="text-sm">If you sell over $5,000 (2024) or $600 (2025+ proposed) in a year, platforms send you a 1099-K. Personal items sold for less than you bought them aren\'t taxable, but you may still need to report. Save your selling records all year — date, item, sale price, what you originally paid.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground"><strong>Big items / furniture</strong> → Facebook Marketplace.<br /><strong>Old phones, DVDs, books</strong> → Decluttr.<br /><strong>Anything else worth $50+</strong> → eBay.<br /><strong>Clothes</strong> → Poshmark.<br /><strong>Free or low-value</strong> → Nextdoor "free" pile.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
