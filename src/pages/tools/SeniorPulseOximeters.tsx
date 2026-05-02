import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorPulseOximeters() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pulse Oximeters for Seniors — TekSure" description="Track blood oxygen — fingertip oximeters for seniors with COPD, asthma." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pulse Oximeters</h1>
          <p className="text-lg text-muted-foreground">Critical for COPD, asthma, heart issues.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$20-$40. Drug store or Amazon. Reliable basics.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Normal range</h2><p>95-100% oxygen saturation. Below 92% = call doctor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>COPD</li><li>Asthma</li><li>Heart failure</li><li>Sleep apnea check</li><li>COVID symptoms</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch</h2><p>Series 6+. Built-in oxygen. Less accurate but always on wrist.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to use</h2><p>Daily for COPD/heart failure. Or if feeling short of breath.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tips</h2><p>Warm fingers. Remove polish. Sit still 30 seconds.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Below 88% sustained = oxygen therapy needed. Doctor immediately.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
