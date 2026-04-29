import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

const APPS = [
  { name: 'Calm', cost: '$70/yr', best: 'Sleep stories (Matthew McConaughey reads to you). Most popular.', good: 'Best stories.' },
  { name: 'Headspace', cost: '$70/yr', best: 'Sleep meditations + sleepcasts.', good: 'Best for meditation.' },
  { name: 'Apple Health Sleep', cost: 'FREE (built-in)', best: 'Tracks sleep with Apple Watch. Bedtime + Wind Down routines.', good: 'Best free for iPhone.' },
  { name: 'Sleep Cycle', cost: '$30/yr', best: 'Tracks sleep stages without watch — uses phone mic.', good: 'Best without watch.' },
  { name: 'YouTube — Sleep Sounds', cost: 'FREE', best: '8-hour rain, ocean, fan loops. Free. Just play on speaker.', good: 'Best free.' },
];

export default function SleepHygieneApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sleep Apps for Seniors | TekSure" description="Calm, Headspace, Apple Sleep. Plain-English picks for sleep tracking + bedtime routines for better senior sleep." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sleep Hygiene Apps</h1>
          <p className="text-lg text-muted-foreground">Better sleep at any age.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior sleep tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same bedtime + wake time daily.</li>
              <li>No phone in bed — see /tools/bedtime-phone-routine.</li>
              <li>Cool bedroom (65-68°F).</li>
              <li>Dark + quiet (blackout curtains, white noise).</li>
              <li>No caffeine after noon.</li>
              <li>Limit alcohol — disrupts sleep cycles.</li>
              <li>Daytime exercise = better night sleep.</li>
              <li>Bright morning light (10-15 min outside).</li>
              <li>Naps shorter than 30 min, before 3 PM.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleep apnea — common in seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30-50% of seniors have sleep apnea, often undiagnosed.</li>
              <li>Symptoms: snoring, gasping at night, daytime tiredness, headache morning.</li>
              <li>Untreated = doubles dementia + heart disease risk.</li>
              <li>Ask doctor for sleep study.</li>
              <li>CPAP + dental appliance treatment options.</li>
              <li>Medicare covers sleep study.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If app helps — great. If it stresses — skip</h3>
            <p className="text-sm text-muted-foreground">Some seniors get anxious tracking sleep ("orthosomnia"). If app makes you more anxious about sleep — STOP using. Many sleep best with no tracking. Trust how you feel in morning.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
