import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tag, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface DiscountCategory {
  name: string;
  ageRule: string;
  bestFor: string;
  examples: string[];
  notes: string[];
  link: string;
}

const CATEGORIES: DiscountCategory[] = [
  {
    name: 'AARP Membership (the big one)',
    ageRule: '50+ — spouse included free',
    bestFor: 'The single best-value discount card in the country. $16/year covers thousands of partner offers.',
    examples: [
      'Up to 20% off hotels (Hilton, Best Western, Wyndham, Marriott via partners).',
      'Restaurant deals (Outback, Bonefish, Carrabba\'s, Denny\'s 15% off).',
      'Car rental — Avis 30% off, Budget 30% off, Hertz 20% off.',
      'AT&T wireless 10% off, vision/dental insurance discounts, prescription savings.',
      'Free AARP Members app shows offers near you with one tap.',
    ],
    notes: [
      'Real cost is $16/year at aarp.org — never give cash to a cold-caller offering "AARP for a one-time fee."',
      'The free AARP app (App Store / Google Play) is the easiest way to browse current deals.',
    ],
    link: 'https://www.aarp.org/membership/',
  },
  {
    name: 'Restaurants',
    ageRule: 'Usually 55+ or 60+ (varies by chain)',
    bestFor: 'Quiet weekday lunches and breakfast. Many chains run a senior menu or a flat percent off.',
    examples: [
      'Denny\'s — 15% off with AARP, plus a 55+ menu in many locations.',
      'IHOP — 55+ menu with smaller portions and lower prices (location-dependent).',
      'Wendy\'s — free or discounted drink with any meal for seniors (varies).',
      'Chick-fil-A — free or discounted refill / coffee at many stores.',
      'Outback Steakhouse — 10% off with AARP card.',
      'Subway, Arby\'s, Burger King — 10% off senior at many franchises (always ask).',
    ],
    notes: [
      'Restaurant chains have quietly cut some senior programs in 2024 and 2025. Always call ahead and ask, "Do you still offer a senior discount?"',
      'Franchise locations set their own rules — what works in one town may not work the next town over.',
    ],
    link: 'https://www.theseniorlist.com/senior-discounts/restaurants/',
  },
  {
    name: 'Grocery Stores',
    ageRule: '55+ or 60+ — usually one specific day per week',
    bestFor: 'Stretch your weekly grocery bill. Most chains pick a Tuesday or Wednesday.',
    examples: [
      'Publix — 5% off every Wednesday (55+) at participating Florida/GA/AL/SC/NC/TN/VA stores.',
      'Kroger — 10% off senior day at select divisions (Fred Meyer, Fry\'s, etc) — call your store.',
      'Harris Teeter — 5% off every Thursday (60+).',
      'Fred Meyer — 10% off first Tuesday of each month (55+).',
      'BJ\'s Wholesale — Senior Hours mornings + members-only discount days.',
      'Albertsons / Safeway — 10% off first Wednesday of the month at many stores (55+).',
    ],
    notes: [
      'Senior days vary store-by-store even within the same chain. Ask the customer service desk for your local rule.',
      'Some stores quietly ended senior day programs after 2023 — verify before your trip.',
    ],
    link: 'https://www.theseniorlist.com/senior-discounts/grocery-stores/',
  },
  {
    name: 'Travel — Trains, Buses, Airlines',
    ageRule: '62+ for most rail/bus, 65+ for airlines that still offer it',
    bestFor: 'Long-distance trips. Train and bus discounts are still strong; airline senior fares have mostly disappeared.',
    examples: [
      'Amtrak — 10% off for travelers 65+ on most routes (book online, show ID at station).',
      'Greyhound — 5% off Senior Discount fare for 62+.',
      'Trailways — 10% off for 60+.',
      'United Airlines — limited senior fares 65+ on select routes (call to book).',
      'American Airlines — senior fares 65+ where available (mostly domestic).',
      'Hilton, Marriott, Best Western, Choice Hotels — 10% off senior rate (62+ varies).',
    ],
    notes: [
      'Most major airlines (Delta, Southwest, JetBlue) ended their dedicated senior program. Check AARP travel for hotel + car rental savings instead — those are still strong.',
      'On trains and buses, book the senior fare online when possible. The lowest "saver" fare can sometimes beat the 10% senior discount.',
    ],
    link: 'https://www.amtrak.com/senior-discount',
  },
  {
    name: 'Entertainment — Movies, Museums, Parks',
    ageRule: '60+ or 62+ depending on venue',
    bestFor: 'Matinees, museums, and the biggest single deal in America: the lifetime National Parks pass.',
    examples: [
      'America the Beautiful Senior Pass — $80 lifetime / $20 annual, 62+. Free entry to all national parks for life.',
      'AMC Theatres — senior matinee pricing 60+ (varies by location).',
      'Regal Cinemas — Senior Day Tuesday discounts 60+.',
      'Cinemark — senior pricing 62+ at most locations.',
      'Smithsonian + most state museums — free or reduced 60+.',
      'Local YMCA, libraries, community centers — free or low-cost classes for 55+.',
    ],
    notes: [
      'The National Parks Senior Pass is the best deal on this whole page. Buy it once at any park entrance or at usgs.gov/store and use it for the rest of your life.',
      'Movie theater senior pricing has been quietly cut at some chains in 2024-2025. Ask at the box office.',
    ],
    link: 'https://www.nps.gov/planyourvisit/passes.htm',
  },
  {
    name: 'Retail — Clothing, Drugstores, Hardware',
    ageRule: '55+ or 60+ — usually one day a week or month',
    bestFor: 'Pharmacy savings, clothing, and home repair supplies on senior day.',
    examples: [
      'Kohl\'s — 15% off every Wednesday (60+) — stacks with their other coupons.',
      'Walgreens — Seniors Day first Tuesday of the month (55+) — 20% off eligible items with myWalgreens.',
      'Ross Dress for Less — 10% off Tuesdays (55+).',
      'Goodwill — senior discount day varies by region (often Tuesday or Thursday).',
      'Michaels — 10% off every day (55+) with ID.',
      'Banana Republic — 10% off (50+) at most stores.',
    ],
    notes: [
      'Most retail senior days require asking at checkout — staff usually won\'t volunteer it.',
      'Bring a photo ID. Some stores will accept a verbal age statement; others want to see your driver\'s license.',
    ],
    link: 'https://www.theseniorlist.com/senior-discounts/retail-stores/',
  },
  {
    name: 'Sciddy — Free Senior Discount App',
    ageRule: '50+',
    bestFor: 'A free phone app that lists nearby senior discounts. The closest thing to "Yelp for senior discounts."',
    examples: [
      'Free on App Store and Google Play.',
      'Browse by category (food, retail, travel) or "near me."',
      'Shows current discount, age requirement, and any conditions.',
      'No account or membership fee — free to use forever.',
    ],
    notes: [
      'Listings are crowd-sourced, so a few will be out of date. Always verify with a quick phone call before driving over.',
      'A solid second app to install alongside the AARP Members app.',
    ],
    link: 'https://www.sciddy.com',
  },
  {
    name: 'GovX & ID.me Verification',
    ageRule: 'Varies — many programs are 55+ or 65+',
    bestFor: 'Online discounts at brand-name stores that need proof of age before showing the senior price.',
    examples: [
      'ID.me — free identity verification used by stores like Rockport, Allen Edmonds, and many travel sites.',
      'GovX — discount marketplace for military/first responders + some senior programs.',
      'Honey browser extension — auto-applies senior + general coupon codes at checkout.',
      'RetailMeNot Senior section — coupon codes flagged as senior-eligible.',
    ],
    notes: [
      'ID.me is legitimate and used by the IRS and VA — never enter your Social Security number on any other "verification" site that asks.',
      'Honey is owned by PayPal and free. Avoid clones with similar names.',
    ],
    link: 'https://www.id.me',
  },
];

