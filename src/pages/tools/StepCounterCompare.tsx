import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

const DEVICES = [
  { name: 'iPhone Health (free, built-in)', cost: 'FREE', best: 'Already counts steps. Open Health app, tap Walking + Running Distance.', good: 'Best free.' },
  { name: 'Fitbit Inspire 3', cost: '$100', best: 'Slim band. 10-day battery. Sleep, heart rate, steps. Senior favorite.', good: 'Best basic tracker.' },
  { name: 'Apple Watch SE', cost: '$249', best: 'Tracks everything + falls + heart + ECG. Daily charge.', good: 'Best smartwatch.' },
  { name: 'Garmin Vivosmart 5', cost: '$150', best: 'Long battery (7 days). Solid health tracking. Less smart features.', good: 'Best Garmin.' },
  { name: 'Old-school pedometer', cost: '$10-25', best: 'Clip-on, mechanical or basic digital. No phone needed. Last forever.', good: 'Best for non-tech.' },
];

export default function StepCounterCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Step Counter Compare | TekSure" description="iPhone Health, Fitbit, Apple Watch, basic pedometer. Plain-English picks for tracking your daily steps as a senior." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Step Counter Compare</h1>
          <p className="text-lg text-muted-foreground">Tracking matters more than the device.</p>
        </div>

        <div className="space-y-3 mb-6">
          {DEVICES.map(d => (
            <Card key={d.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{d.name}</h3>
                  <span className="text-sm font-semibold text-primary">{d.cost}</span>
                </div>
                <p className="text-sm">{d.best}</p>
                <p className="text-sm text-muted-foreground">{d.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How many steps?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The "10,000 steps" rule was a 1960s Japanese marketing campaign — not science.</li>
              <li>Recent research: <strong>4,400 steps/day cuts mortality 41%</strong> (women 70+).</li>
              <li>Sweet spot: 7,000-8,000 steps for full health benefits.</li>
              <li>Above 10,000 = diminishing returns.</li>
              <li>Even 2,000-3,000 vs 1,000 makes huge difference.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy ways to add steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Park at the FAR end of grocery lot.</li>
              <li>Walk after every meal — 10 min each. 30 min/day.</li>
              <li>Take phone calls walking around the room.</li>
              <li>Commercials = walk to kitchen.</li>
              <li>Walking groups at malls (winter), parks (summer).</li>
              <li>"Step it up" with a friend — accountability.</li>
              <li>Stairs instead of elevator when safe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Walking communities</h3>
            <p className="text-sm text-muted-foreground"><strong>Mall walking</strong> — almost every mall has free senior walking program before stores open. Climate-controlled. Free coffee at some malls. Search "[your city] mall walking program". Best free social fitness for 60+.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
