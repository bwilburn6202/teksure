import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

const APPS = [
  { name: 'YouTube — &quot;[task] tutorial&quot;', cost: 'FREE', best: 'Free DIY video for almost any home task. Search "how to replace garbage disposal".', good: 'Best free.' },
  { name: 'Houzz', cost: 'FREE / $13/mo Pro', best: 'Inspiration + photos for every room. Save ideas. Find local pros.', good: 'Best for inspiration.' },
  { name: 'Magicplan', cost: 'FREE / $10/mo Premium', best: 'Scan a room with phone — get floor plan + measurements.', good: 'Best for floor plans.' },
  { name: 'iHandy Carpenter / Bubble Level', cost: 'FREE', best: 'Built-in iPhone Compass app has level. Or free third-party.', good: 'Best free tools.' },
  { name: 'Color Snap (Sherwin-Williams)', cost: 'FREE', best: 'Photograph any object, find matching paint color.', good: 'Best for paint match.' },
  { name: 'Home Depot / Lowes apps', cost: 'FREE', best: 'Find products, prices, in-store availability. Project guides included.', good: 'Best for shopping.' },
];

export default function HomeImprovementApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Improvement Apps | TekSure" description="DIY tutorials, floor planners, paint matchers. Plain-English picks for free apps that save trips to the hardware store." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Improvement Apps</h1>
          <p className="text-lg text-muted-foreground">DIY without leaving your couch.</p>
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
            <h2 className="font-bold text-xl mb-3">Best YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>This Old House</strong> — pro-quality, decades of expertise.</li>
              <li><strong>Home RenoVision DIY</strong> — Jeff teaches like a buddy.</li>
              <li><strong>Honest Carpenter</strong> — pro carpenter explains both sides.</li>
              <li><strong>HouseImprovements</strong> — Shannon Pleau, easy explanations.</li>
              <li><strong>Engineer Builds</strong> — for newer homes &amp; tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When DIY is great</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Painting (any room).</li>
              <li>Replacing faucet aerators, showerheads.</li>
              <li>Caulking around tub, sink.</li>
              <li>Patching small holes in drywall.</li>
              <li>Replacing toilet flapper or fill valve.</li>
              <li>Installing curtain rods, picture hooks.</li>
              <li>Replacing electrical outlet covers.</li>
              <li>Tightening loose hinges, knobs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t DIY</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Electrical inside walls — fire risk.</li>
              <li>Gas line work — explosion risk.</li>
              <li>Major plumbing — water damage.</li>
              <li>Roof work — falls.</li>
              <li>Asbestos / lead removal.</li>
              <li>Anything requiring a permit (call assessor first).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free in-store classes</h3>
            <p className="text-sm text-muted-foreground">Home Depot + Lowes both run FREE in-store classes — paint, plumbing, basic electrical. Saturday mornings. Hands-on. Perfect for seniors who want to learn before buying tools.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
