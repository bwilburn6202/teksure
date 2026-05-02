import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Antenna } from 'lucide-react';

export default function SeniorOTAAntennas() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OTA Antennas for Seniors — TekSure" description="Free over-the-air HDTV — antennas for seniors, no monthly bill." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Antenna className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OTA Antennas</h1>
          <p className="text-lg text-muted-foreground">FREE TV. Forever.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you get</h2><p>FREE: ABC, NBC, CBS, FOX, PBS, CW, plus 30+ subchannels.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best antennas</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Mohu Leaf ($30) — flat indoor</li><li>1byone outdoor ($60) — long range</li><li>Antop AT-410 ($90) — premium</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Check signal</h2><p>antennaweb.org. Type your zip. See available channels.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug into TV antenna jack. Run channel scan in TV settings. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tablo DVR</h2><p>$200. Records OTA shows. Watch later. Saves $20/month vs streaming DVR.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior favorite</h2><p>MeTV, Antenna TV, Cozi TV — free classic shows: Andy Griffith, Bonanza, MASH.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $30 antenna saves $80/month vs cable. Pays for itself in 2 weeks.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
