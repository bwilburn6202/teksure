import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function SeniorAppleWatchSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch for Seniors — TekSure" description="Apple Watch setup for seniors — fall detection, ECG, fitness, calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch for Seniors</h1>
          <p className="text-lg text-muted-foreground">A medical alert + phone + fitness tracker.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Which to buy</h2><p>Apple Watch SE ($249) is enough. Series 10 ($399) adds bigger screen and ECG.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fall detection</h2><p>If you fall hard, watch calls 911 and tells your emergency contacts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ECG &amp; AFib alerts</h2><p>Series 4+. Detects irregular heart rhythm. Saved many lives.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Pair with iPhone. Open Watch app. Customize health and emergency contacts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family setup</h2><p>iPhone owners can set up an Apple Watch for a senior family member who has no iPhone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cellular option</h2><p>+$10/month. Watch makes calls without iPhone nearby. Good for walks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Charge while you brush teeth — watches charge fast and last 18+ hours.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
