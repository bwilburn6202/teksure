import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

const APPS = [
  { name: 'Sherwin-Williams ColorSnap Visualizer', cost: 'FREE', best: 'Snap any photo, find matching SW paint. AR mode shows wall in your room.', good: 'Best free.' },
  { name: 'Behr Color Smart', cost: 'FREE', best: 'Behr&apos;s app. Try colors in your room with AR.', good: 'Best Behr.' },
  { name: 'Benjamin Moore Color Portfolio', cost: 'FREE', best: 'Premium quality colors. Visualizer + paint samples.', good: 'Best premium colors.' },
  { name: 'Project Color (Home Depot)', cost: 'FREE', best: 'Behr + others at Home Depot. AR room visualization.', good: 'Best Home Depot.' },
  { name: 'Pantone Studio', cost: '$10', best: 'For matching exact colors from objects/photos. Pro-level.', good: 'Best for designers.' },
];

export default function PaintColorApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paint Color Apps — See Before You Buy | TekSure" description="Try paint colors on your walls before painting. Plain-English picks for free AR paint visualizers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Palette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paint Color Apps</h1>
          <p className="text-lg text-muted-foreground">See it on the wall before you buy.</p>
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
            <h2 className="font-bold text-xl mb-3">Match a color you love</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Sherwin-Williams ColorSnap.</li>
              <li>Tap "Match a Photo" or take new photo.</li>
              <li>Tap any spot on the photo.</li>
              <li>App shows closest SW paint color.</li>
              <li>Take to SW or Home Depot — they mix any brand to that color.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly painting tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always order $5 paint samples before buying gallon. Paint a 2&apos;×2&apos; patch, look at it morning/noon/night.</li>
              <li>"Forever neutrals" — Sherwin-Williams Repose Gray, Agreeable Gray, BM Pale Oak, Classic Gray.</li>
              <li>Eggshell finish hides imperfections better than flat.</li>
              <li>Hire painter for ceilings — physically hardest part.</li>
              <li>Even rough sanding = better job.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save the color codes</h3>
            <p className="text-sm text-muted-foreground">Each room you paint, write color name + brand + sheen on a Post-it inside a closet. When time to touch up — easy. Or save in Apple Notes "Paint Colors" page.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
