import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

export default function SeniorEbookFonts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="E-book Font Settings — Senior Guide" description="Make digital books easier to read." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">E-book Font Settings</h1>
          <p className="text-lg text-muted-foreground">Set the perfect reading view.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Kindle</h2><p>Tap top of screen, Aa icon. Adjust font size, type, line spacing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. OpenDyslexic font</h2><p>Free font designed for dyslexia. Some readers find letters easier to track.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Bigger margins</h2><p>Reduce screen width. Less eye travel per line. Faster reading.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Sepia mode</h2><p>Warm-yellow background. Easier on eyes than bright white.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Dark mode at night</h2><p>White text on black background. Less glare in dark rooms.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Kindle Paperwhite warm light</h2><p>Adjustable color temperature. Warmer light at bedtime helps sleep.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Bigger fonts mean fewer words per page but more comfort. Trust your eyes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
