import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorKneeReplacementApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Knee Replacement Recovery for Seniors — TekSure" description="Apps for knee surgery recovery — Force Therapeutics, Recovery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Knee Replacement Recovery</h1>
          <p className="text-lg text-muted-foreground">700,000 seniors yearly.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Force Therapeutics</h2><p>FREE through some hospitals. Daily PT exercises. Connects to surgeon.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hinge Health</h2><p>FREE through Medicare Advantage. Knee program included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recovery timeline</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Week 1: home, walker</li><li>Week 4: cane</li><li>Week 6: most activities</li><li>Month 3: 90% recovery</li><li>Year 1: full recovery</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ice machines</h2><p>$300 cooling system. Reduces swelling. Often covered by insurance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily exercise</h2><p>Skip and recovery doubles. Painful but essential.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>Surgery + 36 PT sessions. Use them all.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pre-hab — strengthen knee 6 weeks before surgery. Faster recovery.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
