import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

const STORES = [
  { name: 'eBay', cost: 'FREE to use', best: 'The biggest. Anything you can imagine. Buyer protection on most listings.', good: 'Best overall.' },
  { name: 'ThredUP', cost: 'FREE to use', best: 'Used clothing — name brands. Curated. Easy to filter by size.', good: 'Best for clothing.' },
  { name: 'Poshmark', cost: 'FREE to use', best: 'Clothing/accessories from individuals. Bargain by offering lower price.', good: 'Best for fashion.' },
  { name: 'Mercari', cost: 'FREE to use', best: 'Easier than eBay. Big variety. Senior-friendly app.', good: 'Best for beginners.' },
  { name: 'Facebook Marketplace', cost: 'FREE to use', best: 'Local pickup. Furniture, large items. NO buyer protection — meet in safe places.', good: 'Best local.' },
  { name: 'OfferUp', cost: 'FREE to use', best: 'Like Facebook Marketplace. Cleaner app.', good: 'Best clean local app.' },
  { name: 'eBay Refurbished', cost: 'FREE to use', best: 'Manufacturer-refurbished electronics with warranty. Apple, Samsung, Bose.', good: 'Best for tech.' },
];

export default function OnlineThriftStores() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Thrift Stores Compared | TekSure" description="eBay, ThredUP, Poshmark, Mercari. Plain-English picks for buying secondhand online safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Thrift Stores</h1>
          <p className="text-lg text-muted-foreground">Save money. Save the planet.</p>
        </div>

        <div className="space-y-3 mb-6">
          {STORES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buying tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Check seller rating</strong> — 98%+ positive feedback. Recent reviews matter most.</li>
              <li><strong>Read return policy BEFORE buying.</strong></li>
              <li><strong>Pay with credit card or PayPal Goods &amp; Services</strong> — buyer protection.</li>
              <li><strong>NEVER pay by Zelle/Venmo/Cash App on eBay/Mercari</strong> — no protection.</li>
              <li><strong>Read all photos</strong> — sellers must disclose flaws. If they didn&apos;t, that&apos;s grounds for refund.</li>
              <li><strong>Ask questions</strong> — message seller before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Selling — clean out your house</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>eBay</strong> — best for collectibles, electronics, anything mainstream.</li>
              <li><strong>Poshmark / ThredUP</strong> — clothes.</li>
              <li><strong>Facebook Marketplace</strong> — furniture, big items locally (no shipping).</li>
              <li><strong>Mercari</strong> — easier listing process for beginners.</li>
              <li><strong>Books, CDs, DVDs</strong> — sell to Decluttr or Bookscouter — instant offer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety for local pickups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Meet in PUBLIC place during DAY — bank parking lot, police station "exchange zone".</li>
              <li>Bring a friend.</li>
              <li>Cash only. No checks. No "I&apos;ll Venmo you later."</li>
              <li>Don&apos;t share home address until pickup confirmed.</li>
              <li>Trust your gut. If feels off, walk away.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Donate the rest</h3>
            <p className="text-sm text-muted-foreground">Anything that wouldn&apos;t sell for $20+ is usually not worth your time. Goodwill, Salvation Army, Habitat ReStore take most things. Get a tax-deductible receipt. Saves time and helps charity. Worth less aggravation than haggling over a $5 item.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
