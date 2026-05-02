import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark } from 'lucide-react';

export default function SeniorTekSureBookmark() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bookmark TekSure for Quick Help — TekSure" description="Save TekSure to your home screen for one-tap senior tech help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bookmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bookmark TekSure</h1>
          <p className="text-lg text-muted-foreground">One-tap access to senior tech help.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone</h2><p>Open teksure.com in Safari. Tap Share → Add to Home Screen. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android</h2><p>Chrome → 3-dot menu → Add to Home Screen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you get</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>800+ senior tech guides</li><li>FREE always</li><li>No subscription</li><li>Plain English</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bookmark on computer</h2><p>Visit teksure.com. Press Ctrl+D (Cmd+D on Mac). Save to bookmark bar.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with friends</h2><p>Copy teksure.com to text. Send to senior friends. Pay it forward.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Suggest topics</h2><p>Email suggestions to feedback@teksure.com. We add what seniors ask for.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: TekSure is free forever. No accounts. No emails. Just help.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
