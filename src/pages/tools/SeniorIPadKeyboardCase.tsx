import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function SeniorIPadKeyboardCase() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Keyboard Cases — Senior Guide" description="Pick a keyboard case for your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Keyboard Cases</h1>
          <p className="text-lg text-muted-foreground">Type easier on iPad.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Magic Keyboard</h2><p>Apple's $300 official. Best feel. Backlit keys. Trackpad included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Logitech Combo Touch</h2><p>$200. Cheaper than Apple. Detachable.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Logitech K780</h2><p>$60 standalone Bluetooth keyboard. Pair to iPad. Big keys.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Why useful</h2><p>iPad onscreen keyboard takes up half the screen. Real keys faster.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Trackpad versions</h2><p>Magic Keyboard adds trackpad. Cursor on iPad like a Mac.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Backlit</h2><p>For typing in dim rooms. Magic Keyboard has it. Most cheaper ones don't.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If you write a lot, a real keyboard turns iPad into a laptop replacement.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
