import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

const PICKS = [
  { name: 'EGO 765 CFM Cordless', cost: '$280', best: 'Best cordless. Powerful. Lightweight. Quiet.', good: 'Best overall.' },
  { name: 'Ryobi 40V', cost: '$180', best: 'Light + cheap + battery. Senior-friendly.', good: 'Best value.' },
  { name: 'Worx Trivac WG509', cost: '$110', best: 'Corded blower + vacuum + mulcher.', good: 'Best 3-in-1.' },
  { name: 'Toro Power Sweep (electric)', cost: '$60', best: 'Cheap corded. Good for small yards.', good: 'Best budget.' },
  { name: 'Stihl BG 56 (gas)', cost: '$200', best: 'Pro-grade gas. Most powerful but loud.', good: 'Best gas.' },
];

export default function LeafBlowerPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Leaf Blower Picker for Seniors | TekSure" description="Light + quiet leaf blowers. Plain-English picks for senior yard care." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Leaf Blower Picker</h1>
          <p className="text-lg text-muted-foreground">Save your back. Pick the right one.</p>
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
            <h2 className="font-bold text-xl mb-3">Cordless = best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No cord to trip over.</li>
              <li>Lighter than gas.</li>
              <li>Quieter than gas (less hearing damage).</li>
              <li>No fuel mixing or storing.</li>
              <li>Battery 20-40 min runtime.</li>
              <li>Reaches anywhere in yard.</li>
              <li>Battery shared with other tools (EGO, Ryobi platforms).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Under 8 lbs — easy on shoulders.</li>
              <li>Variable speed trigger (low for delicate plants).</li>
              <li>Cruise control button — no constant trigger pulling.</li>
              <li>Padded shoulder strap if heavier.</li>
              <li>Quick-release battery — no struggle.</li>
              <li>Tube length adjustable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip the leaf blower?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hire help</strong> — TaskRabbit, neighborhood teen $25-50/visit.</li>
              <li><strong>Fall cleanup service</strong> — $100-300 for whole yard.</li>
              <li><strong>Mulching mower</strong> — leaves break down into lawn.</li>
              <li><strong>Leave them be</strong> — better for soil + bird/insect habitat.</li>
              <li><strong>Rake</strong> — exercise, no battery, peaceful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hearing protection (cheap foam plugs $5).</li>
              <li>Safety glasses — debris flies.</li>
              <li>Closed-toe shoes.</li>
              <li>No ladder use.</li>
              <li>Don&apos;t lean over — tip-over risk.</li>
              <li>Watch for hidden tripping hazards under leaves.</li>
              <li>Stop if winded — sit, drink water.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Battery platform tip</h3>
            <p className="text-sm text-muted-foreground">Pick ONE battery platform: EGO 56V, Ryobi 40V, DeWalt 20V Max. Then leaf blower + string trimmer + hedge trimmer + chainsaw + mower share batteries. Cheaper long-term + simpler. EGO + Ryobi = best senior platforms.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
