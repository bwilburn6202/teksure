import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorHomeRadioApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Internet Radio Apps for Seniors — TekSure" description="Free radio apps — TuneIn, iHeartRadio, SiriusXM streaming." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Internet Radio</h1>
          <p className="text-lg text-muted-foreground">Listen to any radio station, anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TuneIn</h2><p>FREE. 100,000+ AM/FM stations worldwide. Talk radio, music, sports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iHeartRadio</h2><p>FREE. US stations + custom stations. Owns Coast to Coast AM, etc.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NPR One</h2><p>FREE. NPR programming + your local public radio.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SiriusXM</h2><p>$10-$25/month. Premium stations. Howard Stern, classic country, oldies.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart speaker</h2><p>&ldquo;Alexa, play WSB Atlanta.&rdquo; &ldquo;Hey Google, play classical music.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Old radio still works</h2><p>FM transmitter $20 + Echo Dot. Plays Echo audio through old radio.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Listen to childhood hometown radio station. Memories instantly come back.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
