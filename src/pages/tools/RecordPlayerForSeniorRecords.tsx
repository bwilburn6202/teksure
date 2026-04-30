import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Disc3 } from 'lucide-react';

export default function RecordPlayerForSeniorRecords() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Record Players for Senior Vinyl | TekSure" description="Modern turntables. Senior vinyl record guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Disc3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Record Players</h1>
          <p className="text-lg text-muted-foreground">Vinyl renaissance.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Audio-Technica AT-LP60X</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200.</li><li>Best entry-level.</li><li>Auto-return tonearm.</li><li>Senior easy.</li><li>Bluetooth version $250.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Suitcase players</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80 Crosley.</li><li>All-in-one.</li><li>Speakers built-in.</li><li>Senior simple.</li><li>Damages records (warning).</li><li>For occasional play.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pro-Ject Debut Carbon $500.</li><li>U-Turn Orbit $300.</li><li>Audiophile quality.</li><li>Senior worth it for collectors.</li><li>Better sound.</li><li>Less record wear.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Buy old records</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discogs app.</li><li>Local record stores.</li><li>Estate sales.</li><li>$5-$30 each.</li><li>Senior nostalgia hunt.</li><li>Affordable hobby.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Connect to speakers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in preamp models easier.</li><li>Or buy preamp $50.</li><li>Bluetooth easiest.</li><li>Senior simple.</li><li>Or self-amplified speakers.</li><li>Read manual.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Care for records</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Keep upright.</li><li>Inner sleeves.</li><li>Clean before play.</li><li>Senior preserve.</li><li>Worth investment.</li><li>Last decades.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200 turntable = senior vinyl revival</h3><p className="text-sm text-muted-foreground">$200 Audio-Technica AT-LP60X = senior easy entry into vinyl. Auto-return arm. Bluetooth $250 connects to any speaker. Discogs app finds old records cheap. Senior nostalgia hobby. Don&apos;t buy Crosley suitcase — damages records.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
