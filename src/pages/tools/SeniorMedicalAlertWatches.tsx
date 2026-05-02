import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function SeniorMedicalAlertWatches() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Alert Watches — Senior Guide" description="Choose a medical alert watch with fall detection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Alert Watches</h1>
          <p className="text-lg text-muted-foreground">Help is one button away.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Watch</h2><p>$249 and up. Fall detection, ECG, medications, family alerts. Cellular plan needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Samsung Galaxy Watch</h2><p>$199-300. Fall detection on newer models. Works with Android phones.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Medical Guardian</h2><p>Dedicated medical alert. $30-45/month. 24/7 monitoring center.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Lively Mobile Plus</h2><p>$99 device, $30/month. Simple. Works in shower. GPS location to family.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Fall detection</h2><p>If you fall, watch dials emergency automatically. Saves lives if you can't reach phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Charge daily</h2><p>Most need charging every 1-2 days. Set a habit — charge while showering.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Some Medicare Advantage plans cover medical alert services. Check your plan.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
