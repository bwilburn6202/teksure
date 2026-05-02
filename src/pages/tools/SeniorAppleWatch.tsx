import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function SeniorAppleWatch() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch for Seniors — Senior Guide" description="Set up and use an Apple Watch." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch</h1>
          <p className="text-lg text-muted-foreground">A health helper on your wrist.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a model</h2><p>SE is $249 — solid, good battery. Series 10 is $399 — bigger screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pair with iPhone</h2><p>Open Watch app on iPhone. Hold camera over watch screen. Walks through setup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Fall detection</h2><p>If you fall hard and don't move 60 seconds, watch auto-calls 911 and family.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Heart alerts</h2><p>High or low heart rate alerts. ECG app. Atrial fibrillation detection.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Find iPhone</h2><p>Lost the iPhone? Press Watch crown, tap ping iPhone icon. Phone chimes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Charge nightly</h2><p>Battery lasts 18-36 hours depending on model. Charge while you sleep.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Cellular plan ($10/month) lets watch make calls without iPhone nearby. Not required.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
