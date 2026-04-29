import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';

const APPS = [
  { name: 'Chess.com', cost: 'FREE / $60/yr Premium', best: 'Largest chess site. Play humans 24/7. Lessons + puzzles. Senior favorite.', good: 'Best overall.' },
  { name: 'Lichess', cost: 'FREE forever', best: 'Free, no ads. Open-source. Same features as Chess.com.', good: 'Best free.' },
  { name: 'Chess Kids (or Magnus)', cost: 'FREE', best: 'Animated, easier UI. Good for grandkids learning.', good: 'Best for kids.' },
  { name: 'Play Magnus', cost: '$5/mo', best: 'Train against AI versions of Magnus Carlsen at every age.', good: 'Best AI training.' },
  { name: 'Chessable', cost: '$80/yr', best: 'Spaced-repetition for openings. Pro-quality courses.', good: 'Best for serious learning.' },
];

export default function ChessPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chess Apps + Sites for Seniors | TekSure" description="Chess.com, Lichess, Magnus. Plain-English picks for the best free chess apps to play humans, AI, and learn." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chess Apps</h1>
          <p className="text-lg text-muted-foreground">Best brain workout there is.</p>
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
            <h2 className="font-bold text-xl mb-3">Chess.com vs Lichess</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chess.com</strong> — biggest community, more features. Free is plenty.</li>
              <li><strong>Lichess</strong> — completely free + open-source. No paid wall.</li>
              <li>Both have apps. Both let you play humans worldwide 24/7.</li>
              <li>Both have free puzzles, lessons, computer practice.</li>
              <li>Pick one and stick with it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Play "rapid" or "daily" — not 1-minute "bullet" (too fast/stressful).</li>
              <li>Play computer at YOUR level. Win 50% of time = right level.</li>
              <li>Daily puzzles 5-10 min — best chess training there is.</li>
              <li>Watch GothamChess, ChessVibes, agadmator on YouTube — free, fun.</li>
              <li>Play grandkids — best intergenerational hobby ever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Brain benefits</h3>
            <p className="text-sm text-muted-foreground">Studies show chess players have lower dementia rates. The pattern recognition, memory + planning all light up brain. Even 30 min/day measurably benefits cognitive aging. AND it&apos;s fun.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
