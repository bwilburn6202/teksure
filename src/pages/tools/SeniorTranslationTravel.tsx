import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function SeniorTranslationTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Translators for Seniors — TekSure" description="Pocketalk, Google Translate, real-time translation for seniors abroad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Translators</h1>
          <p className="text-lg text-muted-foreground">Speak any language.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pocketalk</h2><p>$300. Dedicated device. 80+ languages real-time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Translate</h2><p>FREE. Phone app. Camera + voice + text. 130+ languages.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Translate</h2><p>FREE on iPhone. Conversation mode = side-by-side.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Download offline</h2><p>Before flight. Free without data abroad. Critical.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Camera translate</h2><p>Point at menu, sign. Instant translation overlay.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Air translation</h2><p>AirPods + iPhone Live Translate. Real-time conversation.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Free Google Translate offline = $300 device equivalent. Save money.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
