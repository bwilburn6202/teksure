import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorDictationApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dictation Apps for Seniors — TekSure" description="Speak instead of type — Dragon, Otter.ai, free phone dictation." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dictation Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Type with your voice.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone &amp; iPad</h2><p>FREE built in. Tap microphone on keyboard. Works in any app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Otter.ai</h2><p>FREE 300 minutes/month. Records meetings and transcribes automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dragon (Nuance)</h2><p>$200. Most accurate for long-form dictation. Best for novels or memoirs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Voice Typing</h2><p>FREE built into Android keyboard. Free in Google Docs too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mac Dictation</h2><p>FREE. Press fn key twice. Works system-wide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tips</h2><p>Speak clearly. Punctuation aloud: &ldquo;period,&rdquo; &ldquo;new paragraph,&rdquo; &ldquo;question mark.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Dictation makes texting and emailing 5x faster. Stop thumb-typing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
