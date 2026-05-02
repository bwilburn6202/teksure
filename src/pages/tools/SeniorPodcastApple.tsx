import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorPodcastApple() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Podcasts for Seniors — Senior Guide" description="Use Apple Podcasts on iPhone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Podcasts</h1>
          <p className="text-lg text-muted-foreground">Built into your iPhone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open the app</h2><p>Purple icon. Built into iPhone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Tap the magnifying glass. Type any topic or show name.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Subscribe</h2><p>Tap Follow. New episodes appear in Library tab.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Download</h2><p>Tap cloud icon. Listen offline. Useful for flights and hikes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Speed</h2><p>Tap 1x to change speed. 1.25x or 1.5x for non-fiction.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Sleep timer</h2><p>Tap moon icon. Pauses after time you pick. Great for bedtime.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Senior favorites: NPR, BBC, AARP, Stuff You Should Know, History podcasts.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
