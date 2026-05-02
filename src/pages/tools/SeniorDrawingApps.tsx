import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function SeniorDrawingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Drawing Apps for Seniors — TekSure" description="Best drawing apps for seniors — Procreate, Tayasui Sketches, Concepts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Drawing Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Paint, sketch, watercolor — digitally.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Procreate (iPad)</h2><p>$13 once. Most popular. Realistic brushes. No subscription.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tayasui Sketches (free)</h2><p>FREE. Beautiful watercolor effects. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Concepts</h2><p>FREE basic. Best for technical drawings or maps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stylus</h2><p>Apple Pencil ($79+). Logitech Crayon ($69) cheaper option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No mess</h2><p>Unlimited &ldquo;paint&rdquo; — no waste. Undo any mistake. Try anything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube tutorials</h2><p>Free Procreate lessons. Search &ldquo;Procreate beginner.&rdquo; Many seniors learn fast.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Drawing reduces anxiety and boosts mood. Real therapy.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
