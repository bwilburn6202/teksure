import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function SeniorWhiteNoiseApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="White Noise Apps for Seniors — TekSure" description="Better sleep with white noise — White Noise Lite, Calm, free apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">White Noise Apps</h1>
          <p className="text-lg text-muted-foreground">Better sleep. Tinnitus relief.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">White Noise Lite</h2><p>FREE. Most popular. Ocean, rain, fan, brown noise.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">myNoise</h2><p>FREE. Most customizable. Adjust each frequency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calm</h2><p>$70/year. Sleep stories + nature sounds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart speaker</h2><p>&ldquo;Alexa, play rain sounds.&rdquo; FREE. No app needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For tinnitus</h2><p>Many seniors find white/brown noise reduces ringing in ears.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sleep timer</h2><p>Most apps have sleep timer. Audio fades after 30-60 minutes. Saves battery.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Bose Sleepbuds II ($300) play white noise without disturbing spouse.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
