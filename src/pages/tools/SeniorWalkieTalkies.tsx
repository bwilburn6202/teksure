import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function SeniorWalkieTalkies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walkie Talkies for Seniors — TekSure" description="Senior-friendly walkie talkies — house intercom, around-property comms." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walkie Talkies for Seniors</h1>
          <p className="text-lg text-muted-foreground">Around the house communication.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>Calling spouse on big property. No phone needed. Push button.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Motorola Talkabout</h2><p>$50/pair. Easy senior use. 2-mile range.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show intercom</h2><p>FREE alternative. &ldquo;Alexa, drop in living room.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For hearing-impaired</h2><p>Loud volume settings. Easier than phone for many.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Camping/RV</h2><p>Stay connected on big campgrounds without phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Memory help</h2><p>For dementia care. Family stays in earshot.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Echo Dot in every room = free walkie talkie throughout house.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
