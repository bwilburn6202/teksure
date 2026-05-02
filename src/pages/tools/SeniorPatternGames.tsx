import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorPatternGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pattern Games for Seniors — TekSure" description="Logic puzzles, Set card game, pattern recognition for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pattern Games</h1>
          <p className="text-lg text-muted-foreground">Pattern recognition.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set</h2><p>$15 card game. 3 cards make set. Pattern recognition.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tetris</h2><p>FREE. Classic spatial puzzle. Studies show benefits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mahjong</h2><p>FREE apps. Match tiles. Senior favorite worldwide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Solitaire</h2><p>FREE. Klondike, FreeCell. Classic pattern game.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Connections (NYT)</h2><p>FREE. Find 4 related word groups. Pattern thinking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real card games</h2><p>Bridge, Hearts, Spades. Multi-generation. Strong pattern training.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Different game types train different brain areas. Mix them daily.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
