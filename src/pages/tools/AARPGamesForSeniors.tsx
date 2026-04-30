import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Joystick } from 'lucide-react';

export default function AARPGamesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Games Free for Seniors | TekSure" description="Hundreds of free games at AARP.org. Designed for senior players. No app needed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Joystick className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Games</h1>
          <p className="text-lg text-muted-foreground">Free games designed for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to find</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AARP.org/games — direct in browser.</li>
              <li>No app needed.</li>
              <li>No AARP membership required.</li>
              <li>Hundreds of games.</li>
              <li>All free.</li>
              <li>Updated regularly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Categories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Word games — crosswords, Wordle alternatives.</li>
              <li>Puzzle games — jigsaw, mahjong, sudoku.</li>
              <li>Card games — solitaire, hearts, spades.</li>
              <li>Arcade — classic games.</li>
              <li>Trivia — multiple categories.</li>
              <li>Mind games — memory + logic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-popular favorites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily Crossword.</li>
              <li>Daily Sudoku.</li>
              <li>Mahjongg Solitaire.</li>
              <li>Spider Solitaire.</li>
              <li>Memory Games.</li>
              <li>Outspell (word game).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why AARP games?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designed for senior reading + clicking.</li>
              <li>Larger fonts than typical games.</li>
              <li>No social features — privacy-focused.</li>
              <li>No microtransactions.</li>
              <li>Browser-based — runs on any computer.</li>
              <li>Familiar games seniors know.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Brain training claims</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily puzzles + games support brain health.</li>
              <li>Mental engagement reduces dementia risk.</li>
              <li>Variety better than single game.</li>
              <li>15–30 minutes daily ideal.</li>
              <li>Combine with physical exercise.</li>
              <li>Consistency more than intensity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free game sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pogo.com — free games.</li>
              <li>Big Fish Games — free demos.</li>
              <li>Yahoo Games (some free).</li>
              <li>Microsoft Solitaire Collection — free.</li>
              <li>NYT Games (mini crossword free).</li>
              <li>Check + bookmark favorites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bookmark AARP Games</h3>
            <p className="text-sm text-muted-foreground">Add AARP.org/games to your computer bookmarks. Open it during morning coffee. 15 minutes of crossword + sudoku starts the day with brain exercise. No app to install, no microtransactions, no manipulative design. Just simple, free, senior-friendly games. Best free entertainment site for seniors many know about.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
