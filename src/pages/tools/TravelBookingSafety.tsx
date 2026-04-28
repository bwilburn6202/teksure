import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plane, ExternalLink, AlertTriangle, ShieldAlert } from 'lucide-react';

interface Platform {
  name: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  scamFlags: string[];
  fees: string;
  link: string;
}

const PLATFORMS: Platform[] = [
  {
    name: 'Airbnb',
    bestFor: 'Whole homes, longer stays, cooking your own meals, traveling with family.',
    pros: [
      'Verified host profiles with photo ID checks',
      'Honest review system — guests must stay before they can review',
      'AirCover refund protection if the listing is wrong or unsafe',
      'In-app messaging keeps a paper trail',
    ],
    cons: [
      'Cancellation policies vary by host — some are non-refundable even one day after booking',
      'Cleaning fees can add 15-30% on top of the nightly rate',
      'Check-in is rarely staffed — if a code does not work at 11 PM, you wait',
      'Some cities have banned short-term rentals; bookings get canceled at the last minute',
    ],
    scamFlags: [
      'Host has zero reviews AND brand-new account',
      'Photos look magazine-perfect or are clearly stolen (reverse image search)',
      'Host asks you to pay outside Airbnb — Venmo, Zelle, wire transfer',
      'Host wants to "communicate by text" instead of through the Airbnb app',
    ],
    fees: 'Service fee ~14% + cleaning fee per stay.',
    link: 'https://www.airbnb.com',
  },
  {
    name: 'VRBO',
    bestFor: 'Whole-home rentals only — no shared rooms, families and groups.',
    pros: [
      'Whole-property focus means no surprise roommates',
      'Book with Confidence Guarantee covers fraud and major property issues',
      'Owner-operated more often than Airbnb — direct communication with the actual owner',
    ],
    cons: [
      'Smaller inventory than Airbnb in most US cities',
      'Service fees often higher than Airbnb (often 6-12% on top of owner price)',
      'Cancellation rules set by each owner — read them before paying',
    ],
    scamFlags: [
      'Listing copied word-for-word from another site',
      'Owner pressures you to wire money for a "discount"',
      'Property address is vague or only shared after payment',
    ],
    fees: 'Service fee ~6-12% + owner cleaning fee.',
    link: 'https://www.vrbo.com',
  },
  {
    name: 'Booking.com',
    bestFor: 'Hotels worldwide, flexible cancellation, no upfront payment options.',
    pros: [
      'Huge global hotel inventory',
      'Many bookings have free cancellation up to 24-48 hours before check-in',
      'Often no charge until you arrive — pay at the hotel',
      'Genius loyalty discounts kick in fast',
    ],
    cons: [
      'Chargebacks are a known headache — Booking.com routinely sides with the hotel',
      'Customer service is offshored and slow when something goes wrong',
      'Some "deals" hide resort fees that the hotel adds at check-in',
      'Phishing emails impersonating Booking.com are very common',
    ],
    scamFlags: [
      'Email asks you to "verify your card" through a link — always go to Booking.com directly instead',
      'Hotel calls and asks for your card number again "for verification"',
      'Listing price is far below every other site for the same hotel',
    ],
    fees: 'Free for travelers; hotels pay Booking.com 15-25% commission.',
    link: 'https://www.booking.com',
  },
  {
    name: 'Expedia',
    bestFor: 'Bundle deals — flight plus hotel plus rental car saves money.',
    pros: [
      'Bundling flights and hotels can knock 10-30% off',
      'One Key loyalty program shared with Hotels.com and VRBO',
      'US-based customer support during business hours',
      'Price-match guarantee if you find a cheaper rate within 24 hours',
    ],
    cons: [
      'Changes and cancellations go through Expedia, not the airline or hotel — extra middleman delay',
      'If a flight is canceled, the airline may tell you to call Expedia, who tells you to call the airline',
      'Hidden booking fees on some flights',
    ],
    scamFlags: [
      'Fake "Expedia Customer Service" phone numbers in Google search ads',
      'Email asks for your card or login through a link',
    ],
    fees: 'Free for travelers; bundles often cheaper than booking separately.',
    link: 'https://www.expedia.com',
  },
  {
    name: 'Hotels.com',
    bestFor: 'Hotel-only bookings, fans of stamp-style loyalty rewards.',
    pros: [
      'Reward Nights program — stay 10 nights, get 1 free (now part of One Key)',
      'Frequent flash sales and member-only rates',
      'Owned by Expedia Group, so customer service quality is similar',
    ],
    cons: [
      'Free-night value capped at the average of your 10 paid nights',
      'Same middleman friction as Expedia when something goes wrong',
      'Some non-refundable rates hide that detail until checkout',
    ],
    scamFlags: [
      'Pop-up offers a "discount code" if you enter your card on a third-party page',
      'Imitation customer service numbers on Google',
    ],
    fees: 'Free for travelers; bundles via One Key.',
    link: 'https://www.hotels.com',
  },
  {
    name: 'Costco Travel',
    bestFor: 'Costco members booking cruises, all-inclusive resorts, rental cars, vacation packages.',
    pros: [
      'Pre-negotiated rates often beat Expedia for resorts and cruises',
      'Costco Cash Card credit included with most packages (often $100-500)',
      'No booking fees, no change fees on most reservations',
      'US-based customer service — actual humans on the phone',
    ],
    cons: [
      'Must be a Costco member (~$65/year for Gold Star, $130 for Executive)',
      'Smaller selection than Expedia — fewer obscure destinations',
      'No loyalty points with the hotel chain (you book through Costco, not Marriott or Hilton)',
    ],
    scamFlags: [
      'Anyone calling claiming to be "Costco Travel" asking for payment over the phone',
      'Email about your Costco Travel booking from a non-Costco domain',
    ],
    fees: 'Free for members. Annual Costco membership required.',
    link: 'https://www.costcotravel.com',
  },
  {
    name: 'AAA Travel',
    bestFor: 'AAA members planning road trips, cruises, guided tours, and cross-country drives.',
    pros: [
      'Real travel agents you can sit down with at a local AAA office',
      'Member discounts on hotels, rental cars, attractions',
      'TripTik routing and physical maps still available (great for unfamiliar routes)',
      'Known for hand-holding seniors through complex bookings',
    ],
    cons: [
      'Must be an AAA member (~$60-100/year depending on region)',
      'Selection is curated — fewer budget options',
      'Online booking site is older and less smooth than Expedia',
    ],
    scamFlags: [
      'Cold callers claiming to be "AAA Travel" — AAA does not cold-call about vacations',
      'Pressure to book a timeshare presentation in exchange for cheap travel',
    ],
    fees: 'Free for members. Annual AAA membership required.',
    link: 'https://travel.aaa.com',
  },
];

