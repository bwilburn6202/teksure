import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

const SVCS = [
  { name: 'Amazon Pillpack', cost: 'FREE service', best: 'Pre-sorted dose-packs delivered. Insurance + most drugs. Genius for many medications.', good: 'Best overall.' },
  { name: 'Amazon Pharmacy', cost: 'FREE Prime shipping', best: 'Standard mail-order. Compare to retail prices.', good: 'Best with Prime.' },
  { name: 'Express Scripts / OptumRx / CVS Caremark', cost: 'Insurance plan dependent', best: 'Insurance mail-order. Often 90-day at copay of 60-day. Auto-refills.', good: 'Best with insurance.' },
  { name: 'CVS / Walgreens / Walmart auto-refill', cost: 'Same as in-store', best: 'Pickup or delivery. App tracks refills.', good: 'Best in-store backup.' },
  { name: 'Local pharmacy delivery', cost: 'Often FREE for seniors', best: 'Many local pharmacies still deliver. ASK.', good: 'Best community pharmacist.' },
];

export default function MedicationDeliveryServices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medication Delivery Services | TekSure" description="Pillpack, Amazon Pharmacy, mail-order. Plain-English picks for getting prescriptions delivered free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medication Delivery</h1>
          <p className="text-lg text-muted-foreground">Skip the pharmacy line.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
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
            <h2 className="font-bold text-xl mb-3">90-day mail-order saves money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most insurance plans charge 60-day copay for 90-day supply via mail.</li>
              <li>Saves 33% on copays vs monthly pickup.</li>
              <li>Plus saves 12 trips to pharmacy/year.</li>
              <li>Set up auto-refill so you never run out.</li>
              <li>Call your insurance to confirm your plan&apos;s mail-order benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When mail-order WON&apos;T work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Controlled substances (some opioids, some ADHD meds) — must pick up at pharmacy.</li>
              <li>Insulin in some states — temperature-sensitive, hand-deliver.</li>
              <li>Brand-new prescription before insurance approves — get from local pharmacy first.</li>
              <li>Antibiotics for acute infection — too urgent to wait for mail.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up Pillpack</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>amazon.com/pillpack</strong>.</li>
              <li>Enter insurance + medications.</li>
              <li>Pillpack contacts your doctor + transfers prescriptions.</li>
              <li>First box arrives in 1-2 weeks.</li>
              <li>14-day rolls of pre-sorted dose pouches.</li>
              <li>Pharmacist always available by phone.</li>
              <li>Free.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t skip your local pharmacist</h3>
            <p className="text-sm text-muted-foreground">Even with mail-order, build relationship with ONE local pharmacist (Costco, CVS, or independent). They&apos;re your free medication consultant. Free interaction checks. Often help with insurance issues mail-order can&apos;t.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
