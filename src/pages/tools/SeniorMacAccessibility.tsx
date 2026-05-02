import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorMacAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Accessibility — Senior Guide" description="Make your Mac easier to see, hear, and use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mac Accessibility</h1>
          <p className="text-lg text-muted-foreground">Make it work for your eyes, ears, and hands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Bigger text</h2><p>System Settings, Displays. Pick Larger Text. Affects every program.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Zoom</h2><p>Settings, Accessibility, Zoom. Hold Control and scroll to zoom in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. VoiceOver</h2><p>Reads what is on screen aloud. Press Command + F5 to toggle on or off.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Live Captions</h2><p>Settings, Accessibility, Live Captions. Captions appear for any video or call.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Bigger pointer</h2><p>Settings, Accessibility, Display. Drag pointer size larger to spot the cursor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Voice Control</h2><p>Run the whole Mac by voice. Settings, Accessibility, Voice Control.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The Accessibility shortcut: triple-press Command. Quickly toggle features without menus.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
