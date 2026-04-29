import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

const APPS = [
  { name: 'TaskRabbit', cost: 'Hourly, $30-100/hr', best: 'Furniture assembly (IKEA partner), TV mounting, hanging shelves. Pre-vetted by TaskRabbit.', good: 'Good for one-off small jobs.' },
  { name: 'Thumbtack', cost: 'Free quotes', best: 'Sends your job to local pros — they bid. Great for plumbers, electricians, lawn care.', good: 'Fast quotes, but vet each pro yourself.' },
  { name: 'Angi (formerly Angie\'s List)', cost: 'Free with paid pro membership ($35/yr)', best: 'Pre-vetted local contractors. Best for bigger jobs (kitchens, roofing, decks).', good: 'Worth the $35/yr.' },
  { name: 'HomeAdvisor', cost: 'Free quotes', best: 'Same idea as Thumbtack. Big database, varying quality.', good: 'Ask for license number.' },
  { name: 'Nextdoor', cost: 'Free', best: 'Real neighbors recommend handymen they\'ve actually used.', good: 'Best free way to find local help.' },
  { name: 'Hello Alfred / Belay', cost: '$120-300/month', best: 'Personal assistant services for ongoing help with errands, scheduling, calls.', good: 'For people who want regular weekly help.' },
];

export default function HandymanServiceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Handyman & Service Apps — TaskRabbit, Thumbtack, Angi | TekSure" description="Need help hanging a TV, fixing a leak, or assembling furniture? Plain-English picks for finding reliable home help on demand." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Handyman & Service Apps</h1>
          <p className="text-lg text-muted-foreground">Get help with the small things you can\'t (or shouldn\'t) do.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>For a small job</strong> (under 2 hours) — TaskRabbit is fastest.</li>
              <li><strong>For multiple quotes</strong> — Thumbtack or Angi.</li>
              <li><strong>Use the in-app chat</strong> instead of phone — keeps a record of what was promised.</li>
              <li><strong>Pay through the app</strong> — never cash. Provides protection if something goes wrong.</li>
              <li><strong>Tip 10-15%</strong> if happy. They\'re often working without benefits or paid time off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common jobs and rough costs</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>TV mount on wall: $80-150</li>
              <li>Furniture assembly (single piece): $40-100</li>
              <li>Hang 5 pictures: $50-80</li>
              <li>Light bulb / switch replacement: $50-150</li>
              <li>Toilet repair: $100-300</li>
              <li>Leaky faucet: $100-250</li>
              <li>Lawn mowing (small yard): $30-50/visit</li>
              <li>Pressure washing: $200-400</li>
              <li>Gutter cleaning: $150-300</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-friendly options</h3>
            <p className="text-sm text-muted-foreground"><strong>Papa</strong> (joinpapa.com) — pairs older adults with younger "Pals" who help with errands, rides, tech, light housework. Often covered by Medicare Advantage. <strong>SilverRide</strong> in some cities — door-through-door rides for seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
