import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Grid3x3 } from 'lucide-react';

const APPS = [
  { name: 'Mahjong Solitaire by MobilityWare', cost: 'FREE', best: 'Single-player mahjong. Like the windows classic.', good: 'Best solo.' },
  { name: 'Real Mahjong (American)', cost: 'FREE / $5', best: '4-player American mahjong online.', good: 'Best American.' },
  { name: 'GameDesire Mahjong', cost: 'FREE', best: 'Live multiplayer with seniors worldwide.', good: 'Best multiplayer.' },
  { name: 'Mahjong Titans', cost: 'FREE', best: 'Built into Windows. Senior favorite.', good: 'Best on PC.' },
  { name: 'I Love Mahjong by Senior Mahjong', cost: 'FREE', best: 'Simple controls + larger tiles.', good: 'Best easy.' },
];

export default function MahjongAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mahjong Apps for Seniors | TekSure" description="Senior-favorite mahjong apps. Plain-English picks for tile lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Grid3x3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mahjong for Seniors</h1>
          <p className="text-lg text-muted-foreground">Brain workout. Calming. Senior favorite.</p>
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
            <h2 className="font-bold text-xl mb-3">Solitaire vs traditional</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mahjong Solitaire</strong> — match pairs + remove. Solo. Easy.</li>
              <li><strong>Traditional Mahjong</strong> — 4-player. Like rummy. Complex.</li>
              <li><strong>American Mahjong</strong> — different rules than Chinese.</li>
              <li>Apps offer all variants.</li>
              <li>Solitaire = quick brain workout.</li>
              <li>Traditional = social.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local mahjong groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers run weekly games.</li>
              <li>Synagogues + churches host.</li>
              <li>Country clubs / rec centers.</li>
              <li>Friend groups gather.</li>
              <li>NMJL (National Mah Jongg League) provides cards.</li>
              <li>Senior favorite social activity.</li>
              <li>Beginner classes available many places.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Brain benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pattern recognition.</li>
              <li>Strategic planning.</li>
              <li>Memory training.</li>
              <li>Quick decision-making.</li>
              <li>Social connection (group play).</li>
              <li>Studies show brain health benefits seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-friendly settings</h3>
            <p className="text-sm text-muted-foreground">Most apps allow: large tiles, slower animations, easy difficulty. Adjust before playing. Some apps designed for seniors with extra-large fonts. Daily challenge keeps you returning. Brain exercise + fun = senior tech sweet spot.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
