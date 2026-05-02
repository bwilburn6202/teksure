import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function SeniorPuzzleGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Puzzle Games for Seniors — TekSure" description="Free puzzle games — crossword, jigsaw, mahjong, Sudoku for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Puzzle Games for Seniors</h1>
          <p className="text-lg text-muted-foreground">Brain workouts. No phone calls home from grandkids needed.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NYT Games</h2><p>$5/month. Crossword, Mini, Connections, Spelling Bee, Wordle. Daily new puzzles.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microsoft Solitaire</h2><p>FREE. Klondike, Spider, FreeCell. Same as Windows from years ago.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sudoku.com</h2><p>FREE. Easy through Expert. Great for daily mental workout.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Jigsaw Puzzles</h2><p>FREE. 30,000+ puzzles. Beautiful art. No mess to clean up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mahjong</h2><p>Many free apps. Match tiles. Calming and challenging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Word search</h2><p>Search &ldquo;word search&rdquo; in app store. Many free options. Big-text versions for low vision.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 15 minutes of puzzles daily linked to slower memory decline. Real benefit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
