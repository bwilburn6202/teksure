import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

export default function SeniorScrabbleOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Scrabble — Senior Guide" description="Play Scrabble online with friends." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Scrabble</h1>
          <p className="text-lg text-muted-foreground">Play your favorite word game.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Words With Friends</h2><p>Most popular Scrabble-like game. Free with ads.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Scrabble GO</h2><p>Official Scrabble. Free with ads. Includes solo modes and tournaments.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Pictoword</h2><p>Easier word games. 4 pics + letters = the word.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Family games</h2><p>Invite grandkids to play. Lifetime memories made over silly word challenges.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Multiple games at once</h2><p>Play 2-3 games. Take your time. No rush.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Free dictionary</h2><p>Most word games show valid word options. No more flipping books.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Word games protect cognitive function. Daily play has measurable benefits.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
