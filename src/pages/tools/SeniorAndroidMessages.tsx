import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function SeniorAndroidMessages() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Messages on Android — Senior Guide" description="Send texts and photos on Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Messages on Android</h1>
          <p className="text-lg text-muted-foreground">Texting made simple.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Messages</h2><p>Tap the blue speech-bubble icon. Recent chats are listed by date.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. New text</h2><p>Tap Start chat. Type a name or phone number. Type your message. Tap the arrow.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Send a photo</h2><p>Tap the plus or paperclip icon. Pick from gallery or take a new photo.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Voice note</h2><p>Hold the microphone icon. Speak. Release to send. Quick and hands-free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Block a number</h2><p>Tap a chat. Tap the three dots. Tap Block & report spam.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. RCS chat</h2><p>Modern Android texts use RCS — read receipts, big photos, group chats. Free.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Never share Social Security or bank numbers by text. Real banks never ask this way.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
