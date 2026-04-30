import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function AdaptiveKitchenTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adaptive Kitchen Tools for Seniors | TekSure" description="Tools for arthritis + low vision + weak grip. Plain-English picks for senior kitchen." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adaptive Kitchen Tools</h1>
          <p className="text-lg text-muted-foreground">Cook independently with the right gear.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Jar + bottle openers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>EZ Off Jar Opener</strong> — $15. Mounts under cabinet.</li>
              <li><strong>Black &amp; Decker Lids Off</strong> — electric, $40.</li>
              <li><strong>Strap wrench</strong> — $10. Best for stuck lids.</li>
              <li><strong>Rubber jar grippers</strong> — $5.</li>
              <li><strong>Hamilton Beach Open Ease</strong> — auto can opener.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy-grip utensils</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>OXO Good Grips</strong> — fat handles, soft grip. Whole line.</li>
              <li><strong>Ergo Chef pizza cutter</strong> — easier than rolling cutter.</li>
              <li><strong>Built-up handle utensils</strong> — for forks/spoons.</li>
              <li><strong>Weighted utensils</strong> — Parkinson&apos;s/tremor help.</li>
              <li><strong>Spring-loaded scissors</strong> — auto-open.</li>
              <li><strong>Easy Pull can opener</strong> — gentle squeezing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Low vision aids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Talking measuring cup</strong> — announces ounces.</li>
              <li><strong>Talking timer</strong> — speaks countdown.</li>
              <li><strong>Bump dots</strong> — touch markers on stove/microwave dials.</li>
              <li><strong>High-contrast cutting board</strong> — black + white sides.</li>
              <li><strong>Large-print measuring spoons + cups</strong>.</li>
              <li><strong>LED under-cabinet lighting</strong> — better visibility.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reduce bending + reaching</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lazy susans for cabinets.</li>
              <li>Pull-down shelf hardware (rev-a-shelf).</li>
              <li>Raised dishwasher install (or drawer dishwasher).</li>
              <li>Counter-height cooking — no bending to oven.</li>
              <li>Reacher tool for top shelves.</li>
              <li>Stool with wheels (kitchen scooter).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety + assistance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stove auto-shutoff (FireAvert, $130 — auto turns off if you forget).</li>
              <li>Anti-fatigue floor mats.</li>
              <li>Burn-resistant oven mitts that go up arm.</li>
              <li>Tilted kettle — pour without lifting full weight.</li>
              <li>Knife block with safety lock.</li>
              <li>Cutting board with measurement guides.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to buy</h3>
            <p className="text-sm text-muted-foreground"><strong>OXO Good Grips</strong> — best ergonomic line. <strong>Maxi-Aids</strong> (maxiaids.com) — adaptive products specialist. <strong>Performance Health</strong> — therapy + adaptive. <strong>Amazon</strong> — &quot;adaptive kitchen&quot; search. Occupational Therapist can recommend specific tools — Medicare may cover OT consult.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
