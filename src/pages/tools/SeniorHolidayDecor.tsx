import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorHolidayDecor() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Holiday Decor for Seniors — TekSure" description="Smart Christmas lights — voice control, no ladder needed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Holiday Decor</h1>
          <p className="text-lg text-muted-foreground">No ladders. Voice control.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Govee smart lights</h2><p>$30-$80. Color-changing strings. Voice-controlled. Music sync.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart plug for tree</h2><p>$15. Plug tree lights into smart plug. &ldquo;Alexa, turn on Christmas tree.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Twinkly lights</h2><p>$130-$300. App controls every bulb. Make any pattern.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pre-lit trees</h2><p>$200-$600. Already strung. No wrestling lights anymore.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Outdoor laser</h2><p>$30-$80. Project lights on house. No climbing ladders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Schedule lights</h2><p>Smart plug schedules — lights on at 5 PM, off at midnight automatically.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Smart plug + Christmas tree = best $15 senior holiday upgrade.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
