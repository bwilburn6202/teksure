import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function SeniorWordleAlternatives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wordle Alternatives for Seniors — TekSure" description="Free word games like Wordle — Quordle, Octordle, Connections." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wordle Alternatives</h1>
          <p className="text-lg text-muted-foreground">More daily word puzzles.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Connections (NYT)</h2><p>FREE. 16 words → 4 groups. Trickier than Wordle.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Strands (NYT)</h2><p>FREE. Word search puzzle. Theme-based daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Quordle</h2><p>FREE. 4 Wordles at once. Bigger challenge.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Octordle</h2><p>FREE. 8 Wordles at once. Hard.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Worldle</h2><p>FREE. Guess country from outline. Geography Wordle.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily Crossword</h2><p>NYT Mini FREE. 5x5 grid. 1-2 minutes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 3-4 daily puzzles = 15 minutes of brain work. Sharpens memory.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
