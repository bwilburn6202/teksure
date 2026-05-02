import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';

export default function SeniorChessOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Chess for Seniors — Senior Guide" description="Play chess online for free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Chess</h1>
          <p className="text-lg text-muted-foreground">Play instantly with players worldwide.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Chess.com</h2><p>Free. Most popular chess site. Web or app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Lichess</h2><p>Free, open-source, no ads. Same features as Chess.com.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Match by skill</h2><p>Both sites match you with players at your level. Always close games.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Lessons</h2><p>Chess.com lessons start free. Learn openings, tactics, endgames.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Play vs computer</h2><p>If shy about real opponents, play AI. Adjust difficulty from beginner to grandmaster.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Daily puzzles</h2><p>Free daily chess puzzles. 10 minutes a day improves your game noticeably.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Chess clubs at senior centers are common. Search Senior chess club + your city.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
