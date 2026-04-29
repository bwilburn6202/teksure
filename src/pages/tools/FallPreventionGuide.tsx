import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function FallPreventionGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fall Prevention Guide for Seniors | TekSure" description="Reduce fall risk at home. Plain-English checklist for seniors — lighting, rugs, bathroom, exercises." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fall Prevention</h1>
          <p className="text-lg text-muted-foreground">1 in 4 seniors falls each year. Prevent it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top home hazards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Loose rugs — tape down or remove.</li>
              <li>Dim hallways — add motion-sensor night lights ($15 set of 6).</li>
              <li>Wet bathroom floors — non-slip mat + grab bars.</li>
              <li>Cluttered floors — clear walking paths.</li>
              <li>Long pet leashes / tangled cords.</li>
              <li>Stairs without handrails — install both sides.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bathroom upgrades ($50-300)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grab bars (not towel bars) — $20-40 each.</li>
              <li>Shower bench — $40-100.</li>
              <li>Raised toilet seat — $30-60.</li>
              <li>Non-slip bath mat — $15.</li>
              <li>Walk-in tub if budget allows ($2-10K).</li>
              <li>Medicare may cover with doctor prescription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Strength + balance exercises</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tai Chi — proven to reduce falls 30%+.</li>
              <li>Sit-to-stands — 10 reps, 2x/day.</li>
              <li>Heel-to-toe walking — 20 steps daily.</li>
              <li>Single-leg stand (hold counter) — 30 sec each leg.</li>
              <li>Silver Sneakers (free with most Medicare Advantage).</li>
              <li>YMCA fall-prevention classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medical fall risks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual eye exam — vision changes cause falls.</li>
              <li>Annual hearing test — balance + hearing linked.</li>
              <li>Review meds with pharmacist — many cause dizziness.</li>
              <li>Vitamin D check — low D = weaker bones.</li>
              <li>Blood pressure when standing — orthostatic drop = fall risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tech that helps</h3>
            <p className="text-sm text-muted-foreground"><strong>Apple Watch fall detection</strong> — auto-calls 911 + emergency contacts. <strong>Medical alert pendants</strong> (Lively, Medical Guardian) — $20-40/mo. <strong>Ring/Nest cameras</strong> — family can check in. See /tools/medical-alert-comparison.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
