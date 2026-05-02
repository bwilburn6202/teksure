import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorMemoryGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memory Games for Seniors — TekSure" description="Brain workout games — Memory Match, Simon, Set, classic memory cards." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memory Games</h1>
          <p className="text-lg text-muted-foreground">Working memory training.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Memory Match</h2><p>FREE on phone. Flip cards. Find pairs. Classic memory training.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Simon Says</h2><p>FREE app. Repeat sequence. Working memory + attention.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">N-Back training</h2><p>Brain HQ. Studies show improves working memory in seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Concentration</h2><p>Real card game. Easy. Senior favorite. Multi-generation friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior memory tricks</h2><p>Method of loci. Repeat names 3 times. Visualize for recall.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">15 minutes daily</h2><p>Real benefit. Pattern of brain games over months adds up.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Combine games + walking + diet for strongest memory protection.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
