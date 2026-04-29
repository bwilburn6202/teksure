import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function AutoLeaseVsBuy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Lease vs Buy for Seniors | TekSure" description="Lease or buy your next car. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Lease vs Buy</h1>
          <p className="text-lg text-muted-foreground">Which is right for you?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lease: pros</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lower monthly payment.</li>
              <li>New car every 3 years.</li>
              <li>No major repairs (under warranty).</li>
              <li>Latest safety features.</li>
              <li>Simple — return at end.</li>
              <li>Predictable cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lease: cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mileage limits — 10-12K/yr typical.</li>
              <li>Wear-and-tear charges.</li>
              <li>Forever payments.</li>
              <li>No equity at end.</li>
              <li>Expensive to break early.</li>
              <li>Insurance higher.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy: pros</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Own the car after loan paid.</li>
              <li>No mileage limits.</li>
              <li>Modify if want.</li>
              <li>Sell anytime.</li>
              <li>Trade-in value.</li>
              <li>Long-term lower cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy: cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Higher monthly payment.</li>
              <li>Major repairs after warranty.</li>
              <li>Older car gradually.</li>
              <li>Depreciation loss.</li>
              <li>Selling later = hassle.</li>
              <li>Need bigger down payment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: lease IF</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drive less than 12K miles/year.</li>
              <li>Want latest safety features.</li>
              <li>Don&apos;t like maintenance.</li>
              <li>Predictable budget.</li>
              <li>3-year lease cycles.</li>
              <li>Estate planning simpler.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: buy IF</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Long road trips frequent.</li>
              <li>Want to keep car forever.</li>
              <li>Have cash for purchase.</li>
              <li>Comfortable with maintenance.</li>
              <li>Reliability brand (Toyota / Honda).</li>
              <li>Drive 15K+ miles/yr.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cash vs financing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cash — no interest, simple.</li>
              <li>Financing — sometimes 0% promotions.</li>
              <li>Don&apos;t deplete emergency fund.</li>
              <li>Keep 6 months expenses liquid.</li>
              <li>Senior — cash often better choice.</li>
              <li>Avoid 7-year loans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Calculator</h3>
            <p className="text-sm text-muted-foreground">Edmunds.com lease-vs-buy calculator. Plug in numbers. Honest comparison. Generally — buy is cheaper if you keep car 7+ years. Lease cheaper if you trade every 3 years. Most seniors keep cars long = buy makes sense. Talk to financial advisor — they figure your specific situation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
