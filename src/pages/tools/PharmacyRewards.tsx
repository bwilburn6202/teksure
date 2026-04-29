import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

const PROGRAMS = [
  { name: 'CVS ExtraCare', cost: 'FREE', best: 'Earn 2% on most purchases. Get personalized coupons.', good: 'Easiest pharmacy rewards.' },
  { name: 'Walgreens myWalgreens', cost: 'FREE', best: '5% back on Walgreens brand. 1% on others. Plus weekly coupons.', good: 'Best pharmacy points value.' },
  { name: 'Rite Aid Wellness Rewards', cost: 'FREE', best: 'Discount on prescriptions. Wellness+ rewards.', good: 'For Rite Aid customers.' },
  { name: 'GoodRx Gold', cost: '$10/mo', best: 'Bigger Rx discounts than free GoodRx. Includes household.', good: 'Worth it for multi-prescription seniors.' },
  { name: 'Costco Pharmacy', cost: 'Costco membership', best: 'Often cheapest cash prices. Members + non-members.', good: 'Best for cash-pay scripts.' },
  { name: 'Mark Cuban Cost Plus Drugs', cost: 'FREE', best: 'Generic Rx at near-cost prices. Often 80-90% cheaper than retail.', good: 'Best ultra-cheap option for generics.' },
  { name: 'Amazon Pharmacy', cost: 'Free for Prime', best: 'Free 2-day delivery. Compare prices easily.', good: 'For Prime members.' },
];

export default function PharmacyRewards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pharmacy Rewards Programs — CVS, Walgreens, GoodRx | TekSure" description="Free programs that save 2-20% on prescriptions and over-the-counter. Plain-English picks for the best pharmacy rewards." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pharmacy Rewards</h1>
          <p className="text-lg text-muted-foreground">Stack programs. Save hundreds yearly on prescriptions.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PROGRAMS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stack discounts</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Compare prices: GoodRx, SingleCare, your insurance copay, Mark Cuban Cost Plus.</li>
              <li>Use the cheapest path. Sometimes free GoodRx beats your insurance.</li>
              <li>Apply rewards card for that pharmacy.</li>
              <li>Use prescription manufacturer\'s coupon (search "[drug] coupon").</li>
              <li>Buy 90-day supply (mail-order Rx is often 30-50% cheaper than 30-day in-store).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Medicare Part D Plan Finder</strong> — picks plan that covers YOUR specific drugs cheapest.</li>
              <li><strong>$2,000 cap on Part D drugs</strong> (2025+) — total out-of-pocket capped.</li>
              <li><strong>Extra Help</strong> — $0 premiums + tiny copays for low-income.</li>
              <li><strong>State Pharmaceutical Assistance Programs (SPAPs)</strong> — many states.</li>
              <li><strong>Manufacturer patient assistance</strong> — for expensive brand drugs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best path</h3>
            <p className="text-sm text-muted-foreground">Use ONE pharmacy for all prescriptions. Sign up for their free rewards. Try GoodRx for each script. For generic chronic-condition drugs (statins, BP meds, diabetes) — try Mark Cuban Cost Plus first. Often 80-95% cheaper.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
