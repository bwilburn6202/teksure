import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

const APPS = [
  { name: 'Math Workout (Memorado)', cost: 'FREE / $30/yr', best: 'Mental math drills. Senior-friendly.', good: 'Best for math drills.' },
  { name: 'Khan Academy', cost: 'FREE', best: 'Free math from basics to algebra to calculus.', good: 'Best free learning.' },
  { name: 'Brilliant', cost: '$170/yr', best: 'Logic + math puzzles. For curious seniors.', good: 'Best premium.' },
  { name: 'Math Riddles', cost: 'FREE', best: 'Quick number puzzles. App store games.', good: 'Best quick games.' },
  { name: 'Mensa Brain Training', cost: '$10', best: 'IQ-style puzzles + Mensa branding.', good: 'Best Mensa.' },
];

export default function MathChallengeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Math Challenge Apps for Seniors | TekSure" description="Mental math + logic puzzles. Plain-English picks for senior math brain training." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Math Challenge Apps</h1>
          <p className="text-lg text-muted-foreground">Numbers keep brain sharp.</p>
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
            <h2 className="font-bold text-xl mb-3">Mental math daily</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calculate restaurant tip in head before reaching for phone.</li>
              <li>Calculate grocery total as you shop.</li>
              <li>Estimate gas mileage in head.</li>
              <li>Mental math while walking (count steps + multiply).</li>
              <li>Help grandkids with homework.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Khan Academy refresh</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free + comprehensive.</li>
              <li>Brush up basic algebra, geometry.</li>
              <li>Statistics — useful for understanding news.</li>
              <li>Calculus — for retired engineers / scientists who miss it.</li>
              <li>30 min/day = real progress.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use it or lose it</h3>
            <p className="text-sm text-muted-foreground">Mental math fades fast without practice. 5 min/day mental math = stays sharp. Help grandkids with school = bonus quality time + math practice.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