const RULES = [
  {
    title: 'Always pay through the platform — never outside it',
    detail: 'Airbnb, VRBO, Booking.com, Expedia all have buyer protection ONLY when you pay through their site. The minute a host asks for Zelle, Venmo, wire, or a personal PayPal, the protection disappears.',
  },
  {
    title: 'Read the cancellation policy BEFORE you click pay',
    detail: 'On Airbnb and VRBO, each host sets their own. "Strict" can mean zero refund 7 days out. "Non-refundable" hotel rates on Booking.com mean the same thing. If your plans might change, pay a little more for flexible.',
  },
  {
    title: 'Book hotels direct after you find them on an aggregator',
    detail: 'Find the hotel on Expedia or Booking.com, then go to the hotel chain\'s own website. Direct bookings often match the price, earn loyalty points, and give you a real human to call when something goes wrong.',
  },
  {
    title: 'Use a credit card, never a debit card',
    detail: 'Credit cards let you dispute a charge for fraud or non-delivery. Debit cards pull the money straight from your bank — getting it back takes weeks even when you are clearly right.',
  },
  {
    title: 'Reverse-image-search any rental that looks too perfect',
    detail: 'On Google Images, drag the photo into the search bar. If the same photos show up on a real estate site or a different rental listing, it is a fake. Skip and report it.',
  },
  {
    title: 'Save every confirmation, screenshot every conversation',
    detail: 'If a host or hotel cancels at the last minute, you need the original booking page, the price, and the message thread. Take screenshots — do not rely on the platform keeping them.',
  },
];

export default function TravelBookingSafety() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Travel Booking Safety"
        description="Book travel safely online. Honest comparison of Airbnb, VRBO, Booking.com, Expedia, Hotels.com, Costco Travel, and AAA Travel — with scam flags and six rules to follow before you pay."
        path="/tools/travel-booking-safety"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-sky-500/10 rounded-full">
                <Plane className="h-8 w-8 text-sky-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Travel Booking Safety</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick the right site. Spot fake listings. Six rules to follow before you pay.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Travel Booking Safety' }]} />

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Seven travel sites compared</p>
          <div className="space-y-3 mb-6">
            {(showAll ? PLATFORMS : PLATFORMS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.fees}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {p.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-md bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-2 mb-2">
                    <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1 flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" /> Scam flags
                    </p>
                    <ul className="space-y-0.5">
                      {p.scamFlags.map((s, i) => <li key={i} className="text-xs flex gap-1"><span className="text-amber-600">!</span><span>{s}</span></li>)}
                    </ul>
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit {p.name} <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 7 travel sites</Button>
            )}
          </div>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Six universal booking rules</p>
          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <ol className="space-y-3">
                {RULES.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{r.title}</p>
                      <p className="text-muted-foreground mt-0.5">{r.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out: timeshare-presentation calls during your vacation</p>
                <p className="text-muted-foreground">
                  After you book a hotel or resort — sometimes during the trip itself — you may get a call at your room or on your cell offering a free breakfast, free show tickets, or a steep discount on a future stay. The catch is a 90-minute (often 4-hour) timeshare presentation with high-pressure sales. Politely decline and hang up. No real hotel benefit requires you to sit through a sales pitch. If the call claims to be from the front desk, hang up and dial the front desk directly using the number printed in the room.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/travel-tech-checklist" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Travel Tech Checklist</p>
                <p className="text-xs text-muted-foreground mt-0.5">What to do with your phone, laptop, and accounts before a trip.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste a suspicious email or text and check it.</p>
              </Link>
              <Link to="/tools/online-shopping-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Shopping Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Buy online without giving up your card to scammers.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
