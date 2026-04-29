import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Waves } from 'lucide-react';

const APPS = [
  { name: 'Apple Watch (built-in)', cost: '$249+', best: 'Tracks pool + open water swims, laps, strokes, calories. Auto-detects.', good: 'Best overall.' },
  { name: 'Garmin Swim 2', cost: '$170', best: 'Pool-only watch. 7-day battery. Simple, focused.', good: 'Best swim-only.' },
  { name: 'MySwimPro app', cost: 'FREE / $7/mo Pro', best: 'Workouts of the day. Custom plans. Pool + open water.', good: 'Best workout library.' },
  { name: 'Speedo Pace Club', cost: 'FREE', best: 'Track + share lap times. From Speedo.', good: 'Best free.' },
  { name: 'Garmin Connect / Apple Health', cost: 'FREE', best: 'Free apps that pair with watches above.', good: 'Best dashboards.' },
];

export default function SwimWorkoutTrackers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Swim Workout Trackers | TekSure" description="Apple Watch, Garmin Swim, MySwimPro. Plain-English picks for tracking pool workouts and senior-friendly swim routines." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Waves className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Swim Workout Trackers</h1>
          <p className="text-lg text-muted-foreground">Joint-friendly cardio. Best exercise for 60+.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why swim for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Zero impact on joints — best for arthritis.</li>
              <li>Full-body cardio + strength.</li>
              <li>Cool, comfortable in summer.</li>
              <li>Helps balance (water resistance).</li>
              <li>Reduces back pain.</li>
              <li>Almost no injuries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to swim cheap</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YMCA</strong> — senior membership $30-50/mo. Many free for SilverSneakers.</li>
              <li><strong>SilverSneakers / Renew Active</strong> — included with many Medicare Advantage. FREE Y/gym access.</li>
              <li><strong>Community pools</strong> — usually $3-5 per swim, $50-100/season pass.</li>
              <li><strong>Senior centers</strong> — many have indoor pools, low-cost.</li>
              <li><strong>Hotel pool</strong> — some hotels sell day passes ($10-25).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly classes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Aqua aerobics</strong> — guided water exercise. Most YMCAs have.</li>
              <li><strong>Aqua zumba</strong> — fun + good cardio.</li>
              <li><strong>Arthritis Foundation Aquatics</strong> — gentlest, designed for arthritis.</li>
              <li><strong>Masters Swimming</strong> — for serious lap swimmers, all levels welcome.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gear</h3>
            <p className="text-sm text-muted-foreground">Speedo or TYR goggles ($15-25). Speedo Endurance suit ($30-50). Cheap kickboard ($15) +pull buoy ($10) — let you focus on legs OR arms. Total: $80 to outfit. Use 5 years easily.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
