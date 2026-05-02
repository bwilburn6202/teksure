import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2 } from 'lucide-react';

export default function SeniorAARPGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Free Games — TekSure" description="100% free games for seniors at AARP — solitaire, mahjong, crosswords." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Free Games</h1>
          <p className="text-lg text-muted-foreground">100+ games. All free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Visit aarp.org/games</h2><p>FREE without AARP membership. No login required.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best games</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Mahjongg Dimensions</li><li>Daily Solitaire</li><li>Crossword Puzzles</li><li>Word Wipe</li><li>Bubble Shooter</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No downloads</h2><p>Play in any browser. No software to install.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big text</h2><p>Browser zoom: Ctrl + (PC) or Cmd + (Mac) — makes everything bigger.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Brain benefits</h2><p>15-20 minutes daily linked to slower cognitive decline. Real evidence.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tablet best</h2><p>Bigger screen than phone, easier than computer mouse.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Bookmark aarp.org/games. One-tap access daily.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
