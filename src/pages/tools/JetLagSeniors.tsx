import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function JetLagSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jet Lag Recovery for Seniors | TekSure" description="Beat jet lag faster. Plain-English tips for senior travelers crossing time zones." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jet Lag Recovery</h1>
          <p className="text-lg text-muted-foreground">Hits seniors harder. Recover faster.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors get worse jet lag</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Body clock less flexible with age.</li>
              <li>Less melatonin produced.</li>
              <li>Recovery can take 1 day per timezone.</li>
              <li>Eastward travel hardest (lose time).</li>
              <li>Can disrupt for a week or more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before flight</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shift bedtime 1 hour toward destination, 3 days before.</li>
              <li>Hydrate well 2 days before.</li>
              <li>Light meal day of flight.</li>
              <li>No alcohol night before.</li>
              <li>Set watch to destination time at gate.</li>
              <li>Pick aisle seat for stretches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During flight</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drink 8 oz water/hour. Skip coffee + alcohol.</li>
              <li>Compression socks 15-20 mmHg (prevent clots).</li>
              <li>Walk every 1-2 hours.</li>
              <li>Ankle pumps in seat — 20 each direction every hour.</li>
              <li>Sleep when destination is night.</li>
              <li>Eye mask + earplugs.</li>
              <li>Light snacks, no big meals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After arrival</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get sunlight ASAP — biggest reset signal.</li>
              <li>Eat meals at LOCAL time, not body time.</li>
              <li>Light walks day 1.</li>
              <li>NO long naps — 20 min max.</li>
              <li>Stay up until normal LOCAL bedtime.</li>
              <li>Day 1-3 will feel hardest. Push through.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleep aids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Low-dose melatonin (0.5mg) 30 min before LOCAL bedtime, days 1-3.</li>
              <li>Avoid sleeping pills (fall risk in unfamiliar place).</li>
              <li>Avoid &quot;PM&quot; meds (Tylenol PM, Benadryl) — confusion.</li>
              <li>Talk to doctor before traveling about adjusting medications.</li>
              <li>Diabetics — adjust insulin timing (consult doctor).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apps that help</h3>
            <p className="text-sm text-muted-foreground"><strong>Timeshifter</strong> — personalized jet lag plan. $10/trip. <strong>Jet Lag Rooster</strong> — free web tool. <strong>Calm/Headspace</strong> — sleep meditation. Build extra rest day into trip — don&apos;t plan tours day 1.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
