import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function SeniorAudibleBooks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audible for Seniors — Senior Guide" description="Listen to audiobooks with Audible." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audible</h1>
          <p className="text-lg text-muted-foreground">Books you can listen to.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>$15/month gets one credit (one book) plus audio podcasts. Try free for 30 days.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pick a book</h2><p>Tap a credit to redeem any book on Audible. Your book stays even if you cancel.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Listen anywhere</h2><p>App on phone or tablet. Listen while walking, cooking, gardening.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Adjust speed</h2><p>1.0x is normal. Slow to 0.75x for thick novels. Speed to 1.25x for fast non-fiction.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Sleep timer</h2><p>Pause after 15-30 minutes. Helpful at bedtime.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Free Plus catalog</h2><p>Members get hundreds of free titles too. Switch between any anytime.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Library Libby app has free audiobooks too. No subscription if you want to save money.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
