import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function SeniorAITranslation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Translation for Seniors — Senior Guide" description="Translate languages on your phone instantly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Translation</h1>
          <p className="text-lg text-muted-foreground">Talk to anyone, anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Google Translate</h2><p>Free. Type, speak, or photograph text. Translates 130+ languages.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Apple Translate</h2><p>Built into iPhone and iPad. Works offline once languages are downloaded.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Conversation mode</h2><p>Each speaks their language. App translates back and forth in real time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Camera translation</h2><p>Point camera at a sign or menu. Translation appears on screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Download for travel</h2><p>Download the language before your trip. Works without internet abroad.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Speak slowly</h2><p>Speak in short sentences. Translation works better with pauses between phrases.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Helpful at the doctor too — translate medical terms or talk with a non-English-speaking nurse.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
