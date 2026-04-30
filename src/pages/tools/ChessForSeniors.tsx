import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';

export default function ChessForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chess for Senior Brain Health | TekSure" description="Chess apps + clubs for seniors. Plain-English brain exercise guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chess for Seniors</h1>
          <p className="text-lg text-muted-foreground">Best brain exercise. Free. Lifetime hobby.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why chess for brains</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slows cognitive decline.</li>
              <li>Improves planning + strategic thinking.</li>
              <li>Memory boost (study openings).</li>
              <li>Patience + focus.</li>
              <li>Free — boards $5-25.</li>
              <li>Endless complexity.</li>
              <li>Great social activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chess.com</strong> — best free chess platform. App + web.</li>
              <li><strong>Lichess</strong> — completely free, no ads.</li>
              <li><strong>Magnus Trainer</strong> — learn from world champion.</li>
              <li><strong>SocialChess</strong> — play seniors only.</li>
              <li><strong>Stockfish</strong> — strongest free engine.</li>
              <li>All work on iPad, phone, computer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beginner steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Learn moves first (lichess.org/learn — free).</li>
              <li>Play computer at lowest level.</li>
              <li>Solve puzzles (chess.com puzzles free).</li>
              <li>Don&apos;t fear losing — that&apos;s how you learn.</li>
              <li>Watch beginner YouTube (GothamChess).</li>
              <li>Play 10-15 min daily &gt; 2-hour sessions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local chess clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>US Chess Federation — find local club.</li>
              <li>Senior centers often have chess groups.</li>
              <li>Coffee shops + libraries host casual play.</li>
              <li>Park chess tables (NYC, SF famous).</li>
              <li>Online tournaments — chess.com runs free.</li>
              <li>Mature crowd, lots of retired teachers + engineers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly accessories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Large pieces (3-4&quot; king) — easier to grip.</li>
              <li>High-contrast board (clear black + white).</li>
              <li>Magnetic travel set $20.</li>
              <li>iPad chess uses larger pieces.</li>
              <li>Don&apos;t need expensive boards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Watch + learn</h3>
            <p className="text-sm text-muted-foreground">YouTube has best free instruction: <strong>GothamChess</strong> (Levy Rozman) — most popular. <strong>Saint Louis Chess Club</strong> — free lectures by grandmasters. <strong>Hanging Pawns</strong> — methodical lessons. <strong>The Queen&apos;s Gambit</strong> Netflix sparked chess interest in millions of seniors. Hours of free expert teaching.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
