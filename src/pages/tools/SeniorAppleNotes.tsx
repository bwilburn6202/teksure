import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorAppleNotes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Notes for Seniors — TekSure" description="Take notes, scan documents, share with family — Apple Notes for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Notes</h1>
          <p className="text-lg text-muted-foreground">Built into iPhone, iPad, Mac. Free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice typing</h2><p>Tap microphone. Speak. Notes turns words into text.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Scan documents</h2><p>Tap camera icon → Scan Documents. Crops perfectly. Saves as PDF.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with family</h2><p>Tap Share → Add People. Family edits same note. Shopping list, anyone?</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lock private notes</h2><p>Long-press a note → Lock. Use Face ID to unlock.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tags</h2><p>Type #recipes anywhere in a note. Filter all #recipes notes instantly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sketches</h2><p>Tap pencil. Draw with finger or Apple Pencil.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Use Notes for grocery lists. Check items off as you shop.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
