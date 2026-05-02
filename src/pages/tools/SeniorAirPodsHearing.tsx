import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function SeniorAirPodsHearing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirPods as Hearing Aid — Senior Guide" description="Use AirPods Pro 2 as FDA-cleared hearing aids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirPods as Hearing Aid</h1>
          <p className="text-lg text-muted-foreground">A surprise hearing aid in your pocket.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AirPods Pro 2 only</h2><p>$249. Older AirPods don't have this feature.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Update iPhone</h2><p>iOS 18.1 or later. Settings, General, Software Update.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Take hearing test</h2><p>Settings, AirPods. Tap Take a Hearing Test. Quiet room. 5 minutes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Auto-amplify</h2><p>Mild-to-moderate loss — AirPods amplify voices in noisy places.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Conversation Boost</h2><p>Focus on people in front of you. Reduces background noise.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Battery</h2><p>6 hours per charge. Better than $4,000 hearing aids in some ways. Charge nightly.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Check with audiologist for severe loss. AirPods don't replace serious hearing aids — but help millions.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
