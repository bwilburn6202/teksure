import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorVoiceMessages() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Messages for Seniors — Senior Guide" description="Send voice messages instead of typing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Messages</h1>
          <p className="text-lg text-muted-foreground">Send your voice instead of typing.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. iPhone Messages</h2><p>Tap the microphone next to the keyboard. Speak. Tap up arrow to send.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Android Messages</h2><p>Hold the microphone icon. Speak. Release to send.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. WhatsApp voice</h2><p>Hold mic icon. Speak as long as you want. Slide left to cancel.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Marco Polo</h2><p>Free video walkie-talkie. Send video messages family watches when convenient.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Audio quality</h2><p>Speak slow and clear. Quiet room helps. Re-record if you need to.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Transcripts</h2><p>iPhone shows text version too. Recipients can read instead of listen.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Voice messages capture warmth that text can't. Family love hearing your voice.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
