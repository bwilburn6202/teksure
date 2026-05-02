import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mouse } from 'lucide-react';

export default function SeniorMagicMouse() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Magic Mouse for Seniors — Senior Guide" description="Use Apple Magic Mouse smoothly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mouse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magic Mouse</h1>
          <p className="text-lg text-muted-foreground">Apple's smooth mouse.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Cost</h2><p>$99. Wireless. Touch surface for swiping.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Right-click</h2><p>Settings, Mouse, Secondary Click. Click right side. Same as right-click.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Swipe gestures</h2><p>Two fingers swipe to go back/forward in browser.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Battery life</h2><p>2-3 weeks per charge. Charge with USB-C.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Logitech alternative</h2><p>Logitech MX Master $99. More buttons. Better for long sessions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Trackpad</h2><p>Apple Magic Trackpad $130 — bigger surface. Better for arthritic hands.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If your hand cramps, try a vertical mouse. Easier on the wrist.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
