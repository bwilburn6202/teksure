import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorMouthwashChoice() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Mouthwash for Seniors — TekSure" description="Mouthwash for dry mouth, gum disease, cavities — senior options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mouthwash for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pick the right one.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dry mouth</h2><p>Biotene. Common from senior medications. Restores moisture.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cavity prevention</h2><p>ACT Anticavity. Fluoride. Best for new fillings or crowns.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Gum disease</h2><p>Listerine Antiseptic. Kills bacteria. Strong burn.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sensitive mouth</h2><p>Tom&apos;s of Maine, CloSYS. No alcohol. Gentler.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid alcohol</h2><p>Many seniors with dry mouth should avoid alcohol-based mouthwash. Worsens issue.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Twice daily</h2><p>30 seconds after brushing. Don&apos;t rinse with water after.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ask dentist which mouthwash for your specific needs.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
