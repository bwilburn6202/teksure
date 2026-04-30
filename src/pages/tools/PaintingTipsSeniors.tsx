import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Paintbrush } from 'lucide-react';

export default function PaintingTipsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Painting Tips for Senior DIY | TekSure" description="Paint room without back pain. Plain-English painting guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Paintbrush className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Painting for Seniors</h1>
          <p className="text-lg text-muted-foreground">Refresh room. Save your back.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to hire</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Whole house = hire ($2K-5K).</li>
              <li>Cathedral ceilings = hire (ladder safety).</li>
              <li>Exterior = always hire.</li>
              <li>Single room = DIY-able.</li>
              <li>Bathroom or accent wall = easy DIY.</li>
              <li>Ladder use over 6 ft — hire.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior DIY easier</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Extension pole</strong> — paint from floor.</li>
              <li><strong>Light roller</strong> — less arm fatigue.</li>
              <li><strong>Edger tools</strong> — paint without trim brush.</li>
              <li><strong>Cordless paint sprayer</strong> for big rooms.</li>
              <li><strong>Drop cloths</strong> on furniture + floor.</li>
              <li><strong>Painter&apos;s tape</strong> for clean lines.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best paint</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sherwin-Williams (premium).</li>
              <li>Behr Marquee (Home Depot).</li>
              <li>Benjamin Moore (premium).</li>
              <li>Skip cheapest — covers poorly = more coats.</li>
              <li>Eggshell or satin most rooms.</li>
              <li>Semi-gloss kitchens + bathrooms.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Paint when alone — no rush.</li>
              <li>2-3 days per room realistic.</li>
              <li>Take breaks every 30 min.</li>
              <li>Stay hydrated.</li>
              <li>Open windows.</li>
              <li>Wear comfortable old clothes.</li>
              <li>Eye protection (drips).</li>
              <li>Knee pads for low painting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleanup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Latex paint cleans with water.</li>
              <li>Brushes — soak in water, work out paint.</li>
              <li>Don&apos;t pour paint down drain.</li>
              <li>Solid paint disposable.</li>
              <li>Liquid paint — recycle programs.</li>
              <li>Roller covers usually toss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hiring help</h3>
            <p className="text-sm text-muted-foreground"><strong>Angi.com</strong>, <strong>Thumbtack</strong> — find painters. <strong>HomeAdvisor</strong>. <strong>TaskRabbit</strong> — for small jobs. Get 3 quotes. Senior discount sometimes. Insured + bonded essential. $40-60/hour typical. Worth it for big projects.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
