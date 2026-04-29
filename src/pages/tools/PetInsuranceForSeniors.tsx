import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

const PLANS = [
  { name: 'Trupanion', cost: '$50-100/mo', best: 'Pays vet directly. No reimbursement waiting.', good: 'Best direct pay.' },
  { name: 'Healthy Paws', cost: '$30-70/mo', best: 'High customer ratings. Unlimited annual coverage.', good: 'Best ratings.' },
  { name: 'Pets Best', cost: '$30-60/mo', best: 'Customizable plans + cheaper.', good: 'Best budget.' },
  { name: 'Embrace', cost: '$30-60/mo', best: 'Wellness rewards + diminishing deductible.', good: 'Best with wellness.' },
  { name: 'AKC Pet Insurance', cost: '$30-50/mo', best: 'Older pets accepted up to 9+ yrs.', good: 'Best for senior pets.' },
];

export default function PetInsuranceForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Insurance for Seniors | TekSure" description="Pet insurance for senior owners + senior pets. Plain-English picks + coverage explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Insurance for Seniors</h1>
          <p className="text-lg text-muted-foreground">$5K vet bills hurt fixed incomes. Insurance helps.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PLANS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">What&apos;s covered</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Accidents</strong> — broken leg, swallowed object.</li>
              <li><strong>Illness</strong> — cancer, diabetes, kidney.</li>
              <li><strong>Surgery</strong> — major medical.</li>
              <li><strong>Emergency vet</strong> — middle of night.</li>
              <li><strong>Wellness add-on</strong> — vaccines, dental, exam (extra).</li>
              <li><strong>NOT covered</strong> — pre-existing conditions, breeding, dental cleaning (most plans).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pet considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many insurers refuse pets over 8-10 yrs.</li>
              <li>AKC, ASPCA, Pets Best accept older.</li>
              <li>Pre-existing conditions excluded forever.</li>
              <li>Premium rises every year + with age.</li>
              <li>If pet 8+ — may be cheaper to self-insure.</li>
              <li>Open emergency savings account ($3K-5K) instead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When insurance is worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Young pet (under 5).</li>
              <li>Breed prone to issues (bulldogs, larger dogs).</li>
              <li>Can&apos;t afford $5K-15K emergency vet.</li>
              <li>Bonded with pet — would do whatever to save.</li>
              <li>Get policy BEFORE pet has any conditions.</li>
              <li>Compare 3+ plans on Pawlicy.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternative: vet wellness plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Banfield, VCA — $30-60/mo wellness plans.</li>
              <li>Cover routine: exams, vaccines, dental cleaning.</li>
              <li>NOT major medical (separate insurance for that).</li>
              <li>Worth it if you do all the wellness items.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">CareCredit + GoodRx</h3>
            <p className="text-sm text-muted-foreground"><strong>CareCredit</strong> — interest-free vet financing 6-24 months. Apply ahead, use as needed. <strong>GoodRx for Pets</strong> — discounts on pet meds 50-80%. <strong>RedRover Relief grants</strong> — emergency vet help for low income. <strong>The Pet Fund</strong> — grants for chronic care.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
