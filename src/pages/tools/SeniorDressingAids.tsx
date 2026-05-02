import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorDressingAids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dressing Aids for Seniors — TekSure" description="Sock aids, button hooks, long-handled shoehorns for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dressing Aids</h1>
          <p className="text-lg text-muted-foreground">Independence in the morning.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sock aid</h2><p>$15. No bending. Pull socks on while sitting.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Long shoehorn</h2><p>$10. 30-inch shoehorn. No bending to put shoes on.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Button hook</h2><p>$10. Helps button shirts with arthritis hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zipper pull</h2><p>$5 for 5. Big rings pull zippers easier.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reacher/grabber</h2><p>$15. Pick things up without bending. 33-inch grabber.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Velcro shoes</h2><p>Easier than ties. Skechers, New Balance senior styles.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $60 worth of dressing aids = independence after hip surgery.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
