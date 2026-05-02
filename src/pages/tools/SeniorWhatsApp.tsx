import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function SeniorWhatsApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="WhatsApp for Seniors — Senior Guide" description="Free messages and calls anywhere with WhatsApp." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">WhatsApp</h1>
          <p className="text-lg text-muted-foreground">Free messages, voice, and video — anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Free. Verify with your phone number. Owned by Meta but encrypted end-to-end.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Add contacts</h2><p>WhatsApp uses your phone contacts. Anyone with WhatsApp will appear automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Message family abroad</h2><p>Free messages, photos, and video calls anywhere in the world. Uses Wi-Fi or data.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Voice notes</h2><p>Hold the microphone. Speak. Release to send. Quick and personal.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Group chats</h2><p>Make a chat for the whole family. Share photos with everyone at once.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Beware scams</h2><p>If you get a message from grandkid asking for money, call them. Common scam.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>End-to-end encryption means even WhatsApp cannot read your messages.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
