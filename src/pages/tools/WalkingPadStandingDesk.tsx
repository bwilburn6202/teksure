import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

const PICKS = [
  { name: 'WalkingPad C2', price: '$400-500', best: 'Foldable walking pad. Slides under bed/sofa when done. 3-4 mph max — for walking, not running.', good: 'Best home walking pad.' },
  { name: 'Lifespan TR1200-DT5', price: '$1,300', best: 'Real treadmill desk. Walk while you work. 4 mph max, sturdy.', good: 'Best for serious daily use.' },
  { name: 'UPLIFT V2 Standing Desk', price: '$600-1,000', best: 'Top-rated standing desk. Goes up/down with motor. Adjustable from sit to standing tall.', good: 'Best premium standing desk.' },
  { name: 'FlexiSpot E7 / E8', price: '$300-500', best: 'Solid mid-range standing desk. Quieter than older models.', good: 'Best value.' },
  { name: 'Standing desk converter', price: '$150-300', best: 'Sits on TOP of your existing desk. Crank up/down. Cheaper than full standing desk.', good: 'Best if you don\'t want to replace existing desk.' },
  { name: 'Anti-fatigue mat', price: '$30-80', best: 'Cushioned mat for under-desk feet. Reduces fatigue from standing.', good: 'Essential add-on.' },
];

export default function WalkingPadStandingDesk() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walking Pad & Standing Desk Picker | TekSure" description="Walk while you work, stand while you read. Plain-English picks for walking pads, standing desks, and converters — for at-home active living." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Pad & Standing Desk</h1>
          <p className="text-lg text-muted-foreground">10,000 steps / day from home — without leaving your office.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters at 60+</h2>
            <p className="text-sm">Sitting all day is tied to higher heart disease, diabetes, and dementia risk — even if you exercise on weekends. Combining walking and standing breaks during the day adds 30-90 minutes of light movement, which independent research links to longer healthier life.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to actually use them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Walking pad while watching TV</strong> — perfect afternoon news routine.</li>
              <li><strong>Walk during phone calls</strong> — 30-min calls = 1.5+ miles.</li>
              <li><strong>Standing desk</strong> — alternate every 30-60 min between sitting and standing. Don\'t stand all day.</li>
              <li><strong>Walk while reading on Kindle</strong> — 1.5-2 mph is slow enough to read.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don\'t buy if</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You don\'t have a quiet, dedicated space.</li>
              <li>You won\'t actually use it daily — better to walk outside.</li>
              <li>Balance issues — talk to PT first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">If you have a recliner — get a $400 WalkingPad and set it up in front of your TV. Walk 30 min while watching the evening news every day. Adds 1.5+ miles. Easy to maintain. Big health benefit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
