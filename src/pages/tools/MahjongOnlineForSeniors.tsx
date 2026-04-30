import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Layers } from 'lucide-react';

export default function MahjongOnlineForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mahjong Online for Seniors | TekSure" description="Play American Mahjong online. Apps and sites for senior players." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Layers className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mahjong Online</h1>
          <p className="text-lg text-muted-foreground">Play with friends remotely.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">RealMahjongg</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>American Mahjong online.</li><li>NMJL card included.</li><li>Subscription $80/yr.</li><li>Friends private games.</li><li>Auto deal + score.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">I Love Mahj</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App-based.</li><li>Practice mode.</li><li>Tutorials.</li><li>Daily puzzles.</li><li>$50/yr.</li><li>Senior community.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Solitaire mahjong</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Microsoft Mahjong free.</li><li>Tile-matching solo.</li><li>Different from American.</li><li>Brain training.</li><li>Quick play.</li><li>Free + endless.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Connect with friends</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Zoom + RealMahjongg.</li><li>See faces while playing.</li><li>Weekly game nights.</li><li>Friends across country.</li><li>Long-distance social.</li><li>Pandemic-proven format.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Learn the game</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube — Mahjong Quest.</li><li>NMJL official card.</li><li>Local senior centers.</li><li>Library books.</li><li>Practice with apps.</li><li>Steady learning.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPad bigger than phone.</li><li>Increase tile size.</li><li>Practice solo first.</li><li>Don&apos;t worry losing.</li><li>Brain workout great.</li><li>Social mahjong best.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Mahjong = senior brain + social</h3><p className="text-sm text-muted-foreground">American Mahjong online combines complex strategy with senior friendship. RealMahjongg + Zoom keeps weekly games alive across distances. Many seniors say their Mahjong group is their best social tie. Brain-engaging + emotionally connecting. Worth subscription.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
