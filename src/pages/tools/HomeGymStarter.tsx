import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';

export default function HomeGymStarter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Home Gym Starter | TekSure" description="Build a senior-friendly home gym in $200-500. Plain-English picks for resistance bands, dumbbells, and what to skip." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dumbbell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Home Gym Starter</h1>
          <p className="text-lg text-muted-foreground">$200 buys real fitness.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">$200 starter kit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Resistance bands set</strong> ($30) — 5 levels, door anchor.</li>
              <li><strong>Adjustable dumbbells (2-25 lbs)</strong> ($80) — Bowflex 552 or Powerblock.</li>
              <li><strong>Yoga mat</strong> ($25) — for floor exercises.</li>
              <li><strong>Sturdy chair</strong> — already have. For balance, sit-to-stand.</li>
              <li><strong>Wall counter</strong> — already have. For balance support.</li>
              <li><strong>Foam roller</strong> ($25) — back &amp; muscle release.</li>
              <li><strong>Pulse oximeter</strong> ($25) — track during exercise.</li>
              <li><strong>Stopwatch / phone timer</strong> — already have.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily 20-minute routine</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Warm-up — 3 min walking in place.</li>
              <li>Strength (10 min):
                <ul className="list-disc pl-5 mt-1">
                  <li>10 sit-to-stands</li>
                  <li>10 wall pushups</li>
                  <li>15 bicep curls (each arm)</li>
                  <li>15 overhead presses</li>
                  <li>10 standing rows (resistance band)</li>
                </ul>
              </li>
              <li>Balance (5 min):
                <ul className="list-disc pl-5 mt-1">
                  <li>Heel-toe walk</li>
                  <li>10-second single-leg stand each side</li>
                </ul>
              </li>
              <li>Stretch (2 min) — hamstrings, calves, shoulders.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip these (waste money)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Treadmills — knees and price. Walk outside or mall.</li>
              <li>Peloton bike — $1,500 + $44/mo. Stationary bike at YMCA does same.</li>
              <li>Big home gyms — collect dust.</li>
              <li>Vibration plates — research is mixed.</li>
              <li>Ab machines — ineffective alone.</li>
              <li>Anything that promises "as seen on TV" miracle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add-ons if budget allows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bowflex Max Trainer</strong> — best low-impact cardio. $1,200.</li>
              <li><strong>Stationary bike</strong> — $200-500 basic, $1,500+ Peloton-class.</li>
              <li><strong>Recumbent bike</strong> — easiest on back/knees.</li>
              <li><strong>Rowing machine</strong> — full-body, low-impact.</li>
              <li><strong>Adjustable bench</strong> — $80-150.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free is best</h3>
            <p className="text-sm text-muted-foreground">Your YMCA via SilverSneakers is FREE with most Medicare Advantage. Pool, weights, classes, social. Beats any home gym for total benefit. Build basics at home + go YMCA 2-3 times/week.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
