import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorArthritisApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Arthritis Apps for Seniors — TekSure" description="Track arthritis pain, exercises, weather triggers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Arthritis Apps</h1>
          <p className="text-lg text-muted-foreground">Manage daily.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PainScale</h2><p>FREE. Track pain by location. Find triggers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RheumaTrack</h2><p>FREE. RA-focused. Joint diary.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vimify</h2><p>FREE. RA video exercises. Works through pain safely.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Heat/cold therapy</h2><p>Free. Heat for stiff joints. Cold for swelling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Range of motion</h2><p>Daily 5-min stretches keep joints mobile. Use it or lose it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When weather hurts</h2><p>Apps track if pain correlates with barometric pressure changes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Movement reduces arthritis pain. Avoid all-day sitting.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
