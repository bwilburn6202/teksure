import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Service {
  name: string;
  cost: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const SERVICES: Service[] = [
  {
    name: 'EstateSales.net (find a local pro)',
    cost: '30-50% commission',
    whoFor: 'Whole-house cleanouts where a pro runs a 2-3 day sale on site.',
    pros: ['Largest directory of vetted estate-sale companies in the US.', 'Read reviews and past sale photos before you call.', 'The pro handles pricing, staffing, and shoppers.'],
    cons: ['Commission is steep — read the contract for minimums.', 'Quality varies by company; interview two or three.'],
    link: 'https://www.estatesales.net/',
  },
  {
    name: 'EverythingButTheHouse (online auction)',
    cost: 'Free pickup; commission on sales',
    whoFor: 'Out-of-state heirs who cannot run a sale in person.',
    pros: ['Crew packs and removes everything at no upfront cost.', 'Items sell via 7-day online auction starting at one dollar.', 'You receive a check after the sale closes.'],
    cons: ['Bids can land low — no reserve prices on most items.', 'Service area is limited to roughly 30 US metros.'],
    link: 'https://www.ebth.com/',
  },
  {
    name: 'Apple Notes Scan + Google Lens (DIY photos and value)',
    cost: 'Free',
    whoFor: 'Anyone cataloging items room by room before deciding what to do.',
    pros: ['Apple Notes Scan crops paperwork and receipts cleanly.', 'Google Lens identifies markings on china, art, and collectibles.', 'Builds a photo record for insurance and family.'],
    cons: ['Lens is a starting point — confirm value with a real appraisal.', 'Takes patience for a full house.'],
    link: 'https://lens.google/',
  },
  {
    name: 'Worthpoint (price-history database)',
    cost: '$30/month',
    whoFor: 'Homes with antiques, china, silver, or vintage collectibles.',
    pros: ['Searchable archive of 800 million past sales across eBay and auctions.', 'Shows real prices items actually sold for, not asking prices.', 'Cancel anytime after one month.'],
    cons: ['Subscription model — only worth it if you have many items.', 'Steeper learning curve than eBay.'],
    link: 'https://www.worthpoint.com/',
  },
  {
    name: 'eBay Sold-Listings (free price check)',
    cost: 'Free',
    whoFor: 'Quick price checks on common items before pricing your sale.',
    pros: ['Search the item, then filter to "Sold items" on the left.', 'Shows actual sale prices in the past 90 days.', 'No account needed for searching.'],
    cons: ['Coverage is thin for very rare or regional items.', 'Mobile filter is hidden under "Filter".'],
    link: 'https://www.ebay.com/',
  },
  {
    name: 'ItsDeductible by TurboTax (donation valuations)',
    cost: 'Free',
    whoFor: 'Anyone donating to Goodwill, Salvation Army, or a church for a tax deduction.',
    pros: ['IRS-accepted fair-market values for thousands of household items.', 'Tracks your donations across the year.', 'Imports straight into TurboTax at tax time.'],
    cons: ['You still need to keep the donation receipt from the charity.', 'Only meaningful if you itemize.'],
    link: 'https://itsdeductibleonline.intuit.com/',
  },
  {
    name: '1-800-GOT-JUNK and College HUNKS (haul-away)',
    cost: '$150-$800 per truckload',
    whoFor: 'The leftover stuff after the sale and donations — the unsellable third.',
    pros: ['Both apps quote a price before they load the truck.', 'College HUNKS often donates usable items on your behalf.', 'Same-day pickup in most US metros.'],
    cons: ['Pricing is by truck volume, not weight — they fill the space.', 'Get two quotes; the first is rarely cheapest.'],
    link: 'https://www.1800gotjunk.com/',
  },
];

export default function EstateSaleHelper() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Estate Sale Helper"
        description="Tech tools for estate sales and home cleanouts — pro services, DIY photo cataloging, pricing apps, donation valuations, and haul-away."
        path="/tools/estate-sale-helper"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Home className="h-8 w-8 text-amber-700 dark:text-amber-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Estate Sale Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Clearing a house after a move, downsize, or loss. Seven services compared in plain English.
            </p>
          </div>
        </section>
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Estate Sale Helper' }]} />
          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Three paths for clearing a home</p>
              <p className="text-xs text-muted-foreground mb-3">
                Path one — hire a professional estate-sale company to run the whole event for a 30-50 percent commission. Path two — do it yourself with phone photos, price-check apps, and a weekend yard sale. Path three — donate or auction online and let a hauler take the rest. Most families use a mix of all three. Start by walking room to room and tagging items into four buckets: keep, sell, donate, haul.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-4 mb-6">
            {(showAll ? SERVICES : SERVICES.slice(0, 3)).map(s => (
              <Card key={s.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{s.name}</p>
                    <Badge variant="outline">{s.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {s.whoFor}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {s.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {s.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>
                  <a href={s.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && <Button variant="outline" onClick={() => setShowAll(true)}>Show all 7 services</Button>}
          </div>
          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out for lowball buyers and "we buy estates" cold callers</p>
                <p className="mb-2">Once an obituary or probate filing goes public, the phone starts ringing. Strangers offer to buy "the whole house contents" for a flat thousand or two. They are betting your family has not checked what is actually there.</p>
                <ul className="space-y-1.5 mt-2">
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">·</span><span>Never accept a "today only" cash offer for contents you have not inventoried.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">·</span><span>Get a second opinion from a licensed appraiser before signing anything ($200-$500 is worth it).</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">·</span><span>"We buy estates" callers who refuse to put a written quote on letterhead are not legitimate.</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Before the sale — the digital cleanup</p>
              <p className="text-xs text-muted-foreground">
                Walk every drawer for paperwork: tax records, deeds, insurance policies, safe-deposit keys. Scan with Apple Notes or Adobe Scan before tossing anything. Wipe phones, tablets, and computers before they leave the house — see our Device Retirement Helper. Do not throw out address books, old letters, or photo albums until family has reviewed them.
              </p>
            </CardContent>
          </Card>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Close, memorialize, or transfer online accounts.</p>
              </Link>
              <Link to="/tools/sell-online-safely" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Sell Online Safely</p>
                <p className="text-xs text-muted-foreground mt-0.5">eBay, Facebook Marketplace, OfferUp without scams.</p>
              </Link>
              <Link to="/tools/device-retirement-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Retirement Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Wipe phones and computers before they leave.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: photograph every room from four corners before any item leaves. Your future self will want the record for insurance, taxes, and family memory.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
