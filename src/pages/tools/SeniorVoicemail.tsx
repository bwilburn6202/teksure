import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorVoicemail() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voicemail Tips for Seniors — TekSure" description="Visual voicemail, transcription, custom greetings for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voicemail for Seniors</h1>
          <p className="text-lg text-muted-foreground">Read voicemails. Easier.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Visual Voicemail</h2><p>FREE. iPhone built-in. See list. Choose what to play.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voicemail to text</h2><p>iPhone transcribes voicemails. Read instead of listen. Fast.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Voice</h2><p>FREE. Text transcription of voicemails. Email backup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Custom greeting</h2><p>Settings → Phone → Voicemail. Record clear, slow greeting.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip telemarketers</h2><p>Bots quit when phone goes to voicemail. Saves time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save important</h2><p>Long-press voicemail. Save to Notes. Family members&apos; voices forever.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save grandchildren&apos;s voicemails. They sound so different in years.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
