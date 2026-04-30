import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function VoiceTextingTrick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Texting Trick for Seniors | TekSure" description="Talk instead of type. Plain-English step-by-step for voice texting on iPhone, Android, and Apple Watch." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Texting Trick</h1>
          <p className="text-lg text-muted-foreground">Talk. Send. Done.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — Dictation</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Messages → tap conversation OR new message.</li>
              <li>Tap message field — keyboard appears.</li>
              <li>Tap microphone icon (bottom right of keyboard).</li>
              <li>Speak your message.</li>
              <li>Tap mic again to stop.</li>
              <li>Auto-punctuation since iOS 16+.</li>
              <li>Send.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android — Voice typing</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Messages app.</li>
              <li>Tap microphone icon on keyboard.</li>
              <li>Or hold spacebar.</li>
              <li>Speak message.</li>
              <li>Most Android phones auto-add punctuation.</li>
              <li>Tap stop, send.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice messages (audio sent)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Messages: hold microphone in message field.</li>
              <li>Speak. Release sends audio file.</li>
              <li>Recipient plays your voice.</li>
              <li>Better than text for emotional things.</li>
              <li>Slow voice typing? Send voice message instead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch dictation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap Messages → reply to text.</li>
              <li>Tap microphone.</li>
              <li>Speak. Watch translates.</li>
              <li>Or tap "Audio" — sends audio recording.</li>
              <li>Hands-free messaging without phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hands-free with Siri</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Hey Siri, send text to John."</li>
              <li>Siri asks: "What do you want to say?"</li>
              <li>Speak full message.</li>
              <li>Siri: "Ready to send?"</li>
              <li>Say "Yes" or "Send".</li>
              <li>Hands-free, eyes-free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why type at all?</h3>
            <p className="text-sm text-muted-foreground">For most seniors, voice is faster + easier than tapping tiny letters. After 1 week, voice texting becomes natural. 30 seconds of typing = 5 seconds of speaking.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
