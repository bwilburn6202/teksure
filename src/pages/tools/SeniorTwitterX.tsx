import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function SeniorTwitterX() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Twitter / X for Seniors — Senior Guide" description="Use Twitter (X) safely as a senior." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Twitter / X</h1>
          <p className="text-lg text-muted-foreground">Short messages from real people.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>Sign up at x.com. App in stores.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Follow news sources</h2><p>NPR, AP, BBC, your local paper. Useful for breaking news.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Watch for scams</h2><p>Crypto, fake giveaways, romance scams thrive here. Be skeptical.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mute and block</h2><p>Don't argue with strangers. Mute folks who upset you. Quiet your feed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Skip premium</h2><p>$8/month for blue check. Most don't need it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Limit time</h2><p>Twitter can be intense. 15 min/day plenty for many seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many alternatives: Bluesky, Mastodon, Threads. Try them if X feels too much.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
