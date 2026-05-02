import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorIPadSafari() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Safari on iPad — Senior Guide" description="Browse the web on iPad with Safari." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Safari on iPad</h1>
          <p className="text-lg text-muted-foreground">Search the web with confidence.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Safari</h2><p>Tap the blue compass icon. The address bar is at the top.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Tap the address bar. Type a question like weather Tucson. Tap Go on the keyboard.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Bookmark a site</h2><p>Tap the share box. Tap Add Bookmark. Find it later under the open-book icon.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Make text bigger</h2><p>Tap the AA button left of the address bar. Tap the big A to zoom in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Reader mode</h2><p>Tap AA, then Show Reader. Ads vanish and the article shows clean text.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Close tabs</h2><p>Tap the squares icon top right. Tap the X on any tab to close it. Keeps things tidy.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Never enter a password or credit card on a site that does not show a padlock in the address bar.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
