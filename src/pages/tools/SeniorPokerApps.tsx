import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Spade } from 'lucide-react';

export default function SeniorPokerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Poker Apps for Seniors — TekSure" description="Free play-money poker — Zynga Poker, WSOP, no real money risk." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Spade className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Poker Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Play-money poker. Fun without risk.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zynga Poker</h2><p>FREE. Largest poker community. Play-money chips.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">WSOP</h2><p>FREE. Official World Series of Poker. Big tournaments.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PokerStars Play</h2><p>FREE. Play-money. Practice skills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for spending</h2><p>Apps push real-money chip purchases. Stay free version only.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family games</h2><p>Apps let you create private tables. Play with grandkids virtually.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real money risk</h2><p>Online real-money poker is illegal in most states. Stay play-money.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Play-money poker is harmless fun. Real-money apps target seniors with addiction.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
