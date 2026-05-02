import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

export default function SeniorMacBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Basics — Senior Guide" description="First steps with macOS on a Mac." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Laptop className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mac Basics</h1>
          <p className="text-lg text-muted-foreground">First steps on macOS.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. The Dock</h2><p>The row at the bottom holds your favorite apps. Click any to open.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Spotlight</h2><p>Press Command + Space. Type anything to find apps and files fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Apple menu</h2><p>The apple icon top left. Sleep, restart, or open System Settings from here.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mission Control</h2><p>Three-finger swipe up. See every open window at once.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Right-click</h2><p>Tap with two fingers on the trackpad. Same as right-click on a mouse.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Force quit</h2><p>If a program freezes — Command + Option + Esc. Pick the stuck app, click Force Quit.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Command on Mac is what Ctrl is on Windows. Most shortcuts swap one for the other.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
