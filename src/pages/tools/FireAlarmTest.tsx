import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function FireAlarmTest() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fire Alarm Test for Seniors | TekSure" description="Smoke + CO detector maintenance. Plain-English senior safety guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fire Alarm Test</h1>
          <p className="text-lg text-muted-foreground">5 min monthly = safety always.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Press TEST button monthly.</li>
              <li>All alarms should beep.</li>
              <li>If silent or weak — replace.</li>
              <li>If chirping randomly — battery dying.</li>
              <li>Battery replace yearly (set time change reminder).</li>
              <li>Replace ALARM every 10 years (date on back).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>10-year sealed lithium</strong> — no battery changes.</li>
              <li><strong>Smart smoke alarms</strong> (Nest Protect) — phone alerts + voice warnings.</li>
              <li><strong>Combination smoke + CO</strong> — covers both.</li>
              <li><strong>Hearing-impaired</strong> — strobe + bed shaker alarms.</li>
              <li>$25-130 each.</li>
              <li>Worth investing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to install</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Every bedroom.</li>
              <li>Outside each sleeping area.</li>
              <li>Each level of home.</li>
              <li>Near kitchen but not too close.</li>
              <li>10 feet from cooking equipment.</li>
              <li>NOT near windows / vents.</li>
              <li>Ceiling or high on wall.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CO detectors essential</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Carbon monoxide silent killer.</li>
              <li>From: gas appliances, generators, fireplace, car running.</li>
              <li>Symptoms: headache, confusion, nausea (flu-like).</li>
              <li>Place near sleeping area + on each level.</li>
              <li>Get out + call 911 if alarm.</li>
              <li>Test monthly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free fire dept services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many fire depts install smoke alarms FREE.</li>
              <li>Test existing alarms.</li>
              <li>Senior priority.</li>
              <li>Call non-emergency line.</li>
              <li>Red Cross also installs free.</li>
              <li>Don&apos;t go without alarms.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior fire prep</h3>
            <p className="text-sm text-muted-foreground">Plan 2 escape routes per room. Practice with family. Phone in bedroom. Number to fire dept programmed. Avoid clutter blocking exits. Keep flashlights bedside. Speed of escape critical for seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
