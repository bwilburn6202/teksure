import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Circle } from 'lucide-react';

const RINGS = [
  { name: 'Oura Ring Gen 4', cost: '$349 + $6/mo', best: 'Best-known smart ring. Sleep, heart rate, temperature, activity. 4-7 day battery.', good: 'Best overall.' },
  { name: 'Samsung Galaxy Ring', cost: '$399, no fee', best: 'No subscription. Works best with Samsung phones. Strong sleep tracking.', good: 'Best value (no fee).' },
  { name: 'Ultrahuman Ring AIR', cost: '$349, no fee', best: 'No subscription. Lighter, thinner. Strong glucose-tracking integration.', good: 'For data lovers.' },
  { name: 'RingConn Gen 2', cost: '$300, no fee', best: 'Cheapest no-subscription option. Sleep, heart, activity. Decent app.', good: 'Best budget.' },
  { name: 'Whoop (band, not ring)', cost: '$30/mo, hardware free', best: 'Worn on wrist. Strain + recovery focused. Athletes love it.', good: 'For workouts.' },
];

export default function WellnessRingPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Rings — Oura, Samsung, Ultrahuman | TekSure" description="Smart rings track sleep, heart rate, and activity without a watch. Plain-English picks for wellness rings worth the money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Circle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Rings</h1>
          <p className="text-lg text-muted-foreground">Wellness tracking on your finger.</p>
        </div>

        <div className="space-y-3 mb-6">
          {RINGS.map(r => (
            <Card key={r.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{r.name}</h3>
                  <span className="text-sm font-semibold text-primary">{r.cost}</span>
                </div>
                <p className="text-sm">{r.best}</p>
                <p className="text-sm text-muted-foreground">{r.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ring vs watch</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ring</strong> — wear 24/7 (including showers, sleep). No screen distractions. 4-7 day battery.</li>
              <li><strong>Watch (Apple Watch, Garmin)</strong> — has screen, calls, texts, fall detection. Daily charge.</li>
              <li>Many people wear both — watch by day, ring by night.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What rings actually track</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sleep</strong> — quality, stages, total hours. Most accurate at this.</li>
              <li><strong>Heart rate</strong> — resting and trends. Heart rate variability (HRV).</li>
              <li><strong>Skin temperature</strong> — useful early sickness/menstrual cycle indicator.</li>
              <li><strong>Activity</strong> — steps, calories. Less accurate than a watch.</li>
              <li><strong>Stress / readiness</strong> — daily score from sleep + HRV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subscription gotcha</h2>
            <p className="text-sm">Oura locks most insights behind a $5.99/month subscription after the first month. Over 5 years, that&apos;s $360 added to the $349 ring. Samsung Galaxy Ring and Ultrahuman are no-subscription. Worth the math.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get the sizing kit first</h3>
            <p className="text-sm text-muted-foreground">Order the FREE sizing kit from any ring brand before buying. Wear the sample for 24 hours. Fingers swell at night and during exercise — pick the size that fits when warm. Wrong size = the ring sits on your nightstand.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
