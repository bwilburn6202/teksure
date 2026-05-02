import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

export default function SeniorPinterestBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pinterest for Seniors — TekSure" description="Save recipes, decor ideas, crafts — Pinterest for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bookmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pinterest for Seniors</h1>
          <p className="text-lg text-muted-foreground">Recipes. Crafts. Decor ideas.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Free app and website. No ads in your feed (so far).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">How it works</h2><p>Save (&ldquo;pin&rdquo;) ideas to boards. Like a digital scrapbook for your interests.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Make a board</h2><p>Tap your profile → + → Board. Name it &ldquo;Recipes&rdquo; or &ldquo;Garden Ideas.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Search ideas</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;Easy crockpot recipes&rdquo;</li><li>&ldquo;Knitting patterns&rdquo;</li><li>&ldquo;Senior travel destinations&rdquo;</li><li>&ldquo;Bird feeder ideas&rdquo;</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Click through carefully</h2><p>Some pins lead to spam sites. Stay on Pinterest for safety.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with family</h2><p>Send a recipe pin in a text. Great for &ldquo;dinner ideas?&rdquo; conversations.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A board for each season — refresh decor ideas all year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
