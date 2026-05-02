import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorYogaApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Yoga Apps for Seniors — TekSure" description="Gentle yoga apps for seniors — chair yoga, balance, and free options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Yoga Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Gentle stretches. Better balance.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Down Dog</h2><p>Free for seniors 65+. Pick &ldquo;gentle&rdquo; level. Custom 10-60 minute classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube — Yoga With Adriene</h2><p>Free. Search &ldquo;Yoga for Seniors&rdquo; — clear voice, slow pace.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers GO</h2><p>Free with most Medicare Advantage plans. Designed for ages 65+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Chair yoga</h2><p>Search &ldquo;chair yoga seniors&rdquo; on YouTube. No floor work needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Balance focus</h2><p>Tree Pose, Mountain Pose, and standing leg lifts reduce fall risk by 30%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stay safe</h2><p>Practice near a wall or sturdy chair. Stop if anything hurts.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 10 minutes daily beats 60 minutes once a week.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
