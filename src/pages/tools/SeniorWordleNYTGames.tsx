import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

export default function SeniorWordleNYTGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wordle and NYT Games — Senior Guide" description="Daily word puzzles from the New York Times." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wordle and NYT Games</h1>
          <p className="text-lg text-muted-foreground">Daily mind workouts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Wordle</h2><p>Free at nytimes.com/games/wordle. One word per day. 6 guesses.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Connections</h2><p>Free. Group 16 words into 4 categories. Tricky and fun.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Spelling Bee</h2><p>Make words from 7 letters. Hit Genius for bragging rights. Subscription needed for full game.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mini Crossword</h2><p>Free. 5x5 daily crossword. Takes 1-3 minutes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. NYT Games subscription</h2><p>$5/month. Unlocks full crossword, Spelling Bee, Strands, Letter Boxed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Share with friends</h2><p>Tap share. Send your score to family. Friendly daily competition.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Daily word games keep vocabulary sharp and add a fun routine to mornings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
