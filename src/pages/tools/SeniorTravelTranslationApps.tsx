import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function SeniorTravelTranslationApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Translation Apps for Senior Travelers — TekSure" description="Best free translation apps for seniors traveling abroad — works offline." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Translation Apps for Travelers</h1>
          <p className="text-lg text-muted-foreground">Speak any language — even without Wi-Fi.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Translate</h2><p>Free. 130+ languages. Camera mode translates menus and signs in real time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Download offline</h2><p>Before you leave, tap the language and download it. Works without data charges abroad.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Conversation mode</h2><p>Tap the microphone. Speak English. The app speaks back in the local language. Pass the phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Translate</h2><p>Built into iPhone. Side-by-side mode for two people talking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microsoft Translator</h2><p>Group chat — up to 100 people, each in their own language.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Practice phrases</h2><p>Save common phrases (&ldquo;Where is the bathroom?&rdquo;) to your phrasebook for quick access.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Increase phone volume before showing translations to a non-English speaker.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
