import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function SeniorElectricalSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Electrical Safety — Senior Guide" description="Electrical safety tips for older homes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Electrical Safety</h1>
          <p className="text-lg text-muted-foreground">Stay safe at home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Test smoke alarms</h2><p>Press button monthly. Replace batteries yearly. Replace alarms every 10 years.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. CO detectors</h2><p>One per floor. Cheap insurance against carbon monoxide poisoning.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Smart plugs</h2><p>$15 each. Phone alerts if fire risk detected. Auto-shutoff for forgotten irons.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Surge protectors</h2><p>$25 each. Protect TVs and computers from lightning strikes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Ground-fault outlets</h2><p>Required in kitchens, bathrooms. Trip if water gets in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Old houses</h2><p>Pre-1970 homes may have aluminum or knob-and-tube wiring. Get inspected.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Free home safety checks from your fire department. Schedule once a year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
