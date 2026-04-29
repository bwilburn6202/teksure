import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Grid3x3 } from 'lucide-react';

const APPS = [
  { name: 'NYT Games', cost: '$5/mo', best: 'New York Times daily crossword + Wordle + Spelling Bee + Connections. Senior favorite.', good: 'Best overall.' },
  { name: 'Crosswords with Friends', cost: 'FREE', best: 'Free, daily themed crosswords. Easy → hard.', good: 'Best free.' },
  { name: 'Washington Post Crosswords', cost: '$30/yr', best: 'Daily, easier than NYT. Sunday is great.', good: 'Best easier.' },
  { name: 'USA Today Crossword', cost: 'FREE', best: 'Free daily. Easier puzzles. Good for warmup.', good: 'Best for beginners.' },
  { name: 'Crossword Solver app', cost: 'FREE', best: 'Help when stuck. Fill in letters, get suggestions.', good: 'Best helper.' },
  { name: 'Print newspapers', cost: 'Newspaper price', best: 'Original way. Pencil + paper. Best for some seniors.', good: 'Best traditional.' },
];

export default function CrosswordApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Crossword + Word Game Apps | TekSure" description="NYT Games, USA Today Crossword. Plain-English picks for daily puzzles, Wordle, Connections, Spelling Bee — best for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Grid3x3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Crossword + Word Game Apps</h1>
          <p className="text-lg text-muted-foreground">Daily brain workout.</p>
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
            <h2 className="font-bold text-xl mb-3">Daily 5 — NYT Games picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wordle</strong> — 5-letter word in 6 guesses. 5 minutes.</li>
              <li><strong>Spelling Bee</strong> — make words from 7 letters. Half hour.</li>
              <li><strong>Connections</strong> — find 4 groups of 4. 5-15 min.</li>
              <li><strong>Mini Crossword</strong> — 5×5 puzzle. 2-5 min.</li>
              <li><strong>Sunday Crossword</strong> — bigger weekly challenge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other senior-favorite word games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Words With Friends</strong> — Scrabble vs. real friends. Async, play over weeks.</li>
              <li><strong>Wordscapes</strong> — simple word search-style puzzles.</li>
              <li><strong>7 Little Words</strong> — 7 mini puzzles a day.</li>
              <li><strong>Codycross</strong> — themed crossword with stories.</li>
              <li><strong>Word Cookies</strong> — letter rearrangement.</li>
              <li><strong>Bookworm</strong> — classic word game from 2000s, now mobile.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pair with newspaper</h3>
            <p className="text-sm text-muted-foreground">Many seniors keep paper newspapers for crosswords specifically. NYT Sunday Crossword in print + digital app for shortcuts works great. Pen + paper engages memory differently than tap. Use both.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
