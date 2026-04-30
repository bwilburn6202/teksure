import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function InductionStoveExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Induction Stove Explained for Seniors | TekSure" description="Why induction is safer + faster. Plain-English induction cooktop guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Induction Stove</h1>
          <p className="text-lg text-muted-foreground">Safest stove ever invented.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works (simply)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Magnets heat the PAN, not the surface.</li>
              <li>Stove top stays cool to touch.</li>
              <li>2x faster than gas or electric.</li>
              <li>Most precise temperature control.</li>
              <li>Easy clean — flat smooth surface.</li>
              <li>Pan must be magnetic (cast iron, magnetic stainless).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors love it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Won&apos;t burn skin</strong> — surface stays cool.</li>
              <li><strong>Auto-off</strong> — when pan removed.</li>
              <li><strong>No gas leak</strong> risk.</li>
              <li><strong>No open flame</strong> — fire safety.</li>
              <li><strong>Easy clean</strong> — wipe with damp cloth.</li>
              <li><strong>Heats fast</strong> — boil water in 60 seconds.</li>
              <li><strong>Better air quality</strong> — no gas combustion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Try a portable first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Duxtop 9100MC portable</strong> — $60. Test before whole stove replace.</li>
              <li><strong>NuWave PIC Pro</strong> — $90. Good portable.</li>
              <li>Plug into outlet — no rewiring.</li>
              <li>Try for a month before commit to full induction range.</li>
              <li>Camper / RV use too.</li>
              <li>Backup if main stove dies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Full induction ranges</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$1,500-3,500 for nice 30&quot; range.</li>
              <li>GE Profile, Samsung, Bosch good brands.</li>
              <li>$840+ federal tax credit (Inflation Reduction Act).</li>
              <li>Many states + utilities have rebates $500-3,000.</li>
              <li>May need 240V outlet — electrician $200-1,000.</li>
              <li>Net cost often $1,000-2,000 after rebates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cookware compatibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Test with magnet — sticks = works.</li>
              <li>Cast iron — works perfectly.</li>
              <li>Magnetic stainless — works.</li>
              <li>Aluminum / copper — DOESN&apos;T WORK.</li>
              <li>Glass / ceramic — DOESN&apos;T WORK.</li>
              <li>Some non-stick has magnetic base — check.</li>
              <li>Adapter disks exist but slow + waste energy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Climate + health bonus</h3>
            <p className="text-sm text-muted-foreground">Gas stoves linked to childhood asthma + indoor air pollution. Induction = healthier indoor air. More efficient = lower bills + greener. New construction now banning gas in some cities. Future-proof your kitchen. Federal rebates 2026 cover most cost for many seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
