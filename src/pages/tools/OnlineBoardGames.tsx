import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad } from 'lucide-react';

const APPS = [
  { name: 'Chess.com', cost: 'FREE; $7/mo Premium', best: 'Best chess site. Play random opponents at your level. Practice with computer.', good: 'Best for chess.' },
  { name: 'Words With Friends', cost: 'Free with ads', best: 'Scrabble-style with friends. Most popular. Played at own pace.', good: 'Best for casual word game.' },
  { name: 'Scrabble GO', cost: 'Free', best: 'Real Scrabble. Play live or async.', good: 'Best for Scrabble purists.' },
  { name: 'Tabletopia', cost: 'Free; $5/mo Premium', best: 'Hundreds of board games digitized. Play with family on Zoom.', good: 'Best for serious board gamers.' },
  { name: 'Boardgame Arena', cost: 'Free; $4/mo Premium', best: 'Curated classics — Carcassonne, Catan, Splendor, etc.', good: 'Best classic game library.' },
  { name: 'Pogo', cost: '$5/mo', best: 'Old-fashioned casual games — solitaire, cards, puzzles. Run by EA.', good: 'Best for older interface preference.' },
  { name: 'NYT Games', cost: '$5/mo or with NYT subscription', best: 'Wordle, Connections, Spelling Bee, Crossword. World\'s best puzzles.', good: 'Best mental workout.' },
  { name: 'Houseparty / FaceTime + game', cost: 'FREE', best: 'Video call + screen share. Play any browser game with grandkids "in the room".', good: 'Best for grandkid time.' },
];

export default function OnlineBoardGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Board Games — Chess, Scrabble, Catan | TekSure" description="Play games with grandkids and friends across the country. Plain-English picks for online board games and word games." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Board Games</h1>
          <p className="text-lg text-muted-foreground">Play with grandkids, friends, or strangers — across any distance.</p>
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
            <h2 className="font-bold text-xl mb-3">For grandkids specifically</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Words With Friends</strong> — easy app on any phone.</li>
              <li><strong>Chess.com</strong> — set lessons + play together.</li>
              <li><strong>Boardgame Arena</strong> — play Ticket to Ride, Catan during video call.</li>
              <li><strong>UNO Online</strong> — fun for younger kids.</li>
              <li><strong>Roblox</strong> with grandkid (younger ones love).</li>
              <li><strong>NYT Games</strong> — older grandkids enjoy Connections.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best Sunday ritual</h3>
            <p className="text-sm text-muted-foreground">Schedule a weekly Words With Friends or Chess game with one friend or grandchild. Once-a-week move-and-respond stays connected without long phone calls. After a year, you\'ve stayed close in a way that holiday cards never managed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
