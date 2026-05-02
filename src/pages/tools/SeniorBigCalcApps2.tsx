import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SeniorBigCalcApps2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Big-Button Calculator Apps 2 — Senior Guide" description="Senior-friendly big-button calculators." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Big-Button Calculators</h1>
          <p className="text-lg text-muted-foreground">Larger buttons, easier on eyes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Calculator Pro</h2><p>Free. Big buttons. History tape. Like the desk calculator from work.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. CALCU</h2><p>Free. Large customizable buttons. Pro version $4 removes ads.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Senior Calculator</h2><p>Free. Specifically big buttons. Simple interface for older adults.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. iPhone landscape mode</h2><p>Turn iPhone sideways with built-in Calculator app. Buttons get bigger automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Voice math</h2><p>Hey Siri or Hey Google + What's 25 percent of 80? Speaks the answer aloud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Tablets</h2><p>iPad or Android tablet has even bigger buttons. Best for serious calculations.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Tap the Calculator app's display, hold, copy. Paste into Notes for receipts.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
