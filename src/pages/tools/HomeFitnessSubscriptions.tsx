import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

const SERVICES = [
  { name: 'Apple Fitness+', cost: '$10/mo or in Apple One', best: 'Best video quality. Yoga, walking, pilates, strength, meditation. Best on Apple TV with Apple Watch — heart rate shows on screen.', good: 'Free 3 months with new Apple Watch.' },
  { name: 'Peloton App One ($13/mo)', cost: '$13/mo (no bike)', best: 'World-class instructors. Walking classes, yoga, strength, cardio, meditation.', good: 'Don\'t need a Peloton bike.' },
  { name: 'iFIT', cost: '$15-39/mo', best: 'Trainer-led runs and rides through real-world locations. Pairs with NordicTrack treadmills.', good: 'Best for treadmill walking with views.' },
  { name: 'Hinge Health', cost: 'FREE if covered by your insurance', best: 'Specifically for back, knee, joint pain. Real PT therapists. Sensors track your form. Many big employers and insurers cover it.', good: 'Often missed — check your benefits.' },
  { name: 'Omada Health', cost: 'FREE if covered', best: 'Diabetes prevention/management programs. Personal coach + scale + tracking.', good: 'Many insurance plans cover for at-risk members.' },
  { name: 'YMCA Y360', cost: 'FREE for members', best: 'On-demand workouts from local YMCAs. Senior-specific.', good: 'YMCA membership is often $40-60/month.' },
  { name: 'YouTube Premium', cost: '$14/mo', best: 'Ad-free YouTube. Combine with free fitness channels: Yoga With Adriene, Bob & Brad PT, SilverSneakers.', good: 'Cheaper than fitness apps for casual use.' },
];

export default function HomeFitnessSubscriptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Fitness Subscriptions — Apple Fitness+, Peloton, iFIT | TekSure" description="Workout from home with on-demand video. Plain-English picks for fitness subscriptions, plus FREE alternatives that work just as well." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Fitness Subscriptions</h1>
          <p className="text-lg text-muted-foreground">Real workouts in your living room. Often free through insurance.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm mb-1">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Stream on the BIGGEST screen you have — TV is best, tablet 2nd, phone last.</li>
              <li>Cast from phone to Apple TV, Roku, Chromecast, or Fire TV.</li>
              <li>Wear comfortable clothes you can move in.</li>
              <li>Yoga mat ($15-30) — best $20 you\'ll spend.</li>
              <li>Light dumbbells (3, 5, 8 lbs) cover most strength workouts. Total $30-50.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives that work great</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Yoga With Adriene</strong> — free on YouTube. Best yoga teacher on the internet.</li>
              <li><strong>SilverSneakers GO (free with most Medicare Advantage)</strong> — full senior fitness library.</li>
              <li><strong>HASfit YouTube</strong> — free strength, walking, and senior workouts.</li>
              <li><strong>Bob & Brad Physical Therapists</strong> — free on YouTube. Genuinely useful for back, knee, shoulder issues.</li>
              <li><strong>Walk at Home with Leslie Sansone</strong> — classic. Free episodes on YouTube.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">Try Apple Fitness+ free trial OR a week of YouTube\'s "yoga for seniors". 7 days will tell you if you like the format. Then pick the cheapest one that fits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