export default function SeniorDiscountFinderApp() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Senior Discount Finder"
        description="Where to actually find senior discounts in 2026 — AARP, restaurants, grocery senior days, Amtrak, National Parks pass, Kohl's Wednesday, Walgreens, and the free Sciddy app."
        path="/tools/senior-discount-finder-app"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Tag className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Senior Discount Finder</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real, current discounts for 50+, 55+, 62+, and 65+. Apps, websites, and the senior days worth knowing.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Senior Discount Finder' }]} />

          <Card className="border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1 text-amber-900 dark:text-amber-100">Watch out for fake AARP calls</p>
                  <p className="text-xs text-amber-900/80 dark:text-amber-100/80">
                    If someone calls saying "AARP for a one-time fee of 5 dollars" or "AARP lifetime membership for 50 dollars" — hang up. Real AARP membership is 16 dollars per year, paid only at aarp.org or by mailing a check to AARP. Cold-callers asking for your card number are scammers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Honest note about 2024-2025</p>
              <p className="text-xs text-muted-foreground">
                A number of chains have quietly cut their senior discount programs since 2023 — sometimes the corporate page still mentions it, but the local store no longer honors it. Always call ahead and ask, "Do you still offer a senior discount, and what age does it start?" Two minutes on the phone can save a wasted trip.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? CATEGORIES : CATEGORIES.slice(0, 3)).map(c => (
              <Card key={c.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{c.name}</p>
                    <Badge variant="outline">{c.ageRule}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {c.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Examples</p>
                      <ul className="space-y-0.5">
                        {c.examples.map((ex, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{ex}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">Notes</p>
                      <ul className="space-y-0.5">
                        {c.notes.map((n, i) => <li key={i} className="text-xs flex gap-1"><span className="text-amber-600">!</span><span>{n}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={c.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / learn more <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 8 discount categories</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">How to actually use these</p>
              <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Install the free AARP Members app and the free Sciddy app on your phone.</li>
                <li>If you are 50+, sign up for AARP at aarp.org for 16 dollars a year — it pays for itself on a single hotel stay.</li>
                <li>If you are 62+, buy the National Parks Senior Pass (80 dollars lifetime). Best deal on this page.</li>
                <li>Before you shop or eat out, search the chain name + "senior discount 2026" or check Sciddy.</li>
                <li>At the register, always ask: "Do you offer a senior discount today?" The worst they can say is no.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/free-resources" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Tech Programs</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free phones, internet, devices for seniors.</p>
              </Link>
              <Link to="/tools/government-benefits-portal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Government Benefits</p>
                <p className="text-xs text-muted-foreground mt-0.5">SNAP, LIHEAP, Lifeline, and more.</p>
              </Link>
              <Link to="/tools/free-tax-filing" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Tax Filing</p>
                <p className="text-xs text-muted-foreground mt-0.5">AARP TaxAide and IRS Free File.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: keep your AARP card and your driver\'s license together in your wallet. Most senior discounts need one or the other, and the moment you forget them is the moment the cashier asks.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
