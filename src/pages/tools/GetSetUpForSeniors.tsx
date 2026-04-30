import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function GetSetUpForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GetSetUp for Seniors | TekSure" description="Live online classes by + for seniors. GetSetUp guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GetSetUp</h1>
          <p className="text-lg text-muted-foreground">By + for seniors classes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Live online classes for 55+.</li><li>Taught by older adults.</li><li>Free with Medicare Advantage often.</li><li>$15/month otherwise.</li><li>Senior pace.</li><li>Patient teachers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Topics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone basics.</li><li>Computer skills.</li><li>Photography.</li><li>Genealogy.</li><li>Languages.</li><li>Senior-tailored.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free via insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many Medicare Advantage cover.</li><li>SilverSneakers benefit.</li><li>Check insurance.</li><li>Free senior education.</li><li>$0 if eligible.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Live + small group</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Real-time on Zoom.</li><li>Ask questions.</li><li>Patient instructors.</li><li>Same level peers.</li><li>Senior-friendly pace.</li><li>Less intimidating.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Recordings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Replay missed classes.</li><li>Pause + practice.</li><li>Senior repeat lesson.</li><li>Build confidence.</li><li>Available members.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior community</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Meet peers.</li><li>Discussion forums.</li><li>Friendships form.</li><li>Senior anti-loneliness.</li><li>Worth membership.</li><li>Beyond just classes.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free if Medicare Advantage</h3><p className="text-sm text-muted-foreground">GetSetUp often free with Medicare Advantage. Check insurance benefits. If yes — unlimited senior tech classes by senior teachers. Patient pace, peer community, real human help. Best senior tech learning option. Worth $15/mo if not free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
