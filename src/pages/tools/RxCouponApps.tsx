import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

const APPS = [
  { name: 'GoodRx', cost: 'FREE', best: 'Most popular. Compare prices across pharmacies. Coupons. Often beats insurance.', good: 'Best overall.' },
  { name: 'SingleCare', cost: 'FREE', best: 'Often beats GoodRx for some drugs. Worth checking both.', good: 'Best alternative.' },
  { name: 'RxSaver', cost: 'FREE', best: 'Same idea. Different deals. Use 3 apps, lowest wins.', good: 'Best for variety.' },
  { name: 'NeedyMeds', cost: 'FREE', best: 'Patient assistance programs from drug companies. Free meds for low-income.', good: 'Best for low-income.' },
  { name: 'Cost Plus Drugs (Mark Cuban)', cost: 'FREE site', best: 'Up to 90% off generics. Direct from manufacturer + flat 15% markup. costplusdrugs.com.', good: 'Best price killer.' },
  { name: 'Amazon Prescriptions', cost: 'FREE for Prime', best: 'Free shipping. Sometimes lowest. With Prime + Amazon Pharmacy.', good: 'Best for Prime members.' },
];

export default function RxCouponApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prescription Coupon Apps | TekSure" description="GoodRx, SingleCare, Cost Plus Drugs. Plain-English picks for slashing prescription prices — sometimes 90% off." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rx Coupon Apps</h1>
          <p className="text-lg text-muted-foreground">Often cheaper than insurance.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to save</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Search drug + dose in GoodRx, SingleCare, Cost Plus Drugs, RxSaver.</li>
              <li>Compare prices across pharmacies in your area.</li>
              <li>Cheapest = winner.</li>
              <li>Show coupon at pharmacy OR show drug name + price.</li>
              <li>Pharmacy enters coupon at checkout.</li>
              <li>Doesn&apos;t use insurance — runs as cash with discount.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use coupons vs insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Coupon is CHEAPER than your copay → use coupon.</li>
              <li>Coupon doesn&apos;t count toward deductible — keep that in mind.</li>
              <li>For Medicare Part D — coupons may not count toward "donut hole" — discuss with pharmacist.</li>
              <li>Generic drugs almost always cheaper with coupon than insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost Plus Drugs (Mark Cuban)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many generics 50-90% cheaper than retail.</li>
              <li>Example: 30 metformin = $4 (vs $20+ retail).</li>
              <li>Mail-order. Need real prescription from your doctor.</li>
              <li>No insurance accepted — cash only. But often cheaper anyway.</li>
              <li>Best for: chronic generics you take every month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Manufacturer assistance</h3>
            <p className="text-sm text-muted-foreground">For brand-name drugs, search "[drug name] patient assistance program". Most major drug companies offer income-based free or discounted medication. Apply once, valid 12 months. Pharmacist + NeedyMeds can help apply.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
