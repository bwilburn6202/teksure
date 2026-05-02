import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorAndroidVoiceTyping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Typing on Android — Senior Guide" description="Type by speaking on Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Typing</h1>
          <p className="text-lg text-muted-foreground">Talk instead of type.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Where to find it</h2><p>Tap any text field. Tap the microphone icon on the keyboard.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Speak clearly</h2><p>Speak at a normal pace. Words appear as you say them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Punctuation</h2><p>Say comma, period, or question mark. Phone adds them in the right spot.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. New paragraph</h2><p>Say new line or new paragraph. Phone presses Enter for you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Delete a mistake</h2><p>Tap the wrong word. Backspace or speak the correction.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Stop dictation</h2><p>Tap the microphone icon again. Phone stops listening.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Quiet rooms work best. Background noise can change words you said.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
