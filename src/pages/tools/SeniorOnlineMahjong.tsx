import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Layers } from 'lucide-react';

export default function SeniorOnlineMahjong() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Mahjong — Senior Guide" description="Play Mahjong online with strangers or friends." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Layers className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Mahjong</h1>
          <p className="text-lg text-muted-foreground">Match tiles, calm mind.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Mahjong Solitaire</h2><p>Free. Match pairs of tiles. Different from real Mahjong but very calming.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Real Mahjong (American)</h2><p>National Mah Jongg League online. $14/year for the official card.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Real Mahjong online</h2><p>USA Mahjong League and others. Online tournaments and casual play.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Microsoft Mahjong</h2><p>Free on Windows and the Microsoft Store. Solitaire-style.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Daily challenges</h2><p>Most apps offer a free daily puzzle. Routine like daily crossword.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Soothing</h2><p>Sound effects and calm music. Many seniors use Mahjong as relaxation before bed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Try the free Solitaire version first. Real American Mahjong is more complex but rewarding.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
