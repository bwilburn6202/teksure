import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorTaiChiApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tai Chi Apps for Seniors — TekSure" description="Tai Chi for seniors — proven balance, fall prevention." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tai Chi for Seniors</h1>
          <p className="text-lg text-muted-foreground">Proven fall prevention.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>Tai Chi reduces fall risk 45%. Better than other exercise types for balance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube</h2><p>FREE. &ldquo;Dr. Paul Lam&rdquo; or &ldquo;Senior Tai Chi.&rdquo; Best free instruction.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tai Chi for Health</h2><p>$50 DVD. Doctor-developed for arthritis and balance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior centers</h2><p>FREE classes. Most senior centers have weekly Tai Chi.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Outdoor option</h2><p>Many parks have free outdoor Tai Chi groups. Beautiful + social.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">15 min daily</h2><p>Better balance within 8 weeks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tai Chi is meditation in motion. Body + mind benefits.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
