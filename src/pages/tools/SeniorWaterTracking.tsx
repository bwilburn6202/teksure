import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorWaterTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Tracking Apps for Seniors — TekSure" description="Stay hydrated — water tracking apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Tracking Apps</h1>
          <p className="text-lg text-muted-foreground">Seniors dehydrate faster.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Seniors&apos; thirst signal weakens. Easy to dehydrate without realizing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">WaterMinder</h2><p>FREE basic. Custom goal. Sound reminder every 1-2 hours.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plant Nanny</h2><p>FREE. Plant grows with your water intake. Visual motivation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Health</h2><p>FREE. Built into iPhone. Log water with one tap.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart bottles</h2><p>HidrateSpark $40-$80. Reminds with light when you haven&apos;t drunk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Goal</h2><p>Most seniors need 6-8 cups daily. More if hot/medicated.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Big water bottle on counter you must finish daily. Visual reminder works.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
