import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Glasses } from 'lucide-react';

const SVCS = [
  { name: 'Zenni Optical', cost: 'Frames from $7, full pair $25-50', best: 'Cheapest. Huge selection. 10 days. Senior favorite.', good: 'Best budget.' },
  { name: 'EyeBuyDirect', cost: '$8 frames, full pair $30-80', best: 'Better quality than Zenni. Free try-on photos with face.', good: 'Best mid-range.' },
  { name: 'Warby Parker', cost: '$95-195 full pair', best: 'Try 5 frames at home FREE. Premium feel. Brand recognition.', good: 'Best premium.' },
  { name: 'Costco Optical', cost: '$60-200 full pair', best: 'Best in-person price. Adjust for free.', good: 'Best in-store.' },
  { name: 'Walmart Vision Center', cost: '$50-150', best: 'Cheap + decent. Often $50 frames + lenses.', good: 'Best cheap in-store.' },
  { name: 'Sam&apos;s Club Optical', cost: '$80-200', best: 'Cheaper than Costco for same quality.', good: 'Best for Sam&apos;s members.' },
];

export default function PrescriptionGlassesOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prescription Glasses Online for Seniors | TekSure" description="Zenni, EyeBuyDirect, Warby Parker. Plain-English picks for ordering glasses online — full pair under $50." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Glasses className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prescription Glasses Online</h1>
          <p className="text-lg text-muted-foreground">$300 retail → $40 online.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you need to order</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Current Rx</strong> — written prescription from eye doctor (federal law REQUIRES they give you copy).</li>
              <li><strong>PD (Pupillary Distance)</strong> — distance between pupils. Eye doctor measures, OR measure with ruler + Zenni&apos;s free tool.</li>
              <li><strong>Frame size</strong> — measurements from a frame you like (printed inside arm).</li>
              <li>That&apos;s it.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Progressive lenses online</strong> — Zenni $30, retail $300. Order multiple pairs.</li>
              <li><strong>Reading glasses-only</strong> — for menus, books. Cheap online ($10-20).</li>
              <li><strong>Prescription sunglasses</strong> — bought online for $40 vs $300 retail.</li>
              <li><strong>Anti-glare coating</strong> — $20 add-on. Worth it.</li>
              <li><strong>Computer glasses</strong> — slight Rx for screen distance only.</li>
              <li>Order BACKUP pair — losing only pair = nightmare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When in-store is better</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strong Rx ( -8.0 or higher diopters).</li>
              <li>High-prism lenses.</li>
              <li>Bifocals (lined) — adjustment needed.</li>
              <li>Need same-day glasses.</li>
              <li>Want to try on physically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance</h3>
            <p className="text-sm text-muted-foreground">Vision insurance (VSP, EyeMed) often covers $130-200 frame allowance. Original Medicare does NOT cover routine glasses (only post-cataract surgery). Medicare Advantage often does. Online sites sometimes accept FSA/HSA cards.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
