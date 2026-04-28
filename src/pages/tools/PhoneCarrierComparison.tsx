import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Carrier {
  name: string;
  price: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const CARRIERS: Carrier[] = [
  {
    name: 'Verizon 55+ Unlimited',
    price: '$60/mo (1 line)',
    whoFor: 'Florida residents 55+ who want the strongest network without changing carriers.',
    pros: [
      'Verizon network — best rural coverage in most states.',
      'Two lines for $80/mo total — strong deal for couples.',
      'Mobile hotspot and unlimited talk/text included.',
    ],
    cons: [
      'Florida-only for the 55+ plan (the rest of the US pays full price).',
      'Pricier than the prepaid options below.',
    ],
    link: 'https://www.verizon.com/plans/unlimited/55-plus/',
  },
  {
    name: 'T-Mobile Essentials Choice 55+',
    price: '$55/mo (2 lines)',
    whoFor: 'Couples 55+ in cities and suburbs — T-Mobile coverage is strongest in metro areas.',
    pros: [
      'Two lines for $55/mo total — the cheapest big-carrier 55+ plan.',
      'Unlimited talk, text, and data.',
      'In-store help at any T-Mobile location.',
    ],
    cons: [
      'Account holder must be 55 or older.',
      'Rural coverage is weaker than Verizon.',
    ],
    link: 'https://www.t-mobile.com/cell-phone-plans/older-adults-55-and-up',
  },
  {
    name: 'AT&T Senior Nation',
    price: '$30/mo (basic phone)',
    whoFor: 'Customers 65+ who only want a flip phone for calls — no smartphone or data.',
    pros: [
      'Cheapest option for true basic-phone users.',
      'Includes 200 anytime minutes plus weekend calling.',
      'AT&T network reliability.',
    ],
    cons: [
      'Basic phones only — does not work on smartphones.',
      'Account holder must be 65 or older.',
    ],
    link: 'https://www.att.com/plans/wireless/',
  },
  {
    name: 'Consumer Cellular (AARP discount)',
    price: '$20-55/mo',
    whoFor: 'AARP members who want a senior-focused carrier with US-based phone support.',
    pros: [
      'AARP members get 5% off and an extra 30% off accessories.',
      'US-based customer service — real humans, plain language.',
      'Uses AT&T and T-Mobile networks.',
    ],
    cons: [
      'Slightly more than Mint or US Mobile for the same data.',
      'No unlimited hotspot on cheaper tiers.',
    ],
    link: 'https://www.consumercellular.com/',
  },
  {
    name: 'Mint Mobile',
    price: '$15-30/mo',
    whoFor: 'Comfortable buying online and paying 3, 6, or 12 months upfront for a big discount.',
    pros: [
      'Cheapest unlimited plan around — $30/mo when paid yearly.',
      'Uses the T-Mobile network.',
      'No store visits — everything by mail or app.',
    ],
    cons: [
      'No physical stores for help.',
      'Pay upfront — refunds are pro-rated.',
    ],
    link: 'https://www.mintmobile.com/',
  },
  {
    name: 'Visible (Verizon-owned)',
    price: '$25/mo unlimited',
    whoFor: 'Anyone who wants Verizon coverage at half the price and is fine with app-only support.',
    pros: [
      'Runs on the Verizon network — same towers as the $60 plan.',
      'One flat rate — taxes and fees included.',
      'No contract, switch any time.',
    ],
    cons: [
      'No phone or store support — chat and app only.',
      'Hotspot speeds can slow during busy hours.',
    ],
    link: 'https://www.visible.com/',
  },
  {
    name: 'US Mobile',
    price: '$7-44/mo',
    whoFor: 'People who want to pick their network — Verizon, T-Mobile, or AT&T — from one app.',
    pros: [
      'Three networks under one bill — switch any time at no charge.',
      'Plans start at $7/mo for light callers.',
      'Strong online reviews for support quality.',
    ],
    cons: [
      'Setup is online-only — no walk-in help.',
      'Less name recognition than the bigger names.',
    ],
    link: 'https://www.usmobile.com/',
  },
  {
    name: 'Lively Jitterbug',
    price: '$15-40/mo + phone',
    whoFor: 'Older adults who want a true big-button flip or smartphone built for seniors.',
    pros: [
      'Phones are designed for seniors — large text, urgent-help button.',
      'Optional Urgent Response service connects to a human in seconds.',
      'Sold at Best Buy and online.',
    ],
    cons: [
      'Phones only work on Lively service.',
      'Plans add up once you include the help features.',
    ],
    link: 'https://www.lively.com/',
  },
];

export default function PhoneCarrierComparison() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Cheap Phone Plans for Seniors"
        description="Compare Verizon 55+, T-Mobile, AT&T, Mint Mobile, Visible, US Mobile, Consumer Cellular, and Lively Jitterbug plans side by side."
        path="/tools/phone-carrier-comparison"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Smartphone className="h-8 w-8 text-blue-700 dark:text-blue-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cheap Phone Plans for Seniors</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Eight plans compared in plain English. Most seniors save $30-$60 a month by switching.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Phone Plan Comparison' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">When does switching make sense?</p>
              <p className="text-xs text-muted-foreground mb-3">
                If your monthly bill is over $50 a line and your phone is paid off, you can almost certainly cut your bill in half. Prepaid carriers (Mint, Visible, US Mobile) ride the same towers as Verizon and T-Mobile — coverage stays the same, the price drops. Wait until your phone is paid off, then port your number out. You can keep the same number forever.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? CARRIERS : CARRIERS.slice(0, 3)).map(c => (
              <Card key={c.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{c.name}</p>
                    <Badge variant="outline">{c.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {c.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {c.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {c.cons.map((con, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{con}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={c.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 8 carriers</Button>
            )}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Set a port-out PIN before you switch</p>
                <p className="text-xs mb-2">
                  SIM-swap thieves call your carrier and pretend to be you so they can move your number to their phone. Once they have your number, they reset your bank logins. Every major carrier now lets you set a separate port-out PIN — a 4-to-8-digit code required to transfer your number out. Without it, no one can steal your number.
                </p>
                <p className="text-xs"><strong>How to set it:</strong> Call your current carrier (or open the app) and ask: &quot;Please add a Number Transfer PIN to my account.&quot; Write it down. When you do switch carriers later, you will need it to port your number to the new company.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">How to keep your phone number when you switch</p>
              <ol className="text-xs text-muted-foreground space-y-1.5">
                <li><strong>1.</strong> Pick the new carrier and order a SIM card or eSIM. Do NOT cancel your old plan yet.</li>
                <li><strong>2.</strong> Get your account number and port-out PIN from the old carrier (in the app or by phone).</li>
                <li><strong>3.</strong> Activate the new SIM. The new carrier asks for your old number, account number, and PIN. They handle the port — usually 15 minutes to 24 hours.</li>
                <li><strong>4.</strong> Once your new SIM works, the old line is automatically closed. No need to call and cancel.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/wifi-calling-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Wi-Fi Calling Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make calls over your home internet when signal is weak.</p>
              </Link>
              <Link to="/tools/robocall-blocker-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Robocall Blocker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Stop spam calls on iPhone and Android.</p>
              </Link>
              <Link to="/tools/bill-negotiator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bill Negotiator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Scripts to lower your phone, internet, or cable bill.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: write your account number and port-out PIN on a paper card kept with your important papers. If your phone is lost or stolen, you will need both to recover your number.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
