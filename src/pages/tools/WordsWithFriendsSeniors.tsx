import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GamepadIcon } from 'lucide-react';

export default function WordsWithFriendsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Words With Friends for Seniors | TekSure" description="Play Words With Friends and other word games. Fun, social, and good for your brain." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GamepadIcon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Words With Friends</h1>
          <p className="text-lg text-muted-foreground">Word games with family and friends.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Words With Friends?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Scrabble-like word game on your phone.</li>
              <li>Play against friends, family, or strangers.</li>
              <li>Take your turn anytime — no waiting together.</li>
              <li>Free to play — with ads.</li>
              <li>Available on iPhone and Android.</li>
              <li>Over 13 million active players.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to play</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Words With Friends from app store.</li>
              <li>Create account with email or Facebook.</li>
              <li>Find opponents by username or Facebook friends.</li>
              <li>Place tiles to form words on the board.</li>
              <li>Score points — higher value tiles = more points.</li>
              <li>App alerts you when it&apos;s your turn.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Social features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chat with opponent during game.</li>
              <li>Play multiple games at once with different people.</li>
              <li>No need to coordinate schedules.</li>
              <li>Play a game over days or weeks.</li>
              <li>Great for staying in touch with grandkids.</li>
              <li>Seniors report it reduces loneliness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">More word games to try</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wordle — one free word puzzle per day.</li>
              <li>NYT Crossword — mini puzzle free daily.</li>
              <li>Letterpress — free, head-to-head word game.</li>
              <li>Wordscapes — solo word puzzles, very popular.</li>
              <li>Boggle With Friends — find words in letter grid.</li>
              <li>All free or cheap to start.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Card and board games online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Trickster Cards — Hearts, Spades, Euchre with friends.</li>
              <li>Tabletopia — virtual board games.</li>
              <li>Board Game Arena — 800+ board games free.</li>
              <li>Chess.com — chess against any skill level.</li>
              <li>Microsoft Solitaire — free on Windows and phone.</li>
              <li>AARP Games — free games at AARP.org.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP free games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to AARP.org/games — no membership required.</li>
              <li>Hundreds of free games for all interests.</li>
              <li>Word, card, puzzle, arcade games.</li>
              <li>No app required — plays in browser.</li>
              <li>New games added regularly.</li>
              <li>Great option for browser-based play on computer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Play with grandkids</h3>
            <p className="text-sm text-muted-foreground">Words With Friends is one of the best ways to stay connected with grandchildren who are too busy to call. They make a move when they have a minute, you make yours when you have a minute. It becomes an ongoing conversation through the game. Many grandparents and grandkids play daily games for years. Install it and challenge a grandkid this week.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
