import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';

export default function SeniorChessApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chess Apps for Seniors — TekSure" description="Free chess apps — Chess.com, Lichess, learn and play with seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chess Apps</h1>
          <p className="text-lg text-muted-foreground">Play and learn chess.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Chess.com</h2><p>FREE. Largest chess site. Lessons, puzzles, play live.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lichess</h2><p>FREE. No ads. No subscription. Donor-supported.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magnus Trainer</h2><p>$60/year. Lessons by world champion Magnus Carlsen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior leagues</h2><p>USCF.org. National senior chess events. Online too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily puzzles</h2><p>5-minute brain workout. Most apps have one daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Play computer first</h2><p>Build skills against AI. Then graduate to real opponents.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even 1 game daily slows cognitive decline. Real benefit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
