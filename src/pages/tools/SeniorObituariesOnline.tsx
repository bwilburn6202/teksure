import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorObituariesOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Obituaries Online — Senior Guide" description="Find and write online obituaries." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Obituaries Online</h1>
          <p className="text-lg text-muted-foreground">Honor loved ones online.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Legacy.com</h2><p>Largest obituary site. Search any newspaper's notices.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Tribute pages</h2><p>Many funeral homes set up free tribute pages. Family adds photos and stories.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Sign up for alerts</h2><p>Newspaper alerts when someone with chosen name passes. Useful tracking distant cousins.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Light a candle</h2><p>Many tribute pages let visitors leave digital candles. Family appreciates support.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Genealogy</h2><p>Old obituaries often list family members. Helpful for ancestry research.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Beware scams</h2><p>Fake obituary scams sent by email asking to click. Open only links from known funeral homes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Writing your own obituary in advance saves family stress later. Worth doing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
