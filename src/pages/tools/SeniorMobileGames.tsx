import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2 } from 'lucide-react';

export default function SeniorMobileGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Mobile Games for Seniors | TekSure" description="Fun, easy mobile games for seniors. Solitaire, word games, puzzles — all senior-friendly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Mobile Games</h1>
          <p className="text-lg text-muted-foreground">Fun + brain exercise on your phone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Word games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wordscapes — most popular senior word game.</li>
              <li>Wordle — one puzzle daily, free.</li>
              <li>Words With Friends — play with family.</li>
              <li>Word Cookies — find words in mixed letters.</li>
              <li>Boggle With Friends — letter grid challenges.</li>
              <li>All free with optional ads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Card games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Microsoft Solitaire Collection — classic + free.</li>
              <li>Spider Solitaire — multiple difficulty levels.</li>
              <li>FreeCell — strategic solitaire.</li>
              <li>Hearts, Spades, Euchre apps.</li>
              <li>Trickster Cards — play with friends online.</li>
              <li>Pinochle apps for old card-game lovers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Puzzle games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sudoku — many free apps.</li>
              <li>Crossword — NYT, USA Today have apps.</li>
              <li>Mahjong (matching tiles) — relaxing.</li>
              <li>Jigsaw Puzzles HD — beautiful images.</li>
              <li>Word Search — classic, easy.</li>
              <li>Logic puzzles like Picross.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP Games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free at AARP.org/games.</li>
              <li>No app needed — plays in browser.</li>
              <li>Hundreds of games across categories.</li>
              <li>Senior-curated, family-friendly content.</li>
              <li>Daily new games.</li>
              <li>Card games, puzzles, word, arcade.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Casino-style (no real money)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bingo Blitz — popular online bingo.</li>
              <li>Slotomania — slot machine simulation.</li>
              <li>Free coins, no real money.</li>
              <li>Some seniors enjoy these heavily.</li>
              <li>Avoid in-app purchases — they add up fast.</li>
              <li>Stick to free coins only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these traps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Games with constant pop-up ads.</li>
              <li>&quot;Pay $5 to skip ads&quot; — usually scams.</li>
              <li>Games requiring excessive permissions.</li>
              <li>Real-money gambling apps (different from social casino).</li>
              <li>Subscription games — pay $10/month for nothing.</li>
              <li>Stick to free + reputable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Wordscapes for daily brain exercise</h3>
            <p className="text-sm text-muted-foreground">For most seniors looking for one game to play daily, Wordscapes is the best entry point. Free, addictive in a healthy way, mentally engaging without being stressful, and the daily puzzle gives you an achievable goal. Microsoft Solitaire Collection is a close second — bring back classic Windows solitaire memories. Both are free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
