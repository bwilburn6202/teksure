import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad } from 'lucide-react';

export default function AppleArcadeForSeniorGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Arcade for Senior Gamers | TekSure" description="$7/mo unlimited senior-friendly games no ads." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Arcade</h1>
          <p className="text-lg text-muted-foreground">Senior gaming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">$7/month</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>200+ games.</li><li>No ads or in-app buys.</li><li>Senior peace.</li><li>iPhone, iPad, Apple TV, Mac.</li><li>1-month trial.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Solitaire+.</li><li>Crossword Jam+.</li><li>Mahjong+.</li><li>Sudoku+.</li><li>Senior brain games no ads.</li><li>Worth subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs free games</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free games = constant ads.</li><li>In-app pressure buy.</li><li>Senior frustrating.</li><li>Apple Arcade = peaceful.</li><li>Worth $84/year.</li><li>Or Apple One bundle.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5 family members included.</li><li>Senior + grandkids.</li><li>One subscription many.</li><li>Worth $$.</li><li>Apple Family Sharing.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple TV games</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Big screen play.</li><li>Senior easier eyes.</li><li>Game controller works.</li><li>Family fun.</li><li>Apple Arcade subscription.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Brain training</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily puzzles.</li><li>Studies show benefit.</li><li>Senior cognitive.</li><li>15-30 min daily.</li><li>Healthy habit.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$7 Apple Arcade = senior ad-free brain games</h3><p className="text-sm text-muted-foreground">$7/month Apple Arcade = senior unlimited ad-free games. Solitaire+, Crossword Jam+, Sudoku+, Mahjong+. No in-app buys. Family share 5 members. Apple TV big screen with grandkids. Or Apple One bundle. Worth peace + brain training.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
