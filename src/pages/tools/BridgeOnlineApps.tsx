import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Spade } from 'lucide-react';

const APPS = [
  { name: 'BBO (Bridge Base Online)', cost: 'FREE', best: 'Largest online bridge. Senior-favorite.', good: 'Best overall.' },
  { name: 'Funbridge', cost: 'FREE / $13/mo', best: 'Play vs computer. Tournaments.', good: 'Best computer play.' },
  { name: 'Trickster Bridge', cost: '$5', best: 'Played live with friends. Voice chat.', good: 'Best with friends.' },
  { name: 'Bridge Master', cost: '$5', best: 'Learn bridge from scratch.', good: 'Best for learning.' },
  { name: 'Real Bridge', cost: 'FREE', best: 'See your friends&apos; faces while playing.', good: 'Best video.' },
];

export default function BridgeOnlineApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Bridge for Seniors | TekSure" description="Play bridge from home. Plain-English bridge app picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Spade className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Bridge</h1>
          <p className="text-lg text-muted-foreground">Play 4-handed bridge anytime, anywhere.</p>
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
            <h2 className="font-bold text-xl mb-3">Why senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Considered #1 brain game.</li>
              <li>Never need 4 partners — apps fill in.</li>
              <li>Play anytime, day or night.</li>
              <li>Connect with old bridge buddies online.</li>
              <li>Exercises memory + strategy.</li>
              <li>Free or cheap.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bridge Base Online (BBO)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most popular online bridge.</li>
              <li>Free to use.</li>
              <li>Play with bots or real people.</li>
              <li>ACBL tournaments.</li>
              <li>Watch top players.</li>
              <li>Senior-friendly community.</li>
              <li>Web + apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local bridge clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ACBL.org — find local club.</li>
              <li>Most cities have weekly games.</li>
              <li>Senior centers + country clubs.</li>
              <li>Beginner welcome at most.</li>
              <li>Good way to meet people.</li>
              <li>Online + in-person both worth doing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learning bridge</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Audrey Grant</strong> — most popular teacher. Books + videos.</li>
              <li><strong>Bridge for Beginners</strong> apps.</li>
              <li><strong>YouTube</strong> — &quot;Larry Cohen Bridge.&quot;</li>
              <li>Local club beginner classes.</li>
              <li>OLLI often offers bridge classes.</li>
              <li>3-6 months to play comfortably.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bridge benefits dementia</h3>
            <p className="text-sm text-muted-foreground">Studies repeatedly show bridge players have lower dementia rates. Combination of memory + strategy + social = ideal brain protection. Many seniors play bridge into their 90s. Free brain medicine.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
