import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

const SERVICES = [
  { name: 'PBS / PBS Passport', cost: 'FREE; $5/mo Passport', best: 'Ken Burns documentaries, Frontline, Nova, American Experience. Best free option.', good: 'Passport unlocks the back catalog.' },
  { name: 'Curiosity Stream', cost: '$30-50/year', best: 'BBC-quality history, science, nature. Often runs lifetime deals around $100.', good: 'Best value when on sale.' },
  { name: 'CuriosityStream + MagellanTV bundle', cost: '$45/year deal', best: 'Two services for one price. Massive documentary library.', good: 'Best deal in documentaries.' },
  { name: 'BBC Earth / iPlayer (US)', cost: 'Free with VPN, or via streaming partners', best: 'Planet Earth, Blue Planet, Frozen Planet. The gold standard nature.', good: 'Some on Max, Netflix, etc.' },
  { name: 'Netflix', cost: 'Subscription you may already have', best: 'Tons of documentaries — true crime, sports, food, history.', good: 'Just check the docs section.' },
  { name: 'Max (HBO)', cost: 'Subscription', best: 'High-quality docs — sports, music, social topics.', good: 'Some of the best of the genre.' },
  { name: 'YouTube — free channels', cost: 'FREE', best: 'Real Stories, Banijay History, Spark, Real Science, Crash Course — full-length free docs.', good: 'Endless free content.' },
];

export default function DocumentaryStreaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Documentary Streaming — PBS, Curiosity Stream, BBC | TekSure" description="Watch the best documentaries from around the world. Plain-English picks for free and paid documentary streaming." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Documentary Streaming</h1>
          <p className="text-lg text-muted-foreground">The best documentaries — free and paid.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm mb-1">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Must-watch documentaries</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Ken Burns: The Civil War, Baseball, Vietnam, Country Music</strong> — PBS / PBS Passport.</li>
              <li><strong>Planet Earth / Blue Planet</strong> — Netflix or BBC.</li>
              <li><strong>Won&apos;t You Be My Neighbor? (Mr. Rogers)</strong> — multiple platforms.</li>
              <li><strong>Free Solo</strong> — Disney+.</li>
              <li><strong>The Last Dance</strong> (Michael Jordan) — Netflix.</li>
              <li><strong>Cosmos: A SpaceTime Odyssey</strong> (Neil deGrasse Tyson) — Netflix.</li>
              <li><strong>Apollo 11</strong> — restored footage of moon landing. Various.</li>
              <li><strong>Nat Geo specials</strong> — Disney+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best free path</h3>
            <p className="text-sm text-muted-foreground">PBS app (free) + the free Hoopla / Kanopy from your library = years of content. Then add Curiosity Stream lifetime deal next time it goes on sale (often Black Friday) for $100 forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
