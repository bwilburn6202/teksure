import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

const SHOES = [
  { name: 'Hoka Bondi', cost: '$165', best: 'Max cushion. Best for joints.', good: 'Best joints.' },
  { name: 'New Balance 990', cost: '$205', best: 'Stable, durable, classic.', good: 'Best classic.' },
  { name: 'Brooks Ghost', cost: '$140', best: 'Neutral cushion. Affordable.', good: 'Best neutral.' },
  { name: 'Skechers GoWalk', cost: '$70', best: 'Slip-on, lightweight.', good: 'Best slip-on.' },
  { name: 'Asics GT-2000', cost: '$130', best: 'Stability for over-pronation.', good: 'Best stability.' },
];

export default function SeniorWalkingShoes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Walking Shoes | TekSure" description="Best walking shoes for seniors. Plain-English picker." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Shoes</h1>
          <p className="text-lg text-muted-foreground">Comfort + safety. Replace every 500 miles.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SHOES.map(s => (
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
            <h2 className="font-bold text-xl mb-3">Senior pick: Hoka Bondi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$165 — pricier but worth it.</li>
              <li>Maximum cushion = joint protection.</li>
              <li>Wide toe box.</li>
              <li>Lightweight despite cushion.</li>
              <li>Slip-resistant outsole.</li>
              <li>Used by physical therapists.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cushion</strong> — knee + hip protection.</li>
              <li><strong>Stability</strong> — balance + falls prevention.</li>
              <li><strong>Wide toe box</strong> — bunions / hammer toes.</li>
              <li><strong>Velcro / slip-on</strong> — easier dress.</li>
              <li><strong>Non-slip outsole</strong> — wet weather.</li>
              <li><strong>Light weight</strong> — energy save.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Specialty running stores</strong> — gait analysis.</li>
              <li><strong>Fleet Feet, Road Runner</strong>.</li>
              <li><strong>Zappos</strong> — free returns 365 days.</li>
              <li><strong>Amazon</strong> — Prime returns.</li>
              <li><strong>DSW</strong> — try in store.</li>
              <li>Try on afternoon — feet swell.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to replace</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Every 500 miles or 6 months.</li>
              <li>Walk 30 min/day = 6 months.</li>
              <li>Cushion compresses — joint pain.</li>
              <li>Tread worn = falls risk.</li>
              <li>Don&apos;t wait for breakdown.</li>
              <li>Track on phone or calendar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Foot health flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pain after walks — see podiatrist.</li>
              <li>Bunions worsening = surgery option.</li>
              <li>Plantar fasciitis = orthotic insoles.</li>
              <li>Swelling = compression socks.</li>
              <li>Diabetic feet = special shoes.</li>
              <li>Custom orthotics = covered Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Diabetic shoes</h3>
            <p className="text-sm text-muted-foreground">Medicare covers 1 pair therapeutic shoes per year for diabetics. Need prescription. Custom-fitted. Prevent foot ulcers + amputations. Apexfoot, Drew Shoe, Aetrex. Diabetic ed nurse can refer. Save $200+ annually. Sign up via Medicare.gov.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
