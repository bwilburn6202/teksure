import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function SeniorAppleWatchHeart() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Heart — Senior Guide" description="Use Apple Watch to monitor your heart." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch Heart</h1>
          <p className="text-lg text-muted-foreground">A doctor on your wrist.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. ECG app</h2><p>Hold finger on the crown. 30 seconds reads heart rhythm. FDA-cleared.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Atrial Fibrillation alerts</h2><p>Watch warns if it spots AFib. Lifesaver — early treatment prevents strokes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. High/low heart alerts</h2><p>Alerts when resting heart rate too high or too low. Worth checking with doctor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Share with cardiologist</h2><p>Export ECG as PDF in Health app. Email to your doctor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cardio Fitness</h2><p>Estimates VO2 max. Higher = stronger heart and lungs.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Watch as backup</h2><p>Apple Watch alerts have caught heart issues before symptoms. Real lifesaving stories.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Watch is a screening tool, not a diagnosis. Confirm any alert with a real doctor.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
