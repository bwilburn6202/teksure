import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

export default function StairSafetyChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stair Safety Checklist for Seniors | TekSure" description="Make stairs safer. Plain-English checklist for seniors: handrails, lighting, stair lifts, and alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListChecks className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stair Safety</h1>
          <p className="text-lg text-muted-foreground">Stairs cause 1M+ ER visits/year for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Essential upgrades</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Handrails BOTH sides — required for safety, not optional.</li>
              <li>Handrails extend past top + bottom step.</li>
              <li>Bright lighting top + bottom (motion sensor).</li>
              <li>Light switch BOTH ends of stairs.</li>
              <li>Non-slip stair treads or carpet runner.</li>
              <li>Contrasting tape on edge of each step (visibility).</li>
              <li>No clutter — never store on stairs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily habits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always use handrail — even when feeling steady.</li>
              <li>One step at a time — both feet on each step if needed.</li>
              <li>Wear shoes/slippers with grip — not socks.</li>
              <li>Don&apos;t carry items that block view of feet.</li>
              <li>Take laundry basket up empty + fill upstairs.</li>
              <li>If dizzy or tired — wait. Sit down.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stair lifts ($2,500-10,000)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Acorn</strong> — most installed. Straight stairs from $2,500.</li>
              <li><strong>Bruno</strong> — premium. Curved stairs $7K-15K.</li>
              <li><strong>Stannah</strong> — UK brand, US dealers.</li>
              <li>Used/refurbished stair lifts — half price, work fine.</li>
              <li>Some Medicaid programs cover; Medicare does NOT.</li>
              <li>VA may cover for veterans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives if stairs become unsafe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Move bedroom to first floor.</li>
              <li>Add downstairs half-bath/full-bath.</li>
              <li>Single-level living next move (ranch home, condo).</li>
              <li>Elevator install ($25K-50K) — last resort.</li>
              <li>Aging-in-place specialist — search via NAHB.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free home assessment</h3>
            <p className="text-sm text-muted-foreground">Many local Area Agencies on Aging do free home safety assessments. Call <strong>Eldercare Locator: 1-800-677-1116</strong>. Occupational therapists can do prescribed home assessment (Medicare may cover with doctor referral).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
