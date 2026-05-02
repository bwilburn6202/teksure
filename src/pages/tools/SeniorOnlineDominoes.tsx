import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Square } from 'lucide-react';

export default function SeniorOnlineDominoes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Dominoes — Senior Guide" description="Play Dominoes online with strangers or friends." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Square className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Dominoes</h1>
          <p className="text-lg text-muted-foreground">Mexican Train, Block, Draw — all online.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Dominoes by Loop</h2><p>Free. Multiple variants. Match by skill level.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Mexican Train app</h2><p>$5. Best for the most popular variant. 2-8 players.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Plato</h2><p>Free. Play with friends via app. Voice chat included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Tabletopia</h2><p>Free. Online versions of board games. Set up like real table.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Practice solo</h2><p>Most apps let you play vs computer first. Learn strategy without pressure.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Big screen</h2><p>Use a tablet or computer for easier viewing. Phones are tight for dominoes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many senior centers stream Mexican Train tournaments. Search for community events.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
