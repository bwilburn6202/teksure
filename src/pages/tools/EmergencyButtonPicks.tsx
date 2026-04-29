import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

const PICKS = [
  { name: 'Apple Watch SE', cost: '$299 + $10/mo cellular', best: 'Fall detection auto-911. ECG. Watch you don&apos;t notice = always wearing.', good: 'Best smart.' },
  { name: 'Medical Guardian Mini', cost: '$30-45/mo', best: 'Cellular pendant. GPS. Light + good battery. Senior-favorite "real" PERS.', good: 'Best dedicated PERS.' },
  { name: 'Lively Mobile2', cost: '$25/mo + $50 device', best: 'Sold at Best Buy. 5Star urgent response button.', good: 'Best in-store.' },
  { name: 'Bay Alarm Medical SOS All-in-One', cost: '$30-45/mo', best: 'Cellular GPS pendant + fall detection. Strong customer service.', good: 'Best customer service.' },
  { name: 'Aloe Care Smart Hub', cost: '$50/mo', best: 'Pendant + smart speaker + air monitoring + caregiver app.', good: 'Best with smart home.' },
];

export default function EmergencyButtonPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Button + Medical Alert Picks | TekSure" description="Apple Watch, Medical Guardian, Lively. Plain-English picks for medical alert systems for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Button Picks</h1>
          <p className="text-lg text-muted-foreground">Help with one press.</p>
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
            <h2 className="font-bold text-xl mb-3">Apple Watch vs traditional PERS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Watch</strong> — $300 once + $10/mo. Watch is "always on you" since you wear it. Plus fitness, heart, texts. Modern.</li>
              <li><strong>Traditional PERS</strong> — $30-50/mo subscription. Pendant feels stigmatized. Battery 24-72 hrs.</li>
              <li>Watch is better for tech-comfortable seniors.</li>
              <li>PERS is better for non-tech, severe mobility issues, those who won&apos;t learn watch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Critical features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fall detection</strong> — auto-call without pressing button. Most important.</li>
              <li><strong>2-way voice</strong> — talk to operator from device.</li>
              <li><strong>GPS</strong> — operator finds you anywhere.</li>
              <li><strong>Cellular</strong> — works outside home.</li>
              <li><strong>Waterproof</strong> — wear in shower (60% of falls).</li>
              <li><strong>24/7 monitoring</strong> — real humans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Always wear it</h3>
            <p className="text-sm text-muted-foreground">A button on the dresser doesn&apos;t help. Wear in shower, wear at night (under pillow), wear on walks. Best emergency button is the one you have ON when something happens. Apple Watch is hardest to take off (slick wrist).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
