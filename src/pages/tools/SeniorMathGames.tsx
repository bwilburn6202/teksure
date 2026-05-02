import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorMathGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Math Games for Seniors — TekSure" description="Math workout — Lumosity, Elevate, Sudoku for senior brains." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Math Games for Seniors</h1>
          <p className="text-lg text-muted-foreground">Sharpens different brain area.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sudoku</h2><p>FREE apps. Logic + math. 1 puzzle daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">KenKen</h2><p>FREE. Math + logic puzzles. Daily online challenges.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Elevate Math</h2><p>$40/year. Tip calculations, percentages. Practical math.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Card games</h2><p>Cribbage, gin rummy. Mental math. Multi-generation game.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real math</h2><p>Calculate restaurant tip in head. Skip calculator. Brain workout.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Math benefits</h2><p>Studies show math practice slows numerical decline. Real benefit.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: One Sudoku at breakfast. Day starts brain working.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
