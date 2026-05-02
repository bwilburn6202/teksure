import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorEmergencySOS() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency SOS for Seniors — TekSure" description="How to use Emergency SOS on iPhone and Android — quick 911 call." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency SOS</h1>
          <p className="text-lg text-muted-foreground">Built into every iPhone and Android.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone</h2><p>Hold side button + either volume button. Slider appears for SOS.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android</h2><p>Press power button 5 times rapidly. Calls 911 (varies by phone).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set emergency contacts</h2><p>iPhone: Health app → Medical ID → Emergency Contacts. Android: Settings → Safety &amp; Emergency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medical ID on lock screen</h2><p>Anyone can see your medications, allergies, and contacts without unlocking your phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Crash detection</h2><p>iPhone 14+ and Pixel 6+ auto-call 911 after a serious crash.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Satellite SOS</h2><p>iPhone 14+ can text 911 even with no cell service. Free for 2+ years.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Practice SOS once. Knowing how to use it removes panic in a real emergency.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
