import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Battery } from 'lucide-react';

export default function SeniorAndroidBattery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Battery Care — Senior Guide" description="Make your Android battery last longer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Battery className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Battery Care</h1>
          <p className="text-lg text-muted-foreground">Make a charge last longer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Lower brightness</h2><p>Pull down from top. Drag the brightness slider. The screen uses the most battery.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Battery Saver</h2><p>Settings, Battery, Battery Saver. Turn on automatically at 20%.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. See drain</h2><p>Settings, Battery, Battery usage. Find the app eating power. Force stop or uninstall.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Adaptive Battery</h2><p>Turn on. Phone learns your habits and limits power for apps you rarely use.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Avoid heat</h2><p>Don't leave the phone in a hot car. Heat kills batteries faster than anything.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Charge cycle</h2><p>Modern batteries do best between 20% and 80%. No need to fully drain anymore.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Most Android batteries last 2-3 years before holding less charge. Replacement is usually $50-90 at a shop.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
