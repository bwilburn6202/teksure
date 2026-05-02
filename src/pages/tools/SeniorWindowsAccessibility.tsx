import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorWindowsAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows Accessibility — Senior Guide" description="Make Windows easier to see and use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Windows Accessibility</h1>
          <p className="text-lg text-muted-foreground">Make it work for your eyes, ears, and hands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Bigger text</h2><p>Settings, Accessibility, Text size. Drag slider larger. Affects every program.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Magnifier</h2><p>Press Windows key and plus to zoom in. Press Windows and Esc to close.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Narrator</h2><p>Settings, Accessibility, Narrator. Reads what is on screen aloud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Live Captions</h2><p>For any video or call. Captions appear at the top of the screen automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Mouse pointer</h2><p>Settings, Mouse pointer and touch. Make pointer bigger or change color so it's easier to spot.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Voice typing</h2><p>Press Windows + H in any program. Speak. Words appear on screen.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Press Win + U to open the Accessibility settings page from anywhere in Windows.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
