import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function RokuChannelFreeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roku Channel Free Streaming for Seniors | TekSure" description="Free Roku Channel + alternatives. Senior free TV guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PlayCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Roku Channel</h1>
          <p className="text-lg text-muted-foreground">Free streaming, with ads.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free streaming.</li><li>With ads.</li><li>Movies + TV shows.</li><li>Live channels.</li><li>No login needed.</li><li>Senior friendly free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Other free options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tubi — Fox-owned.</li><li>Pluto TV — Paramount-owned.</li><li>Freevee — Amazon.</li><li>Crackle — Sony.</li><li>Plex — multi-source.</li><li>All free with ads.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Watch when bored.</li><li>No subscription needed.</li><li>Old movies + classic TV.</li><li>Game shows.</li><li>News channels too.</li><li>Free — try anytime.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Old shows</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>I Love Lucy.</li><li>Bonanza.</li><li>Andy Griffith.</li><li>MASH.</li><li>Senior nostalgic.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Live news + sports</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NewsNow on Pluto.</li><li>CBS News 24/7.</li><li>FreeVee live channels.</li><li>Senior current events.</li><li>Free stream.</li><li>Decent quality.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Roku Channel free on Roku.</li><li>Tubi/Pluto on Apple TV.</li><li>Web on computer.</li><li>Phone apps.</li><li>No login needed.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free + abundant</h3><p className="text-sm text-muted-foreground">Tubi + Pluto + Roku Channel + Freevee + Plex = thousands free TV shows + movies. Old senior favorites all free. Live news channels too. With ads (skip commercials by going to bathroom). No subscription. Many seniors fill afternoons here. Free entertainment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
