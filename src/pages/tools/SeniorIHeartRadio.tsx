import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorIHeartRadio() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iHeartRadio for Seniors — TekSure" description="Free iHeartRadio app — local AM/FM streaming for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iHeartRadio for Seniors</h1>
          <p className="text-lg text-muted-foreground">FREE. Listen to local stations anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FREE</h2><p>FREE app. No subscription needed. Most listen for years free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live AM/FM</h2><p>Most US stations stream live. Listen to local news anywhere.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big talk shows</h2><p>Coast to Coast AM. Glenn Beck. Sean Hannity. Built-in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Themed stations</h2><p>50s Pop. 70s Rock. Classic Country. Easy listening.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sleep timer</h2><p>Fall asleep to talk radio. Auto-shuts off in 30-60 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart speakers</h2><p>&ldquo;Alexa, play 1010 WINS New York on iHeartRadio.&rdquo; Local hometown station anywhere.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Listen to childhood hometown radio. Memories instant.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
