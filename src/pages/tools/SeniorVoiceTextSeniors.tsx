import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorVoiceTextSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Typing for Seniors — TekSure" description="Speak instead of typing — voice typing on iPhone, Android, computer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Typing for Seniors</h1>
          <p className="text-lg text-muted-foreground">No more thumb typing.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone &amp; iPad</h2><p>Tap microphone on keyboard. Speak. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android</h2><p>Same — microphone icon on the Gboard keyboard.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Punctuation</h2><p>Say &ldquo;period,&rdquo; &ldquo;comma,&rdquo; &ldquo;question mark,&rdquo; &ldquo;new line.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mac voice typing</h2><p>System Settings → Keyboard → Dictation. Press fn key twice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Windows voice typing</h2><p>Press Windows + H. Built-in. Works in any app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Slow down</h2><p>Speak clearly. Pause between sentences. Accuracy improves with practice.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Voice typing saves seniors with arthritis or shaky hands hours a week.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
