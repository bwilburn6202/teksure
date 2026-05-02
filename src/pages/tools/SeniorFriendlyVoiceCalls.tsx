import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorFriendlyVoiceCalls() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Friendly Voices Programs for Seniors — TekSure" description="Free phone friendship — Friendship Line, AARP, Institute on Aging." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Friendly Voices</h1>
          <p className="text-lg text-muted-foreground">Free phone friends.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Friendship Line</h2><p>FREE 24/7. 1-800-971-0016. For seniors who want to talk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Line</h2><p>FREE. AARP volunteers call seniors weekly. Sign up at aarp.org.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eldercare Locator</h2><p>FREE 1-800-677-1116. Connects to local senior services.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Crisis Text Line</h2><p>Text HOME to 741741. Free 24/7 emotional support.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">988 Suicide Lifeline</h2><p>FREE 988. If feeling depressed or hopeless. 24/7.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No shame</h2><p>Loneliness is real. Phone friends are real friends. Use these resources.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Friendship Line is FREE 24/7. Trained listeners. Senior-specific.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
