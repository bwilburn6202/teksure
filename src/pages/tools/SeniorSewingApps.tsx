import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

export default function SeniorSewingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sewing Apps for Seniors — TekSure" description="Sewing patterns and tutorials — Burda, Sew Quick, Pattern Review." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sewing Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Patterns, tutorials, communities.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Burda Patterns</h2><p>FREE app. Hundreds of free patterns. Print at home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pattern Review</h2><p>FREE community. Reviews of patterns before buying.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sew Vintage</h2><p>FREE. Vintage sewing patterns from the 30s-70s.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube</h2><p>FREE. Search &ldquo;sewing for seniors.&rdquo; Sewing With Nancy is excellent.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart sewing machines</h2><p>Brother Disney machines have built-in tutorials. Easier learning.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sell crafts</h2><p>Pair with Etsy app to sell handmade. Hobby that pays.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Senior centers often have free sewing groups. Skill share + community.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
