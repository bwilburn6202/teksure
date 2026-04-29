import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

const PICKS = [
  { name: 'Schwinn IC4 + Peloton App', cost: '$700 + $13/mo', best: 'Same Peloton classes, half the bike cost.', good: 'Best value.' },
  { name: 'Echelon EX-3 Smart Connect', cost: '$1,000', best: 'Mirror app + leaderboards. Cheaper than Peloton.', good: 'Best Peloton-like.' },
  { name: 'Bowflex Max Trainer M6', cost: '$1,400', best: 'Joint-friendly elliptical-bike combo.', good: 'Best joint-friendly.' },
  { name: 'NuStep Recumbent', cost: '$1,500-3,000', best: 'Senior-specific. Used in rehab clinics.', good: 'Best for seniors.' },
  { name: 'Resistance bands + free YouTube', cost: '$30', best: 'Sit + work full body. Free senior workouts.', good: 'Best budget.' },
];

export default function PelotonAlternatives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Peloton Alternatives for Seniors | TekSure" description="Save thousands on home fitness. Plain-English Peloton alternatives for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Peloton Alternatives</h1>
          <p className="text-lg text-muted-foreground">Same workouts. Half the price.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">Peloton App without Peloton bike</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Peloton App — $13/mo. Use ANY bike + treadmill.</li>
              <li>Get classes from instructors.</li>
              <li>Strength, yoga, meditation, walking too.</li>
              <li>Save $1,500+ vs Peloton bike.</li>
              <li>30-day free trial.</li>
              <li>Many seniors use phone/tablet on cheap bike.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FREE senior fitness</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SilverSneakers</strong> — FREE with most Medicare Advantage. Online + in-person.</li>
              <li><strong>Renew Active</strong> — UnitedHealthcare benefit. FREE.</li>
              <li><strong>Get Set Up</strong> — free senior classes.</li>
              <li><strong>YouTube</strong> — search &quot;senior fitness Yes2Next&quot; or &quot;chair yoga.&quot;</li>
              <li><strong>SeniorFitnessTV</strong> on YouTube.</li>
              <li><strong>HASfit</strong> — many senior workouts free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best home equipment senior</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Resistance bands</strong> ($30) — full body workout, low impact.</li>
              <li><strong>5-10 lb dumbbells</strong> ($50) — strength essential.</li>
              <li><strong>Yoga mat</strong> ($30) — floor exercises + stretching.</li>
              <li><strong>Recumbent bike</strong> — easier on back than upright.</li>
              <li><strong>Foam roller</strong> ($15) — stretching aid.</li>
              <li>Total under $200 for full home gym.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Strength matters most</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cardio gets attention — strength prevents falls.</li>
              <li>Lift weights 2-3x/week — even light weights.</li>
              <li>Sit-to-stand 10-15x = leg strength.</li>
              <li>Wall pushups for upper body.</li>
              <li>Resistance bands for arms.</li>
              <li>Maintains independence in 70s, 80s, 90s.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">YMCA + Senior Centers</h3>
            <p className="text-sm text-muted-foreground">Many YMCAs offer senior memberships $30-50/mo. Pool + classes + sauna. Free with most Medicare Advantage. Senior centers often have free fitness classes. Group exercise = social + health. More fun than home alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
