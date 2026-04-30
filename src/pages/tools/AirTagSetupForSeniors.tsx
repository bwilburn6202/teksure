import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function AirTagSetupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirTag Setup for Seniors | TekSure" description="Track keys, wallets, luggage. Apple AirTag setup guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirTag Setup</h1>
          <p className="text-lg text-muted-foreground">Find anything you misplace.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it tracks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Keys, wallet, purse.</li><li>Luggage when traveling.</li><li>Car (anti-theft).</li><li>Walker, cane.</li><li>Anything attachable.</li><li>$30 each / 4-pack $99.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pull tab to activate.</li><li>Hold near iPhone.</li><li>Tap &quot;Connect.&quot;</li><li>Name it (&quot;Keys&quot;).</li><li>Done in 30 seconds.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find item</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open Find My app.</li><li>Tap &quot;Items.&quot;</li><li>Tap your AirTag.</li><li>Play sound.</li><li>Or directional arrow.</li><li>Walks you to it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Far away</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple network finds.</li><li>Last seen location.</li><li>Lost luggage at airport.</li><li>Stolen car often recovered.</li><li>Privacy preserving.</li><li>Senior peace of mind.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Memory + losing things common.</li><li>Find Mode mid-search.</li><li>Sound when keys hidden.</li><li>Stress reducer.</li><li>Independence preserver.</li><li>Best $30 senior tech.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Battery</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-year battery.</li><li>CR2032 coin battery.</li><li>$5 to replace.</li><li>Phone alerts when low.</li><li>Easy swap.</li><li>Senior friendly.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$30 = end senior &quot;where are my keys?&quot;</h3><p className="text-sm text-muted-foreground">Buy 4-pack AirTags ($99). Put on keys, wallet, purse, walker. Phone finds them anywhere. Track luggage at airport. Anti-theft for car. Many seniors find their iPhone first, then use it to find everything else. Best memory-preserving senior tech.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
