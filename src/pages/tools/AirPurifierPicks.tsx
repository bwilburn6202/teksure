import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

const PICKS = [
  { name: 'Coway Airmega AP-1512HH', cost: '$160', best: 'Mid-room. HEPA + carbon. Quiet. Senior favorite.', good: 'Best overall.' },
  { name: 'Levoit Core 300', cost: '$100', best: 'Bedroom-size. HEPA. Quiet auto mode.', good: 'Best budget.' },
  { name: 'Blueair Blue 211+', cost: '$300', best: 'Large room. Whisper quiet. Allergies.', good: 'Best large room.' },
  { name: 'Molekule Air Pro', cost: '$1,000', best: 'Premium with PECO tech. Pricey.', good: 'Best premium.' },
  { name: 'Dyson Pure Cool', cost: '$500', best: 'Air purifier + fan combo. App tracking.', good: 'Best fan combo.' },
];

export default function AirPurifierPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Air Purifier Picks for Seniors | TekSure" description="HEPA air purifiers. Plain-English picks for senior allergies, lung conditions, wildfire smoke." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Air Purifier Picks</h1>
          <p className="text-lg text-muted-foreground">Cleaner air = better breathing + less allergies.</p>
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
            <h2 className="font-bold text-xl mb-3">Why seniors need them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lungs more sensitive with age.</li>
              <li>Wildfire smoke health threat (2-3 weeks/yr in many areas).</li>
              <li>Pollen + dust allergies worsen.</li>
              <li>Pets + dander.</li>
              <li>COPD, asthma, post-COVID lung issues.</li>
              <li>Reduces flu/cold transmission in winter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>True HEPA filter</strong> (not &quot;HEPA-type&quot; — fake).</li>
              <li><strong>CADR rating</strong> matches room size.</li>
              <li><strong>Activated carbon</strong> for odors + smoke.</li>
              <li><strong>Auto mode</strong> — uses sensor to adjust.</li>
              <li><strong>Quiet at night</strong> &lt;30 dB.</li>
              <li>NO ozone-generating purifiers — bad for lungs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Filter replacement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HEPA filters last 6-12 months ($40-100).</li>
              <li>Pre-filter washable monthly.</li>
              <li>Carbon filter every 3-6 months.</li>
              <li>Set phone reminder.</li>
              <li>Buy genuine filters (knockoffs less effective).</li>
              <li>Subscribe + save on Amazon for filters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Placement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bedroom — most important. Run 24/7 on auto.</li>
              <li>Living room — second priority.</li>
              <li>3 feet from walls + furniture.</li>
              <li>Don&apos;t block intake/exhaust.</li>
              <li>Close windows + doors when running.</li>
              <li>One per room — don&apos;t expect 1 to do whole house.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Wildfire emergency</h3>
            <p className="text-sm text-muted-foreground">During wildfires — seal windows + run on max. Buy spare HEPA filters ahead of fire season. DIY box-fan + MERV 13 filter alternative ($30 — &quot;Corsi-Rosenthal box&quot;) — proven effective. EPA AirNow.gov for air quality.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
