import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorPilatesApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pilates Apps for Seniors — TekSure" description="Pilates for seniors — gentle core strengthening, balance." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pilates for Seniors</h1>
          <p className="text-lg text-muted-foreground">Better core. Better balance.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Glo</h2><p>$25/month. Pilates + yoga. Gentle senior-level classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pilatesology</h2><p>$25/month. Classical Pilates. Senior options.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube</h2><p>FREE. Search &ldquo;senior pilates beginner.&rdquo; Lots of content.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Chair pilates</h2><p>For limited mobility. Sitting work effective.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studios</h2><p>$30-$50/class. Professional instruction. Worth it for first month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Equipment</h2><p>Mat $20. Resistance band $10. Plenty for senior pilates.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 15 minutes of pilates 3x weekly improves senior balance dramatically.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
