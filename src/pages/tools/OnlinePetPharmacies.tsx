import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

const PHARMS = [
  { name: 'Chewy Pharmacy', cost: 'Same as vet, often less', best: 'Biggest. Auto-ship. Excellent customer service. Vet faxes script.', good: 'Best overall.' },
  { name: '1800PetMeds', cost: '5-25% less than vet', best: 'Long-time pharmacy. Wide selection. Reliable.', good: 'Best variety.' },
  { name: 'Costco Pet Pharmacy', cost: '20-50% less', best: 'Members can use Costco pharmacy for pet meds (some). Cheapest for common drugs.', good: 'Best price.' },
  { name: 'Walmart Pet Pharmacy', cost: 'Cheap on common drugs', best: 'Walmart fills pet prescriptions for some drugs at human prices.', good: 'Best price for cheap drugs.' },
  { name: 'GoodRx for Pets', cost: 'FREE coupons', best: 'Coupons for pet meds. Sometimes 50%+ off.', good: 'Best coupon hunter.' },
];

export default function OnlinePetPharmacies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Pet Pharmacies — Save 30-50% | TekSure" description="Chewy, 1800PetMeds, Costco. Plain-English picks for buying pet medications online cheaper than the vet." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Pet Pharmacies</h1>
          <p className="text-lg text-muted-foreground">30-50% cheaper than vet office.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PHARMS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">How to switch from vet pharmacy</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick online pharmacy (Chewy easiest).</li>
              <li>Sign up. Add pet info.</li>
              <li>Order — they request prescription from your vet directly. Or you can ask vet for paper script.</li>
              <li>Vet faxes/emails approval.</li>
              <li>Pharmacy ships in 1-3 days.</li>
              <li>Set up auto-ship — never run out.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common drugs cheaper online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apoquel</strong> (allergies) — vet $5/pill, online $3.</li>
              <li><strong>Trifexis</strong> (heartworm + flea) — vet $25/dose, online $18.</li>
              <li><strong>Heartgard</strong> — vet $12/dose, online $7.</li>
              <li><strong>Insulin (Vetsulin)</strong> — vet $80, online $55.</li>
              <li><strong>Most generics</strong> — Costco has them at HUMAN prices (way cheaper).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t skimp on flea/tick/heartworm</h2>
            <p className="text-sm">Cheap online "flea/tick" meds from non-veterinary sources can be counterfeit or under-dosed. Buy from US-licensed pharmacies (Chewy, 1800PetMeds, vet) only. Avoid Amazon/eBay third-party sellers for pet meds.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Costco Pet Pharmacy hack</h3>
            <p className="text-sm text-muted-foreground">If your pet is on a drug that has a human equivalent (like Prozac/fluoxetine, prednisone, antibiotics) — Costco pharmacy fills WITH a vet&apos;s prescription, often at $4-10 instead of $40+. Hand vet&apos;s script to Costco pharmacist. Don&apos;t need Costco membership for pharmacy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
