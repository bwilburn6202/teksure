import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function SeniorWhatsAppBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="WhatsApp for Seniors — TekSure" description="How seniors use WhatsApp to message family abroad for free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">WhatsApp for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free worldwide messaging and video calls.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why use it</h2><p>Free worldwide. Encrypted. Works on iPhone, Android, and computer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Download. Verify your phone number with a 6-digit code. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Message family</h2><p>Tap &ldquo;Chats&rdquo; → pencil icon → pick a contact who also has WhatsApp.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice and video calls</h2><p>Free worldwide. Tap phone or camera icon at top of any chat.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice messages</h2><p>Hold microphone icon. Speak. Release to send. Easier than typing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family group chat</h2><p>Make one group with all family. Share photos in one place.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Block unknown numbers — tap their name → Block contact.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
