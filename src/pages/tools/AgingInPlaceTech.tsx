import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function AgingInPlaceTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Aging-in-Place Tech | TekSure" description="Tech that helps seniors stay home safely. Plain-English picks for fall sensors, video doorbells, motion lights, and remote monitoring." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Aging-in-Place Tech</h1>
          <p className="text-lg text-muted-foreground">Stay home longer, safer, more connected.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fall prevention + detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Watch SE</strong> ($249) — fall detection, calls 911 if you don&apos;t move.</li>
              <li><strong>Medical Guardian / MobileHelp</strong> — pendant button, $30-50/mo.</li>
              <li><strong>Motion-activated lights</strong> — $20 plug-in for hallways/bathroom.</li>
              <li><strong>Bed-fall sensors</strong> — Apply XSensor, Roselink — $50-200.</li>
              <li><strong>Grab bars + non-slip mats</strong> — most falls are in the bathroom.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart home for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smart doorbell</strong> — see who&apos;s at door from phone. Don&apos;t open for strangers.</li>
              <li><strong>Smart locks</strong> — let in caregiver/family with code, no keys.</li>
              <li><strong>Echo Show</strong> — voice control + video calls + photo frame.</li>
              <li><strong>Smart smoke/CO detectors</strong> — Nest, First Alert. Notify family if alarm.</li>
              <li><strong>Smart plugs</strong> — auto-off space heater after 4 hours (fire prevention).</li>
              <li><strong>Smart thermostat</strong> — family monitors. Warns if home gets too hot/cold.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Remote monitoring (with consent)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Alexa Together</strong> ($20/mo) — caregiver app sees Echo activity (no audio). Fall detection. Emergency button.</li>
              <li><strong>People Power Family</strong> — sensors track door-opens, fridge-opens, motion. Detect changes that suggest a fall.</li>
              <li><strong>CarePredict</strong> — wrist wearable tracks daily routine. Flags changes (skipped meals, wandering).</li>
              <li><strong>Wyze cameras</strong> — $30. Caregiver checks in by video.</li>
              <li>Always discuss BEFORE installing. Never surveillance without consent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medication management</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hero pill dispenser</strong> ($45/mo) — auto-dispenses pills at correct times. Calls family if missed.</li>
              <li><strong>Medisafe app</strong> (free) — phone reminders + family alerts.</li>
              <li><strong>MedMinder pill box</strong> ($40/mo) — locks compartments until time. Beeps + flashes.</li>
              <li><strong>Amazon Pillpack</strong> — pre-sorted by dose time, delivered. Free with most insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connection (most important)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Echo Show / Nest Hub Max</strong> — easy video calls.</li>
              <li><strong>Digital photo frame</strong> — family sends photos, appears automatically.</li>
              <li><strong>GrandPad</strong> — simplified tablet for video calls + photos.</li>
              <li>Schedule weekly recurring video call — same time, same day.</li>
              <li>Loneliness is a bigger health risk than smoking. Tech alone won&apos;t fix it — but it helps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free home assessments</h3>
            <p className="text-sm text-muted-foreground">Many Area Agencies on Aging do FREE in-home safety assessments. They check for fall hazards, suggest grab bars, recommend tech. Eldercare Locator: 1-800-677-1116. AARP HomeFit Guide is also free at aarp.org/homefit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
