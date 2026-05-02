import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorOnlineHearts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Hearts — Senior Guide" description="Play Hearts and Spades online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearts & Spades Online</h1>
          <p className="text-lg text-muted-foreground">Classic card games, online.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Hearts on Trickster</h2><p>Free. Play Hearts with strangers worldwide.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Spades on Pogo</h2><p>Free. Pogo also has Spades, Hearts, Bridge, Euchre.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Microsoft Hearts</h2><p>Free on Windows. Old Windows classic version still available.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Trickster Cards</h2><p>App for many card games. Play with friends or AI.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Practice solo</h2><p>Solo modes practice strategy. Then try real partners.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Euchre too</h2><p>If you played Euchre as a kid, free apps still have it.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Card games keep the brain sharp. Strategy + memory = ideal mental exercise.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
