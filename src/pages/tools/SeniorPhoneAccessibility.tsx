import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorPhoneAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Accessibility for Seniors — TekSure" description="Hearing aid compatible, captioned phones, big-button phones for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Accessibility</h1>
          <p className="text-lg text-muted-foreground">Hearing-friendly options.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CapTel</h2><p>FREE captioned phone. Federal program. Reads conversations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hamilton CapTel</h2><p>FREE phone with captions. For hearing-impaired seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Made for iPhone</h2><p>Hearing aids stream calls direct. No phone earpiece.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live Captions</h2><p>FREE iPhone iOS 16+. Auto-captions any call. Read what&apos;s said.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big-button phones</h2><p>$30. Senior-friendly home phones. Speed dial.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Volume amplifier</h2><p>$60 phone amplifier. Doubles call volume.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: CapTel free phones. Federal program. Apply online.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
