import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function SeniorWordGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Word Games for Seniors — TekSure" description="Crosswords, Wordle, Scrabble, Words with Friends — language training." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Word Games for Seniors</h1>
          <p className="text-lg text-muted-foreground">Vocabulary stays sharp.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NYT Crossword</h2><p>$5/month. World&apos;s best. Easier Mon, harder by Sat.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Words with Friends</h2><p>FREE. Scrabble-like. Play with grandkids remotely.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wordscapes</h2><p>FREE. Beautiful word puzzles. Mix of crossword + anagram.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Boggle</h2><p>$3 app. Find words in letter grid. Quick rounds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Newspaper crosswords</h2><p>FREE in newspaper. Track of weekly progress.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>Word games linked to slower cognitive aging. Real measurable benefit.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Daily crossword + Wordle = best 15 min senior brain workout.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
