import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BellRing } from 'lucide-react';

const PROVIDERS = [
  { name: 'Medical Guardian', cost: '$30-50/mo', best: 'Strong reputation, good fall detection. No long-term contracts.', good: 'Best overall.' },
  { name: 'MobileHelp', cost: '$25-45/mo', best: 'Cellular and home options. Good prices. Free spouse coverage.', good: 'Best value.' },
  { name: 'Bay Alarm Medical', cost: '$25-40/mo', best: 'Cheaper plans, decent service. In-car GPS option.', good: 'Best for active seniors.' },
  { name: 'Life Alert', cost: '$50-90/mo + $200 setup', best: 'Famous "I&apos;ve fallen" brand. 3-year contract — hard to cancel.', good: 'Avoid — overpriced.' },
  { name: 'Lively Mobile Plus', cost: '$25-40/mo + $50 device', best: 'GPS button. Sold at Best Buy. Owned by Best Buy/Greatcall.', good: 'Best in-store buy.' },
  { name: 'Apple Watch SE', cost: '$249 device + $0/mo (with iPhone)', best: 'Fall detection. Calls 911. Heart monitor. Texts. Many seniors prefer the watch.', good: 'Best if you have iPhone.' },
];

export default function MedicalAlertCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Alert Buttons — Compared | TekSure" description="Life Alert, Medical Guardian, MobileHelp, Apple Watch. Plain-English comparison of medical alert systems for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BellRing className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Alert Buttons</h1>
          <p className="text-lg text-muted-foreground">Help is one press away.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PROVIDERS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fall detection</strong> — auto-calls if you fall and don&apos;t move. $5-15 extra/month. Worth it.</li>
              <li><strong>Cellular vs landline</strong> — cellular works anywhere. Landline only at home.</li>
              <li><strong>GPS</strong> — for active people who leave the house.</li>
              <li><strong>Waterproof</strong> — most falls happen in the bathroom. Must be waterproof.</li>
              <li><strong>Battery life</strong> — 24-72 hours typical. Charge nightly.</li>
              <li><strong>No long contracts</strong> — Life Alert locks you in 3 years. Avoid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch as medical alert</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch SE ($249 one-time) has fall detection built in.</li>
              <li>If you fall hard and don&apos;t move 60 seconds → auto-calls 911 + texts emergency contacts.</li>
              <li>"Hold side button" → emergency call.</li>
              <li>Cellular models ($300-400) work without phone nearby.</li>
              <li>Heart rate, ECG, oxygen, sleep, exercise tracking included.</li>
              <li>Best if you already use an iPhone and don&apos;t mind charging nightly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Will Medicare pay?</h3>
            <p className="text-sm text-muted-foreground">Original Medicare does NOT cover medical alerts. Some Medicare Advantage plans DO — check yours. AARP/UnitedHealthcare often offers discounts. Long-term care insurance may cover. Veterans Affairs may cover for vets.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
