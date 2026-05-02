import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorBrainGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Brain Game Apps for Seniors — TekSure" description="Best brain training apps for seniors — Lumosity, BrainHQ, and free picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Brain Game Apps</h1>
          <p className="text-lg text-muted-foreground">Keep your mind sharp daily.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">BrainHQ</h2><p>$96/year. Backed by AARP. Studies show real benefits for seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lumosity</h2><p>Free with daily limits. $12/month full version. Memory and attention games.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Elevate</h2><p>Free trial. Reading, writing, and math focus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NYT Games</h2><p>Free crossword Mini, Wordle, Spelling Bee. Daily mental workout.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sudoku</h2><p>Free apps everywhere. Start &ldquo;easy&rdquo; — works memory and logic.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">15 minutes daily</h2><p>Studies show 15 minutes daily, 5 days a week, has measurable effect after 8 weeks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pair brain games with walking. Both together protect cognition better than either alone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
