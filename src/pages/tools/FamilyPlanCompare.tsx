import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function FamilyPlanCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Phone Plans Compared | TekSure" description="Best family plans for grandparents + kids + grandkids. Plain-English breakdown of Verizon, T-Mobile, AT&amp;T, MVNO family deals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Plan Compare</h1>
          <p className="text-lg text-muted-foreground">2-6 lines. Best deals.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2025 family plan prices (per line)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>T-Mobile Go5G Plus</strong> — $40-80/line on 4 lines. Includes Apple TV+, Netflix Basic.</li>
              <li><strong>Verizon Welcome Unlimited</strong> — $30-65/line on 4 lines. Discounts with Verizon Internet.</li>
              <li><strong>AT&amp;T Unlimited Premium</strong> — $50-85/line on 4 lines. Includes 50GB hotspot.</li>
              <li><strong>Visible by Verizon</strong> — $25/line, no family discount needed (already cheap).</li>
              <li><strong>Mint Mobile family</strong> — $15-30/line. Buy bulk months upfront.</li>
              <li><strong>Boost Mobile family</strong> — $25-50/line.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When family plans are worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>4+ lines on Big 3 → meaningful per-line savings.</li>
              <li>Heavy data users (gaming, streaming) — unlimited plans work better.</li>
              <li>Multiple kids/teens benefit from "talk + text" lines free with main line.</li>
              <li>Apple Watch / iPad cellular — discounted on family plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When MVNOs beat family plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2-3 light users (texting, occasional video) — Visible, Mint cheaper than Big 3 family.</li>
              <li>Different family members on different networks — flexibility wins.</li>
              <li>Ex: 2 grandparents on Mint at $15 + Visible at $25 = $55/mo total. Verizon family of 2 = $130+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing across generations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adult kids can add grandparents to plan — usually saves $20-40/line.</li>
              <li>Each person gets own number + bill itemized.</li>
              <li>Apple Family Sharing handles iCloud, Apple One, Apple Music separately. Keep in mind.</li>
              <li>Most carriers let you split via Venmo automatically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">"Best plan" varies</h3>
            <p className="text-sm text-muted-foreground">Use a plan-comparison site like <strong>WhistleOut</strong> or <strong>BestMVNO</strong>. Type your needs (lines, GB, calls, hotspot). Real recommendations from neutral sources. Beats marketing pitches from carrier reps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
