import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TimerOff } from 'lucide-react';

export default function AdultScreenTimeCoach() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adult Screen Time Coach — Less Phone, More Life | TekSure" description="Spending too much time on the phone? Plain-English steps to set limits on Facebook, news, and games — for yourself, on iPhone or Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TimerOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adult Screen Time Coach</h1>
          <p className="text-lg text-muted-foreground">Set healthy limits — for YOURSELF, not the grandkids.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">Studies show adults over 60 average 4-6 hours daily on phones — much of it on Facebook, news, and games. Cutting that even 30 minutes a day frees up 3+ hours a week. More walks, more reading, more conversation with the spouse.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — See where time goes</h2>
            <p className="text-sm mb-2">Both phones have it built in.</p>
            <p className="font-semibold text-sm">📱 iPhone:</p>
            <p className="text-sm mb-2">Settings → Screen Time → "See All Activity". Shows daily and weekly time per app.</p>
            <p className="font-semibold text-sm">🤖 Android:</p>
            <p className="text-sm">Settings → Digital Wellbeing & parental controls → "Dashboard".</p>
            <p className="text-sm mt-2 bg-muted/50 p-3 rounded">Look at it once. The numbers are usually startling.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Step 2 — Set app limits (iPhone)</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Settings → Screen Time → App Limits → Add Limit.</li>
                <li>Pick a category (Social Networking) or specific apps.</li>
                <li>Set 30 min per day or 1 hr per day.</li>
                <li>When time\'s up, the app dims. You can tap "Ignore" once but it\'s a small friction.</li>
              </ol>
              <h3 className="font-bold text-lg mt-4 mb-3">Step 3 — Downtime</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Settings → Screen Time → Downtime.</li>
                <li>Set 9 PM - 7 AM. Only essential apps (Phone, Messages, Maps, weather) work during downtime.</li>
                <li>Better sleep, less doom-scrolling.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Step 2 — Set app timers (Android)</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Settings → Digital Wellbeing → Dashboard.</li>
                <li>Tap an app → tap the hourglass icon → set a daily limit (15-60 min).</li>
                <li>App goes grayscale and locked when time\'s up.</li>
              </ol>
              <h3 className="font-bold text-lg mt-4 mb-3">Step 3 — Bedtime Mode</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Settings → Digital Wellbeing → Bedtime mode.</li>
                <li>Set 9 PM - 7 AM. Phone goes grayscale and silent.</li>
                <li>Helps sleep. Boring screen at night = you put it down sooner.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other tricks that work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Move "time-suck" apps off your home screen</strong> — into a folder on page 3. Adds a friction step.</li>
              <li><strong>Turn off notifications</strong> for Facebook, news, games. Settings → Notifications → "Off" for each.</li>
              <li><strong>Replace bedtime scrolling</strong> with a Kindle book or audiobook. Both are still tech but more thoughtful.</li>
              <li><strong>Charge your phone OUTSIDE the bedroom.</strong> Buy a real alarm clock. Best single change for sleep.</li>
              <li><strong>Don\'t check the phone for the first 30 min after waking.</strong> Coffee first, news second.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don\'t go cold turkey</h3>
            <p className="text-sm text-muted-foreground">Set a small limit first — 1 hour Facebook a day. Stick to it for 2 weeks. Then tighten if you want. Going from "all day" to "1 hour" overnight rarely sticks.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
