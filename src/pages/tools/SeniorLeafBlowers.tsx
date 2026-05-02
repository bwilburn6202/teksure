import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function SeniorLeafBlowers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Battery Leaf Blowers for Seniors — TekSure" description="Light, quiet leaf blowers for seniors — Ego, Stihl, Greenworks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Battery Leaf Blowers</h1>
          <p className="text-lg text-muted-foreground">Light. Quiet. Senior-friendly.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why battery</h2><p>Lighter than gas. No pull cords. No fumes. Quiet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ego LB6504</h2><p>$280. Most powerful battery blower. Real gas-replacement.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Greenworks 24V</h2><p>$80. Light. Plenty for small lawns.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stihl BGA 56</h2><p>$200. Quiet. Trusted senior brand.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Battery system</h2><p>Buy mowers + trimmers from same brand. Share batteries. Save money.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hire instead</h2><p>$30-$60/visit. Worth it for many seniors. Saves back/heart.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: TaskRabbit and lawn services often $30 to do leaves. Save your back.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
