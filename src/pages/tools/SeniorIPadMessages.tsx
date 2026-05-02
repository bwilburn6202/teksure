import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function SeniorIPadMessages() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Messages on iPad — Senior Guide" description="Send texts and photos from your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Messages on iPad</h1>
          <p className="text-lg text-muted-foreground">Texting on a bigger keyboard.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign in</h2><p>Open Settings, tap Messages. Sign in with your Apple ID. iMessages now sync from iPhone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. New message</h2><p>Tap the pencil icon. Type a name or phone number. Type your message and tap the up arrow.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Send a photo</h2><p>Tap the camera icon. Pick a photo from your library, or take a new one.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Voice message</h2><p>Tap and hold the microphone. Speak. Release to send. Great when typing is hard.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Delete a chat</h2><p>Swipe left on a conversation in the list. Tap Delete to remove it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Block bad numbers</h2><p>Tap the name at the top of a chat. Tap Info, scroll down, tap Block this Caller.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Blue bubbles are iMessage (free over Wi-Fi). Green bubbles are regular text messages.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
