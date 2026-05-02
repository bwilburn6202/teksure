import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function SeniorMessenger() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Messenger for Seniors — Senior Guide" description="Use Messenger for free family chat." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Messenger</h1>
          <p className="text-lg text-muted-foreground">Free messaging through Facebook.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Get the app</h2><p>Free. Use existing Facebook account or sign up.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find friends</h2><p>App finds Facebook friends automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Video calls</h2><p>Tap camera icon. Free video calls. Up to 50 people.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Send photos and stickers</h2><p>Same chat as text. Photos in seconds.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Block strangers</h2><p>Settings, Privacy. Only friends can message.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Beware account-takeover</h2><p>If a friend's account asks for money, call them. Hacked accounts target seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Don't share Social Security or codes via Messenger. Real organizations don't ask there.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
