import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pill, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Pick {
  name: string;
  cost: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'Amazon Pharmacy',
    cost: 'Insurance copay OR cash price (often 40-80% off)',
    bestFor: 'Prime members. Free 2-day delivery on most prescriptions in the US.',
    pros: ['Free 2-day delivery for Prime members; same-day in some cities.', 'Shows insurance AND cash price side-by-side at checkout.', 'RxPass: 60 common generics for a flat 5 dollars/month for Prime members.', 'Pharmacist chat 24/7.'],
    cons: ['No retail pickup option — delivery only.', 'Controlled substances have stricter shipping rules.'],
    link: 'https://pharmacy.amazon.com',
  },
  {
    name: 'Cost Plus Drug Co. (Mark Cuban)',
    cost: 'Manufacturer cost + 15% markup + 5 dollars pharmacy fee',
    bestFor: 'Anyone paying cash for generic medications. Often the cheapest in the country.',
    pros: ['Radical price transparency — every drug shows the math.', 'Generics like atorvastatin, metformin, lisinopril for a few dollars a month.', 'Mail order with flat shipping.', 'No insurance games, no surprise charges.'],
    cons: ['Limited brand-name selection.', 'Cannot bill most insurance — pay cash.', 'Mail only, no pickup.'],
    link: 'https://costplusdrugs.com',
  },
  {
    name: 'GoodRx',
    cost: 'Free discount card; GoodRx Gold 9.99 dollars/month',
    bestFor: 'Picking up at a local pharmacy (CVS, Walgreens, Walmart) at a discount.',
    pros: ['Compare prices at every pharmacy near you in seconds.', 'Free coupon — show the code at the counter, save 30-80%.', 'Works at 70,000+ US pharmacies.'],
    cons: ['Cannot combine with insurance — pick one or the other.', 'Prices change weekly.'],
    link: 'https://www.goodrx.com',
  },
  {
    name: 'Capsule',
    cost: 'Insurance copay (no markup)',
    bestFor: 'People in covered metro areas (NYC, LA, Chicago, Boston) who want same-day hand delivery.',
    pros: ['Free same-day hand delivery — courier brings it to your door.', 'Bills your insurance like a normal pharmacy.', 'Text your pharmacist directly.'],
    cons: ['Only available in select metro areas.', 'Coverage map is shrinking — check ZIP first.'],
    link: 'https://www.capsule.com',
  },
  {
    name: 'Walgreens / CVS / Walmart Delivery',
    cost: 'Insurance copay + delivery fee (often free with auto-refill)',
    bestFor: 'People who already use these pharmacies and want home delivery instead of pickup.',
    pros: ['Keeps your existing pharmacy and insurance setup.', 'Walgreens: free same-day delivery in many ZIPs with Prescription Savings Club.', 'CVS: free 1-2 day delivery on auto-refill orders.', 'Walmart: 4 dollars/month for many generics, mail or pickup.'],
    cons: ['Coverage and pricing vary by ZIP.', 'Delivery fees may apply for one-time orders.'],
    link: 'https://www.walgreens.com/pharmacy/prescription/delivery.jsp',
  },
  {
    name: 'OptumRx (insurance mail-order)',
    cost: 'Insurance copay (often cheaper for 90-day supplies)',
    bestFor: 'People with UnitedHealthcare or other plans that use OptumRx for maintenance medications.',
    pros: ['90-day supply often costs the same as a 30-day at retail — big savings.', 'Free standard shipping built into the plan.', 'Auto-refill and refill reminders.'],
    cons: ['Only works if your insurance plan uses OptumRx as its mail-order partner.', 'Setup takes 7-10 days for the first fill — order early.'],
    link: 'https://www.optumrx.com',
  },
];

export default function PrescriptionDeliveryApps() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Prescription Delivery Apps Compared"
        description="Six honest picks for prescription delivery — Amazon Pharmacy, Cost Plus Drugs (Mark Cuban), GoodRx, Capsule, Walgreens/CVS/Walmart, OptumRx. Cost, pros, cons."
        path="/tools/prescription-delivery-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Pill className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Prescription Delivery Apps</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six options to skip the pharmacy line. Some bill your insurance, some are cheaper than insurance.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Prescription Delivery Apps' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/30 mb-6">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-2 text-amber-900 dark:text-amber-100">Watch out for discount-card cold callers</p>
                  <p className="text-xs text-amber-900/80 dark:text-amber-100/80">
                    Real GoodRx, Cost Plus, Amazon, and OptumRx will NEVER call you out of the blue and ask for your Medicare number, Social Security, or bank account to "send your discount card." Hang up. Real discount cards are free and you sign up for them yourself on the website. If a caller pressures you, that is a scam.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>

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

                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / sign up <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 picks</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Always price-check 3 ways</p>
              <p className="text-xs text-muted-foreground">
                For any new prescription, check (1) your insurance copay, (2) the GoodRx cash price, and (3) the Cost Plus Drugs price. Whichever is lowest wins. For maintenance drugs you take every month, a 90-day mail-order fill through OptumRx or Amazon Pharmacy is almost always cheapest of all.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/medication-reminder-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medication Reminder Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Never miss a dose.</p>
              </Link>
              <Link to="/tools/medicare-plan-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medicare Plan Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick a plan with good Rx coverage.</p>
              </Link>
              <Link to="/tools/online-doctor-portal-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Doctor Portal Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Request refills online.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: ask your doctor to write 90-day prescriptions instead of 30-day. It cuts the price and the hassle by two-thirds.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
