import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function PandoraForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pandora for Seniors | TekSure" description="Free music streaming. Senior Pandora app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pandora</h1>
          <p className="text-lg text-muted-foreground">Free music radio.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free version</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with ads.</li><li>Type artist or song.</li><li>Builds station.</li><li>Thumbs up/down.</li><li>Senior discovery.</li><li>Owned by SiriusXM now.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Plus $5/mo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No ads.</li><li>Replay songs.</li><li>Skip unlimited.</li><li>Senior cleaner.</li><li>Worth $$.</li><li>Or stay free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium $10/mo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Full Spotify-like.</li><li>Pick any song.</li><li>Senior most flexibility.</li><li>Offline downloads.</li><li>30-day trial.</li><li>Compare Spotify.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior name a song.</li><li>Endless similar music.</li><li>Discovery without effort.</li><li>Free forever option.</li><li>Senior easier than Spotify.</li><li>Familiar interface.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Spotify</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Spotify — bigger library.</li><li>Pandora — radio + simple.</li><li>Senior simpler Pandora.</li><li>Both free + paid.</li><li>Try both.</li><li>Pick favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smart speaker</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, play Sinatra Pandora.&quot;</li><li>Streams to Echo.</li><li>Senior easy.</li><li>Hands-free.</li><li>Free version works.</li><li>Most kitchens.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Pandora = senior music discovery</h3><p className="text-sm text-muted-foreground">Free Pandora — type favorite artist, get endless similar. Senior discovery without effort. Plus $5 ad-free. Or use free with ads. Compare Spotify. Pandora simpler. Many seniors prefer for radio-style listening. Free version sufficient.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
