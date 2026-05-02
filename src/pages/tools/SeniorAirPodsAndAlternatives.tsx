import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function SeniorAirPodsAndAlternatives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirPods for Seniors — TekSure" description="AirPods or budget alternatives for seniors — Live Listen, hearing aid mode." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirPods for Seniors</h1>
          <p className="text-lg text-muted-foreground">Great for low vision and hearing.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AirPods 4</h2><p>$129. Best fit for most ears. Auto-pause when you remove them.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AirPods Pro 2</h2><p>$249. Hearing aid mode (FDA approved). Noise cancellation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Conversation Boost</h2><p>AirPods Pro feature. Amplifies voices in noisy restaurants.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live Listen</h2><p>Place iPhone on table. AirPods become hearing aid microphone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alternatives</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Soundcore P30i ($35)</li><li>Jabra Elite 4 ($80)</li><li>Samsung Galaxy Buds 2 ($150)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find My AirPods</h2><p>Lost one? Open Find My app. Plays sound. Saves $130.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: AirPods Pro hearing aid mode is a $1000+ savings vs traditional hearing aids.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
