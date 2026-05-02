import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorCGMSensor() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Continuous Glucose Monitor — Senior Guide" description="Use a CGM to track blood sugar continuously." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CGM Sensors</h1>
          <p className="text-lg text-muted-foreground">Track blood sugar without finger pricks.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it is</h2><p>Small sensor on the back of your arm. Reads glucose every minute through your skin.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Brands</h2><p>Dexcom G7, Freestyle Libre 3, Abbott Lingo. Most stay on for 10-15 days.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Insurance</h2><p>Medicare covers Dexcom and Libre for many type 2 diabetics. Ask your doctor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Phone app</h2><p>Free apps show real-time numbers and trends. Phone vibrates if too high or low.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Share with doctor</h2><p>App generates reports doctors love. Helps fine-tune medication and diet.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. No prescription kinds</h2><p>Stelo and Lingo are over-the-counter for non-diabetic users curious about food choices.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Even one CGM cycle can change your eating habits — see how foods affect your blood sugar.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
