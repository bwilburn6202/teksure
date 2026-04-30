import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SiriusXMForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SiriusXM for Senior Music | TekSure" description="Satellite radio for seniors. Best stations + senior pricing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SiriusXM</h1>
          <p className="text-lg text-muted-foreground">Senior satellite radio.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Satellite radio.</li><li>$5-$15/month.</li><li>Hundreds channels.</li><li>News + music + comedy.</li><li>Senior commercial-free.</li><li>In car standard.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>50s, 60s, 70s channels.</li><li>Sinatra channel.</li><li>Classical.</li><li>Jazz.</li><li>News + talk.</li><li>Senior nostalgia.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pricing tricks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always negotiate.</li><li>Cancel — they offer deals.</li><li>$5-$10/month possible.</li><li>Senior haggle.</li><li>Don&apos;t pay rack rate.</li><li>Multiple cars discount.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stream too</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App on phone.</li><li>Listen at home.</li><li>Same subscription.</li><li>Senior multi-device.</li><li>WiFi or data.</li><li>No ads commercial-free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Spotify</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sirius — DJ curated.</li><li>Spotify — playlists you build.</li><li>Senior likes Sirius DJs.</li><li>Less effort.</li><li>Curated experience.</li><li>Worth subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cancel before renewal.</li><li>Get $5/mo offer.</li><li>Re-subscribe annually.</li><li>Senior savvy.</li><li>$60/year often.</li><li>Negotiating works.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$5-$10 SiriusXM = senior nostalgia</h3><p className="text-sm text-muted-foreground">Senior negotiates SiriusXM to $5-$10/month. 50s 60s 70s channels, Sinatra, classical jazz. DJ-curated. Stream in car + home + phone. Worth the haggle. Most senior-loved music service. Cancel + offer cycle saves big.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
