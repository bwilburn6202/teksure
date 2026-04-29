import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const PICKS = [
  { name: 'Theragun Mini', cost: '$199', best: 'Best portable. Quiet. Pro brand. Senior-friendly grip.', good: 'Best small.' },
  { name: 'Theragun Prime', cost: '$299', best: 'Mid-tier Theragun. 4-hour battery. Bluetooth app guidance.', good: 'Best mid-range.' },
  { name: 'Hypervolt Go 2', cost: '$160', best: 'Theragun&apos;s top competitor. Lighter, quieter, cheaper.', good: 'Best value.' },
  { name: 'Bob and Brad Q2', cost: '$80', best: 'Famous PT YouTubers. Their budget pick. Surprising quality.', good: 'Best budget.' },
  { name: 'Renpho R3', cost: '$70', best: 'Cheapest reliable. Amazon best-seller.', good: 'Best cheap.' },
];

export default function MassageGunPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Massage Gun Picks for Seniors | TekSure" description="Theragun, Hypervolt, budget options. Plain-English picks for percussion massagers — gentle muscle relief for stiffness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Massage Gun Picks</h1>
          <p className="text-lg text-muted-foreground">Sore muscles. Stiff back. 5-min relief.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start on LOWEST setting. Senior skin / muscles are gentler than 25-year-old&apos;s.</li>
              <li>1-2 minutes per area. NOT longer.</li>
              <li>Never on bones — knees, elbows, spine.</li>
              <li>Avoid varicose veins, bruises, recent surgeries.</li>
              <li>Skip if on blood thinners (without doctor OK).</li>
              <li>Use light. Don&apos;t press hard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When NOT to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pacemaker — avoid chest/upper back.</li>
              <li>Recent surgery, fracture, sprain.</li>
              <li>Blood clots / DVT history.</li>
              <li>Severe osteoporosis.</li>
              <li>Pregnancy.</li>
              <li>Open wounds, varicose veins, DVT.</li>
              <li>If unsure — ASK doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stiff shoulders — 1 min each.</li>
              <li>Calf cramps — 1 min each.</li>
              <li>Lower back tension — light pressure, 2 min.</li>
              <li>Quad tightness after long drive.</li>
              <li>Plantar fasciitis (rubber attachment, gentle).</li>
              <li>Pre-walking warmup.</li>
              <li>Post-exercise cooldown.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Alternatives to consider</h3>
            <p className="text-sm text-muted-foreground">Foam roller ($25) does similar for some areas. Heating pad ($25) for chronic tightness. Tens unit ($30) for nerve pain. Real massage therapist ($60-100/hr) better for serious issues. Massage gun is for daily 5-min self-care.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
