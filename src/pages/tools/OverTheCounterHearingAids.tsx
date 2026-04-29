import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

const PICKS = [
  { name: 'Apple AirPods Pro 2', cost: '$249', best: 'iOS 18+ FDA-cleared as hearing aid. Already-own option for iPhone users.', good: 'Best secret weapon.' },
  { name: 'Sony CRE-C20', cost: '$1,000', best: 'Self-fitting. Sony quality. App control.', good: 'Best premium OTC.' },
  { name: 'Lexie B2 Powered by Bose', cost: '$999', best: 'Sold at Walgreens. Self-fit. Bose audio quality.', good: 'Best in-store.' },
  { name: 'Jabra Enhance Plus', cost: '$1,000-2,000', best: 'Customer-favorite. Online hearing test + self-fit.', good: 'Best customer satisfaction.' },
  { name: 'Eargo 7', cost: '$2,950', best: 'Invisible in-canal. App-controlled. Strong support.', good: 'Best invisible.' },
  { name: 'Audien Atom Pro 2', cost: '$249', best: 'Cheapest decent OTC. Basic but workable.', good: 'Best budget.' },
];

export default function OverTheCounterHearingAids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Over-the-Counter Hearing Aids | TekSure" description="Apple AirPods, Sony, Jabra, Lexie. Plain-English picks for FDA-approved OTC hearing aids since 2022." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OTC Hearing Aids</h1>
          <p className="text-lg text-muted-foreground">No prescription. Big change since 2022.</p>
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
            <h2 className="font-bold text-xl mb-3">Apple AirPods as hearing aid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iOS 18+ — AirPods Pro 2 are FDA-cleared as OTC hearing aids.</li>
              <li>Take iPhone hearing test (10 min) → AirPods adjust to your hearing.</li>
              <li>Look like normal earbuds — no stigma.</li>
              <li>Cost $249 (vs $4,000+ prescription).</li>
              <li>Best for mild-to-moderate hearing loss.</li>
              <li>Setting: Settings → Accessibility → Hearing Devices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to see audiologist instead</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Severe hearing loss (test before).</li>
              <li>One ear much worse than other.</li>
              <li>Sudden hearing loss — go to ER same-day (treatable).</li>
              <li>Tinnitus / ringing.</li>
              <li>Ear pain or drainage.</li>
              <li>Dizziness with hearing loss.</li>
              <li>Hearing loss after head injury.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free hearing tests</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco Hearing Center</strong> — FREE for members. Best deal.</li>
              <li><strong>Sam&apos;s Club Hearing Center</strong> — FREE for members.</li>
              <li><strong>VA</strong> — free for veterans.</li>
              <li><strong>Mimi Hearing Test app</strong> — free home test on iPhone.</li>
              <li><strong>Local audiology school</strong> — free or low-cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try OTC first</h3>
            <p className="text-sm text-muted-foreground">$249 AirPods or $999 OTC ≪ $4,000 prescription. Try OTC for mild loss first. If not enough — escalate. Most people don&apos;t need expensive prescription aids. Most insurance + Medicare covers little to no hearing aids — OTC saves real money.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
