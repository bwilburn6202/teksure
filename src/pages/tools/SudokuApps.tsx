import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Grid3x3 } from 'lucide-react';

const APPS = [
  { name: 'NYT Sudoku', cost: '$5/mo / Free w/ NYT', best: 'Daily puzzle. 3 difficulty levels. Senior favorite.', good: 'Best overall.' },
  { name: 'Sudoku.com', cost: 'FREE / $4/yr Premium', best: 'Largest free Sudoku app. Multiple modes.', good: 'Best free.' },
  { name: 'Sudoku Master', cost: 'FREE', best: 'Big numbers. Senior-friendly UI.', good: 'Best big text.' },
  { name: 'Sudoku Kingdom', cost: 'FREE', best: 'Daily challenges + tournaments.', good: 'Best gamified.' },
  { name: 'Print pen-and-paper', cost: 'FREE', best: 'Newspaper, websudoku.com print. No screen.', good: 'Best traditional.' },
];

export default function SudokuApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sudoku Apps for Seniors | TekSure" description="NYT, Sudoku.com, Sudoku Master. Plain-English picks for senior Sudoku puzzles." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Grid3x3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sudoku Apps</h1>
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
            <h2 className="font-bold text-xl mb-3">Brain benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Logic + pattern recognition.</li>
              <li>Working memory training.</li>
              <li>Patience + focus.</li>
              <li>Studies show puzzles + cognitive flexibility correlate.</li>
              <li>15-30 min/day = real benefit.</li>
              <li>Skip if frustrating — should be enjoyable challenge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other puzzle apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Word Search</strong> — relaxing, pattern recognition.</li>
              <li><strong>Crosswords</strong> — see /tools/crossword-apps.</li>
              <li><strong>Mahjong</strong> — visual tile matching.</li>
              <li><strong>Solitaire</strong> — classic. Free on every device.</li>
              <li><strong>Chess</strong> — strategy. See /tools/chess-picks.</li>
              <li><strong>Wordle</strong> — 5 minutes daily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best ROI puzzle</h3>
            <p className="text-sm text-muted-foreground">NYT Games subscription ($5/mo) gets Sudoku + Wordle + Spelling Bee + Mini Crossword + Connections + full crossword. 5+ daily puzzles. Best $5 senior brain investment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
