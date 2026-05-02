import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function SeniorMessengerVideo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Messenger for Seniors — TekSure" description="Video call family for free with Facebook Messenger — senior tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Messenger</h1>
          <p className="text-lg text-muted-foreground">Free video calls with anyone on Facebook.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Free if both have Facebook. No video call cost ever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy setup</h2><p>Download Messenger app. Sign in with Facebook. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Group calls</h2><p>Up to 50 people. Family reunions on holidays.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No phone numbers</h2><p>Just need Facebook friend connection. Easier than texts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch together</h2><p>Watch Together feature. Watch Netflix or YouTube with family virtually.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Block scammers</h2><p>Long-press a chat → Block. Spam disappears.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pin family to top of Messenger. One-tap calls every time.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
