import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

const APPS = [
  { name: 'Scratch (MIT)', cost: 'FREE', best: 'Visual block-based coding. Ages 8-16. Most schools use it.', good: 'Best free.' },
  { name: 'ScratchJr', cost: 'FREE', best: 'Same but for ages 5-7.', good: 'Best for youngest.' },
  { name: 'Code.org', cost: 'FREE', best: 'Hour of Code activities. Free curriculum.', good: 'Best curriculum.' },
  { name: 'Tynker', cost: 'FREE / $80/yr', best: 'Game-based. Minecraft + Roblox modding.', good: 'Best gamified.' },
  { name: 'Codecademy', cost: 'FREE / $20/mo', best: 'For older kids 12+. Real coding languages.', good: 'Best for teens.' },
  { name: 'Sphero / Wonder Workshop robots', cost: '$80-200', best: 'Physical robot kids program. Hands-on.', good: 'Best physical.' },
];

export default function KidsCodingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kids Coding Apps for Grandparents | TekSure" description="Scratch, Tynker, Code.org. Plain-English picks for kids&apos; coding apps + robots." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Laptop className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kids Coding Apps</h1>
          <p className="text-lg text-muted-foreground">Future-proofing gifts.</p>
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
            <h2 className="font-bold text-xl mb-3">Why coding for kids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Logic + problem-solving skills.</li>
              <li>Persistence — debug = patience.</li>
              <li>Builds confidence.</li>
              <li>Tomorrow&apos;s career — coding is foundational.</li>
              <li>Free option = Scratch.</li>
              <li>30 min /week is plenty for benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to start (free)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Code.org Hour of Code — 1-hr intros.</li>
              <li>ScratchJr if 5-7. Scratch if 8+.</li>
              <li>Khan Academy Computer Programming for 12+.</li>
              <li>YouTube — Kids Code Club, Coding Train.</li>
              <li>Build with grandkid 1 hr/month.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best Christmas gift idea</h3>
            <p className="text-sm text-muted-foreground">Sphero Mini robot ($50) — kids program it via app. Hours of fun. Makes coding tangible. Great for ages 8-13. Beats another video game.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
