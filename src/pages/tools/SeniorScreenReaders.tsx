import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function SeniorScreenReaders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Screen Readers for Seniors — TekSure" description="Read screens aloud — VoiceOver, TalkBack, NVDA, JAWS for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Screen Readers</h1>
          <p className="text-lg text-muted-foreground">Phone reads everything aloud.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VoiceOver (iPhone)</h2><p>FREE built in. Settings → Accessibility → VoiceOver.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TalkBack (Android)</h2><p>FREE built in. Settings → Accessibility → TalkBack.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speak Selection (easier)</h2><p>iOS: Highlight text → Speak. Use this without full screen reader.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">JAWS (Windows)</h2><p>$1,170. Most powerful. Available with grants for low-income seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NVDA (Windows)</h2><p>FREE. Open source. Strong free alternative to JAWS.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Learning curve</h2><p>Takes 1-2 weeks to use comfortably. Worth the effort for low vision.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Free Aging in Place sessions teach VoiceOver to seniors. Free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
