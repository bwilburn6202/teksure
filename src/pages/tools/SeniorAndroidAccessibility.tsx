import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorAndroidAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Accessibility — Senior Guide" description="Make Android easier to see and hear." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Accessibility</h1>
          <p className="text-lg text-muted-foreground">Make it work for your eyes, ears, and hands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Bigger text</h2><p>Settings, Accessibility, Display size and text. Slide font size larger.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Magnify</h2><p>Settings, Accessibility, Magnification. Triple-tap the screen to zoom in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. High contrast text</h2><p>Same screen — turn on bold or high-contrast text. Easier to read on bright days.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Live Caption</h2><p>Phone shows captions for any sound playing. Helpful for hearing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Hearing aids</h2><p>Settings, Connected devices. Pair Made for Android hearing aids over Bluetooth.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Voice Access</h2><p>Control the entire phone by voice. Useful for arthritis or hand tremors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Add an Accessibility shortcut so you can toggle features with two-finger tap.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
