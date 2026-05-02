import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorBeadingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Beading & Crafts for Seniors — TekSure" description="Senior-friendly beading apps and supplies — calming hobby." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Beading &amp; Crafts</h1>
          <p className="text-lg text-muted-foreground">Calming. Creative. Skilled hands stay sharp.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pinterest</h2><p>FREE. Save craft ideas. Patterns. Tutorials.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube</h2><p>FREE. Search any craft + tutorial. Visual instructions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior crafts</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Knitting</li><li>Crochet</li><li>Beading</li><li>Card-making</li><li>Soap-making</li><li>Quilting</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sell on Etsy</h2><p>Pay for hobby. Many seniors earn $200+/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior craft clubs</h2><p>Local senior centers. Free supplies often. Social.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hand strength</h2><p>Beading and knitting maintain hand dexterity. Combats arthritis stiffness.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Magnifying lamps $30 help senior eyes. Worth every penny.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
