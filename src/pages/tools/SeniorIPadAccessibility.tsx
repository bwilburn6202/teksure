import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorIPadAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Accessibility — Senior Guide" description="Make your iPad easier to see, hear, and use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Accessibility</h1>
          <p className="text-lg text-muted-foreground">Make it work for your eyes, ears, and hands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Bigger text</h2><p>Settings, Display & Brightness, Text Size. Drag the slider to make every word bigger.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Bold text</h2><p>Same screen — turn on Bold Text. Easier to read in dim light.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Zoom</h2><p>Settings, Accessibility, Zoom. Triple-tap with three fingers to magnify any part of the screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Speak Screen</h2><p>Accessibility, Spoken Content. Swipe down with two fingers and iPad reads text out loud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Hearing aids</h2><p>Accessibility, Hearing Devices. Pair Made for iPhone hearing aids directly to iPad.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Touch Accommodations</h2><p>If taps are tricky, Accessibility, Touch. Adjust how long a tap must last to register.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The Accessibility Shortcut lets you triple-click the top button to toggle these features.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
