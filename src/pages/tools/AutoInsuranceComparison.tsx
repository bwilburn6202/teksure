import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function AutoInsuranceComparison() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Insurance Comparison Coach — Save $400-$1,200/year | TekSure" description="Most people overpay for car insurance. The free websites that compare quotes, plus discounts seniors miss. Save real money in 30 minutes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Auto Insurance Comparison</h1>
          <p className="text-lg text-muted-foreground">Save $400-$1,200/year with 30 minutes of effort.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why now</h2>
            <p className="text-sm">Insurers raise rates every year hoping you don\'t notice. Studies show people who switch save an average of $400-$700/year. Time spent: 30-60 minutes.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Gather your info (5 minutes)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Driver\'s license number for each driver in the home.</li>
              <li>VIN of each car (from registration or the dashboard).</li>
              <li>Approximate annual miles driven.</li>
              <li>Current policy declarations page (so you compare apples to apples).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Get quotes (free)</h2>
            <p className="text-sm mb-2">Get quotes from 4-6 companies. Best mix:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>The Zebra (free)</strong> — gathers quotes from many insurers in one shot.</li>
              <li><strong>Insurify (free)</strong> — same idea.</li>
              <li><strong>Direct from companies</strong> — sometimes cheaper than aggregator: Geico.com, Progressive.com, State Farm, Allstate, Liberty Mutual, USAA (military).</li>
              <li><strong>Local independent agent</strong> — they shop multiple carriers for you. Often catches deals the websites don\'t.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific discounts to ask for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Defensive driving course discount</strong> — 5-15% off for completing a 4-8 hour course. AARP Smart Driver does it online for $25 — pays for itself in one year.</li>
              <li><strong>Low mileage</strong> — many seniors drive under 7,500 miles/year. Tell them.</li>
              <li><strong>Mature driver / 55+</strong> — automatic in some states.</li>
              <li><strong>Multi-policy</strong> — bundle home + auto for 10-25% off.</li>
              <li><strong>Multi-car</strong> — second car on the same policy.</li>
              <li><strong>Pay in full</strong> — paying the 6-month premium up front saves 5-10%.</li>
              <li><strong>Paperless and auto-pay</strong> — small but adds up.</li>
              <li><strong>Vehicle safety features</strong> — anti-theft, automatic braking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What coverage to keep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Liability:</strong> Don\'t go with state minimums — those are scarily low. Aim for 100/300/100 minimum (means $100,000 per person, $300,000 per accident, $100,000 property damage).</li>
              <li><strong>Uninsured motorist:</strong> Same limits as liability. Cheap protection if a uninsured driver hits you.</li>
              <li><strong>Comprehensive + Collision:</strong> Worth keeping while your car is worth more than 10x the premium. Skip on cars worth less than $4,000.</li>
              <li><strong>Roadside assistance:</strong> Often cheaper through AAA membership.</li>
              <li><strong>Rental reimbursement:</strong> $30-50/year — worth it if you only have one car.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch out for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Final offer" pressure</strong> — every insurer claims to be cheapest. Get apples-to-apples quotes with the SAME coverage limits.</li>
              <li><strong>Telematics apps</strong> (Drivewise, Snapshot, Drive Safe & Save) — track your driving. Discount if you drive well, but rates can also go UP if you brake hard or drive at night.</li>
              <li><strong>"Accident forgiveness"</strong> — sounds good but built into the rate. You\'re paying for it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Do this every 1-2 years</h3>
            <p className="text-sm text-muted-foreground">Re-shopping every 1-2 years almost always finds savings. Set a calendar reminder for renewal time. Even sticking with your current insurer — calling and saying "I\'m getting quoted X by [competitor]" often gets a price match.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
