import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function BackyardSafetyAudit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backyard Safety Audit | TekSure" description="Trip hazards, faulty railings, hidden electrical issues. Plain-English checklist to make your yard safe for seniors and grandkids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backyard Safety Audit</h1>
          <p className="text-lg text-muted-foreground">30-minute walk-through. Prevent the next ER trip.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trip hazards (most falls)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Uneven walkway pavers — re-level or replace.</li>
              <li>Garden hoses across paths — coiled or dropped in beds.</li>
              <li>Tree roots lifting concrete — grind or replace.</li>
              <li>Loose stair treads — tighten or replace.</li>
              <li>Rake/tools on ground — store upright.</li>
              <li>Pet toys after dark — sweep before sundown.</li>
              <li>Leaf piles hiding holes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lighting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Motion-activated lights at all entries (front door, back, side, garage).</li>
              <li>Solar path lights along walkways ($30/4-pack at Costco).</li>
              <li>Photo-cell light on garage / porch — automatic at sunset.</li>
              <li>Replace any burnt-out bulbs (LED lasts 10x longer).</li>
              <li>Step lights on outdoor stairs — non-negotiable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stairs + railings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Handrail on BOTH sides if 3+ steps. Code minimum.</li>
              <li>Test by leaning on it — should not wiggle.</li>
              <li>Outdoor non-slip strips on each step (especially wood, $15).</li>
              <li>Ramps for any step over 6" if mobility is iffy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pool / hot tub safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Self-closing, self-latching gate (code in 47 states).</li>
              <li>Alarm if surface broken when no one&apos;s home.</li>
              <li>"Reach Pole" + life ring near pool.</li>
              <li>Slip-resistant pool deck.</li>
              <li>Cover when not in use.</li>
              <li>Adult supervision at all times when grandkids visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Electrical hazards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Outdoor outlets must be GFCI (test button works).</li>
              <li>Extension cords are TEMPORARY — running across yard for years = fire risk.</li>
              <li>Light fixtures: weatherproofed and not cracked.</li>
              <li>Pool/hot tub electrical: only licensed electrician.</li>
              <li>Bury extension cord runs OR use proper outdoor wiring.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tree + branch hazards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Dead branches over walkways/roof — call arborist.</li>
              <li>Loose limbs after windstorm — clean up before walking under.</li>
              <li>Annual arborist inspection ($75-200) catches problems early.</li>
              <li>Trees within 10 feet of house — keep healthy or remove.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tool storage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sharp tools (saws, shears) hung up + out of weather.</li>
              <li>Gas cans in shed, away from sparks.</li>
              <li>Lawn chemicals locked away (especially with grandkids).</li>
              <li>Ladders flat on ground or locked, NOT leaning against fence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free annual checklist</h3>
            <p className="text-sm text-muted-foreground">Do this audit each spring. Take photos as evidence for insurance + your records. Many homeowner&apos;s policies discount for documented safety improvements.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
