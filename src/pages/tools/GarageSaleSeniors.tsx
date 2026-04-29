import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function GarageSaleSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Garage Sale Guide for Seniors | TekSure" description="Run a low-stress garage sale. Plain-English step-by-step for seniors decluttering." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garage Sale for Seniors</h1>
          <p className="text-lg text-muted-foreground">Low-stress way to clear stuff + earn $200-1,000.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2 weeks before</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sort items: SELL, DONATE, KEEP, TRASH.</li>
              <li>Test electronics — buyers want working items.</li>
              <li>Wash clothes/linens.</li>
              <li>Get permit if your town requires (most don&apos;t for 1-day sales).</li>
              <li>Recruit 1-2 family/friend helpers.</li>
              <li>Pick date — Saturday 8am-2pm classic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clothes: $1-3.</li>
              <li>Books: $0.50-2.</li>
              <li>Small kitchen items: $1-5.</li>
              <li>Furniture: 10-20% of new price.</li>
              <li>Use round numbers — $1, $5, $10. No $1.25.</li>
              <li>Color-coded stickers — $1 yellow, $2 blue, $5 green.</li>
              <li>Big items get individual prices.</li>
              <li>Be willing to negotiate — &quot;everything&apos;s a deal.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Advertise</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Facebook Marketplace</strong> — free + reaches your area.</li>
              <li><strong>Craigslist</strong> — &quot;garage sales&quot; section.</li>
              <li><strong>Nextdoor</strong> — neighbors first.</li>
              <li><strong>Yard signs</strong> — at major intersections (remove after).</li>
              <li>Take photos of best 3-5 items for online ads.</li>
              <li>List address, dates, hours, &quot;cash only&quot; or Venmo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sale day setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$50 in small bills + change for till.</li>
              <li>Folding tables — borrow from friends.</li>
              <li>Lock house door + keep money close.</li>
              <li>Have water, snacks, sunscreen ready.</li>
              <li>Chair to sit on (long day).</li>
              <li>Phone for taking Venmo/Zelle.</li>
              <li>Bags for buyers (reuse grocery bags).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives to garage sale</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Facebook Marketplace</strong> — sell items individually.</li>
              <li><strong>Craigslist</strong> — bigger items.</li>
              <li><strong>OfferUp</strong> — local quick sales.</li>
              <li><strong>Estate sale company</strong> — they run, take 30-40%.</li>
              <li><strong>Donation</strong> — Goodwill, Salvation Army with pickup.</li>
              <li><strong>Buy Nothing groups</strong> — give free, build goodwill.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">After the sale</h3>
            <p className="text-sm text-muted-foreground">Donate leftovers same day or next — don&apos;t bring stuff back inside. Goodwill, Salvation Army, Habitat ReStore (furniture), Vietnam Vets pick up free. Get receipt for tax deduction. Sale day = NEW START.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
