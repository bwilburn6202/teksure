import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorReadingMode() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reading Mode in Browsers — Senior Guide" description="Strip ads and clutter from web articles." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reader Mode</h1>
          <p className="text-lg text-muted-foreground">Articles without the ads.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Safari Reader</h2><p>Tap AA in address bar. Tap Show Reader. Clean view of any article.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Chrome Reader</h2><p>Open menu, tap three dots, Simplified View. Removes ads from most articles.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Pocket app</h2><p>Free. Save articles. Read offline ad-free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Instapaper</h2><p>Free. Same idea. Save webpages for later reading.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Adjust text size</h2><p>Reader mode lets you adjust font, size, and background color.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Listen instead</h2><p>Reader mode + Speak Screen = an instant audiobook of any article.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Some sites detect Reader and show a paywall. Those work less well.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
