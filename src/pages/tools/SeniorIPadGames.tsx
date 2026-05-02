import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2 } from 'lucide-react';

export default function SeniorIPadGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Games on iPad — Senior Guide" description="Easy and fun games for iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Games on iPad</h1>
          <p className="text-lg text-muted-foreground">Brain teasers, card games, and more.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Solitaire</h2><p>Search Solitaire by MobilityWare. Big cards, simple controls. Free with optional ads.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Words With Friends</h2><p>Like Scrabble. Play with family or strangers. Keeps your mind sharp.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. NYT Crossword</h2><p>Daily puzzles from easy Monday to tough Saturday. Free mini puzzle every day.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Sudoku</h2><p>Number puzzles in four difficulty levels. Big numbers — easy on the eyes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Mahjong</h2><p>Tile-matching game. Calming background music. Many free versions in the App Store.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Lumosity</h2><p>Brain training games designed by neuroscientists. Free version has 3 games per day.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a game asks for credit card, close it. Free games do not need payment to play.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
