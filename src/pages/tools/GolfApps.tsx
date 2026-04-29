import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Goal } from 'lucide-react';

const APPS = [
  { name: 'Golfshot', cost: 'Free; $30/yr Pro', best: 'GPS yardages on your phone. Track scores. Stats. Voice yardages.', good: 'Most popular all-in-one.' },
  { name: 'Hole19', cost: 'Free; $40/yr Premium', best: 'Beautiful interface. Pinpoint GPS. Strong free version.', good: 'Best free pick.' },
  { name: '18Birdies', cost: 'Free; $90/yr', best: 'Includes swing video review with AI tips.', good: 'Best for swing improvement.' },
  { name: 'Garmin Approach G80 / R10', price: '$200-600', best: 'Real launch monitor. Practice at home or range.', good: 'For serious improvement.' },
  { name: 'Bushnell rangefinder', price: '$200-500', best: 'Laser yardage to flag. More accurate than GPS apps.', good: 'Best dedicated rangefinder.' },
  { name: 'Apple Watch + Hole19', cost: 'Free with Apple Watch + app', best: 'GPS yardages on wrist. Free if you have a watch.', good: 'Best phone-free option.' },
  { name: 'TheGrint', cost: 'Free; $30/yr', best: 'Free USGA-style handicap tracking. Posts scores automatically.', good: 'Best for tracking handicap.' },
];

export default function GolfApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Golf Apps for Seniors — Rangefinders, Score, Handicap | TekSure" description="GPS yardages, score tracking, handicap, swing analysis. Plain-English picks for golf apps and devices that improve your game." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Goal className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Golf Apps</h1>
          <p className="text-lg text-muted-foreground">Lower scores, faster rounds, free handicap.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost ?? a.price}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For different needs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Just yardages</strong> → Hole19 free or Golfshot free.</li>
              <li><strong>Track score + stats</strong> → Golfshot or 18Birdies.</li>
              <li><strong>Real handicap</strong> → TheGrint (free) or USGA GHIN ($45/yr).</li>
              <li><strong>Swing improvement</strong> → Garmin R10 launch monitor for home practice.</li>
              <li><strong>On-course rangefinder</strong> → Bushnell laser. Faster than apps for "how far to the pin?".</li>
              <li><strong>Pickleball</strong> → "Pickleball+" app for finding courts and rules.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch / Garmin watch features</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Yardages without taking phone out of pocket.</li>
              <li>Score input via voice ("4" → next hole).</li>
              <li>Heart rate during round.</li>
              <li>Steps walked — surprising at end of round.</li>
              <li>Garmin Approach S62 — golf-specific watch with full course maps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior tee discounts</h3>
            <p className="text-sm text-muted-foreground">Most courses offer senior rates (often 20-30% off). Some offer "twilight" rates after 2-3 PM. GolfNow app shows discounted tee times. Many private clubs offer senior memberships at 50%+ off — ask.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
