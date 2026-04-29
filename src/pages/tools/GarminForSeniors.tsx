import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

const PICKS = [
  { name: 'Garmin Vivoactive 5', cost: '$300', best: 'Best all-around. 11-day battery. Senior-friendly.', good: 'Best overall.' },
  { name: 'Garmin Venu Sq 2', cost: '$200', best: 'Cheaper. Good battery. Touch screen.', good: 'Best budget.' },
  { name: 'Garmin Forerunner 165', cost: '$250', best: 'Running focus. 11-day battery.', good: 'Best for runners.' },
  { name: 'Garmin Fenix 7', cost: '$700', best: 'Premium adventure. Lasts 2 weeks.', good: 'Best premium.' },
  { name: 'Garmin Vivosmart 5', cost: '$150', best: 'Simple band. Great battery.', good: 'Best minimalist.' },
];

export default function GarminForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Garmin Watches for Seniors | TekSure" description="Long-battery alternative to Apple Watch. Plain-English Garmin guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garmin for Seniors</h1>
          <p className="text-lg text-muted-foreground">Long battery + serious health tracking.</p>
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
            <h2 className="font-bold text-xl mb-3">Why Garmin over Apple Watch</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Battery</strong> — 5-14 days vs 1 day Apple Watch.</li>
              <li>Less charging hassle.</li>
              <li>Good even if not iPhone user.</li>
              <li>Excellent GPS tracking for hikers.</li>
              <li>No subscription needed.</li>
              <li>Cheaper for many features.</li>
              <li>Tougher build.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heart rate 24/7.</li>
              <li>Pulse oximeter (oxygen level).</li>
              <li>Sleep tracking.</li>
              <li>Stress monitoring.</li>
              <li>Body Battery (energy reserves).</li>
              <li>Heart Rate Variability (HRV).</li>
              <li>Steps, distance, calories.</li>
              <li>Female health tracking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Incident Detection</strong> — auto-alerts emergency contacts on fall (newer models).</li>
              <li><strong>LiveTrack</strong> — family sees your location during walks/hikes.</li>
              <li><strong>Music</strong> — store on watch.</li>
              <li><strong>Garmin Pay</strong> — tap-to-pay.</li>
              <li><strong>Phone notifications</strong> — see calls/texts.</li>
              <li><strong>Find My Phone</strong> — beep your phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When Garmin best</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hate charging daily.</li>
              <li>Active outdoors (hiking, golfing).</li>
              <li>Don&apos;t use iPhone.</li>
              <li>Need extreme battery for travel.</li>
              <li>Hiking in remote areas (GPS without phone).</li>
              <li>Don&apos;t need cellular calls on watch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple Watch when</h3>
            <p className="text-sm text-muted-foreground">Apple Watch better if: iPhone user, daily city use, want ECG/AFib detection, tight family iCloud integration. Garmin better if: long battery matters, outdoor adventures, Android phone, value over premium. Both excellent for senior health tracking.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
