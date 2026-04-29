import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fish } from 'lucide-react';

const APPS = [
  { name: 'Fishbrain', cost: 'FREE / $80/year Pro', best: 'Biggest community. Local hot spots. Catch logs. Pro adds high-res maps + bait recommendations.', good: 'Best overall.' },
  { name: 'Navionics Boating', cost: '$25-50/year', best: 'Marine charts, depth maps. Required if you have a boat. Used by most marinas.', good: 'Best for boaters.' },
  { name: 'Anglr', cost: 'FREE / $50/year', best: 'Trip log + tackle inventory. Tracks weather, water temp, what worked.', good: 'Best for tracking.' },
  { name: 'Fishidy', cost: '$50/year', best: 'Detailed lake maps + crowdsourced fishing reports.', good: 'Best lake angler.' },
  { name: 'iAngler', cost: 'FREE', best: 'Conservation-focused. Log catches for fisheries science.', good: 'Best citizen science.' },
];

export default function FishingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fishing Apps for Anglers | TekSure" description="Find fishing spots, log catches, get marine charts. Plain-English picks for the best fishing apps for fresh and salt water." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fish className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fishing Apps</h1>
          <p className="text-lg text-muted-foreground">Find the bite.</p>
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
            <h2 className="font-bold text-xl mb-3">Free state resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most states have an OFFICIAL app — search "[state] fishing app". Free.</li>
              <li>Buy your fishing license through state app — saves a trip to the bait shop.</li>
              <li>Real-time stocking reports.</li>
              <li>Public-access boat ramp finder.</li>
              <li>Many states FREE for 65+ — check your state.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other handy apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tides Near Me</strong> (free) — saltwater tide times.</li>
              <li><strong>Solunar</strong> — best fishing times based on sun/moon.</li>
              <li><strong>Windy</strong> — wind + weather forecasts.</li>
              <li><strong>Weather Underground</strong> — hyperlocal weather.</li>
              <li><strong>NOAA Marine Forecast</strong> — official saltwater forecast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior fishing license</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FREE for 65+</strong> in: Alabama, Florida (residents), Maine (70+), Nebraska, Oklahoma, South Dakota, Tennessee, Texas (65+ residents), more.</li>
              <li><strong>Reduced</strong> in many other states ($5-15 lifetime).</li>
              <li>Veterans/disability discounts in most states.</li>
              <li>Check at state fish &amp; wildlife agency website.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Safety reminders</h3>
            <p className="text-sm text-muted-foreground">Tell someone where you&apos;re going + when you&apos;ll be back. Wear a life vest in a boat (Coast Guard required for 13+). Carry a charged phone in a waterproof bag. Watch the weather — many storms come up faster than you expect on open water.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
