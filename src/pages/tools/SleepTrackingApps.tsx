import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

const APPS = [
  { name: 'Apple Watch / iPhone Sleep tracking', cost: 'FREE if you have these', best: 'Watch tracks sleep stages, heart rate, blood oxygen overnight. iPhone Health app shows trends.', good: 'Best built-in option.' },
  { name: 'Oura Ring', cost: '$300 + $6/mo', best: 'Wearable RING. Tracks sleep, recovery, heart rate, body temp. Ring is far more comfortable than a watch.', good: 'Premium experience. Subscription required for full data.' },
  { name: 'Whoop', cost: '$30/mo (band included)', best: 'Subscription model. Strong recovery focus. Popular with athletes but useful for retirees too.', good: 'No upfront cost — band swap included.' },
  { name: 'Fitbit (Charge, Versa)', cost: '$100-300', best: 'Sleep tracking, steps, heart rate. Cheaper than Apple Watch.', good: 'Premium subscription nudges but not required.' },
  { name: 'Sleep Cycle', cost: 'Free; $30/yr', best: 'Phone-only — uses microphone to track sleep. Smart alarm wakes you at the lightest sleep moment.', good: 'No watch needed.' },
  { name: 'AutoSleep (iPhone)', cost: '$5 once', best: 'Better Apple Watch sleep analysis than the built-in app.', good: 'For Apple Watch users wanting more detail.' },
];

export default function SleepTrackingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sleep Tracking Apps & Devices — Better Sleep Through Data | TekSure" description="Apple Watch, Oura Ring, Fitbit, sleep apps. Plain-English picks for tracking your sleep — and what to do with the data." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sleep Tracking</h1>
          <p className="text-lg text-muted-foreground">Find out why you wake up tired — and fix it.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What sleep tracking can tell you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sleep duration</strong> — most adults need 7-8 hours. Less is linked to a long list of health problems.</li>
              <li><strong>Sleep stages</strong> — light, deep, REM. Deep sleep matters most for body recovery.</li>
              <li><strong>Resting heart rate</strong> — rises with stress, illness, alcohol.</li>
              <li><strong>Breathing disturbances</strong> — apnea signals (Apple Watch Series 9+).</li>
              <li><strong>Oxygen saturation</strong> — drops can indicate apnea.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps for actually FALLING asleep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Calm</strong> — sleep stories, music, breathing exercises.</li>
              <li><strong>Headspace</strong> — same idea.</li>
              <li><strong>Insight Timer (free)</strong> — biggest free library of guided sleep meditations.</li>
              <li><strong>White Noise Lite (free)</strong> — fan sounds, rain, ocean. Drowns out neighbor noise.</li>
              <li><strong>Spotify "sleep" playlists</strong> — search "rain", "8 hours sleep music".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If your tracker shows poor sleep</h2>
            <p className="text-sm">Don\'t just buy more gadgets. The biggest fixes are basic:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Same bedtime every night, even weekends.</li>
              <li>No screens in bed. Phone charges in another room.</li>
              <li>Cool room (65-68°F).</li>
              <li>No alcohol within 3 hours of bed.</li>
              <li>No big meals within 2 hours of bed.</li>
              <li>Morning sunlight 10 minutes — sets your body clock.</li>
              <li>If your tracker repeatedly shows snoring, low oxygen, or many wake-ups — talk to your doctor about sleep apnea testing. Treatable, life-changing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don\'t become orthosomniac</h3>
            <p className="text-sm text-muted-foreground">Yes, that\'s a real word — anxiety about sleep tracking data hurting your sleep. If checking your sleep score makes you anxious, just stop checking it for a few weeks. Trackers are tools, not judgment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
