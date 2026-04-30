import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Satellite } from 'lucide-react';

const PICKS = [
  { name: 'Starlink (SpaceX)', cost: '$120/mo + $349-549 hardware', best: 'Best satellite. Speeds 50-300 Mbps. Works rural anywhere with sky view.', good: 'Best for true rural.' },
  { name: 'T-Mobile Home Internet', cost: '$50-70/mo', best: 'Cellular-based. Strong if T-Mobile coverage exists in your area.', good: 'Best non-satellite rural pick.' },
  { name: 'Verizon LTE / 5G Home Internet', cost: '$50-80/mo', best: 'Cellular alternative.', good: 'Solid where Verizon signal is strong.' },
  { name: 'AT&T Internet Air', cost: '$55/mo', best: 'AT&T 5G home internet.', good: 'For AT&T-strong areas.' },
  { name: 'HughesNet', cost: '$50-150/mo', best: 'Older satellite. Cheaper but slower than Starlink. Big latency.', good: 'Skip if Starlink is available.' },
  { name: 'Viasat', cost: '$70-200/mo', best: 'Old satellite alternative.', good: 'Same as HughesNet — Starlink is better.' },
  { name: 'Local fixed wireless ISP (WISP)', cost: '$50-100/mo', best: 'Independent local providers. Search "[your area] wireless internet provider".', good: 'Sometimes cheaper than satellite.' },
];

export default function RuralInternet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rural Internet — Starlink, T-Mobile Home, HughesNet | TekSure" description="Live in the country? Plain-English picks for the best rural internet — Starlink, cellular home internet, and traditional satellite." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Satellite className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rural Internet</h1>
          <p className="text-lg text-muted-foreground">No more "best we can do is DSL".</p>
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
            <h2 className="font-bold text-xl mb-3">Decision tree</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Cell signal at home (any carrier)? → Try T-Mobile, Verizon, or AT&T home internet first. Cheapest.</li>
              <li>No cellular? Clear sky view? → Starlink. ~$120/mo, fast, reliable.</li>
              <li>No cellular AND tree-covered? → HughesNet/Viasat (limited speed) or wait for Starlink Mini.</li>
              <li>Town nearby? → Some areas now offer "fixed wireless" — small dish to a tower miles away. Search for local WISPs.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Government rural broadband</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>BEAD program</strong> ($42 billion) is funding rural broadband 2024-2027. Some areas get fiber for the first time.</li>
              <li>Search "[your county] broadband expansion" to see what\'s coming.</li>
              <li>USDA ReConnect grants funding co-ops to lay rural fiber.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For most rural seniors</h3>
            <p className="text-sm text-muted-foreground"><strong>Try cellular home internet first</strong> — T-Mobile / Verizon. Cheapest, often great. If it doesn\'t work — Starlink. Skip HughesNet unless desperate.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
