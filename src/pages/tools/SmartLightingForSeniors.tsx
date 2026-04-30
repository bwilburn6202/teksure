import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function SmartLightingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Lighting for Seniors | TekSure" description="Voice-controlled lights for senior safety + ease." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Lighting</h1>
          <p className="text-lg text-muted-foreground">Voice + automatic.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Philips Hue</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15-$50 per bulb.</li><li>Hub required ($60).</li><li>Premium ecosystem.</li><li>Senior reliable.</li><li>Most options.</li><li>Worth it for many.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TP-Link Kasa</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10-$15 bulbs.</li><li>No hub.</li><li>Wifi direct.</li><li>Senior simpler.</li><li>Cheaper.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, lights on.&quot;</li><li>From bed.</li><li>Auto-on at sunset.</li><li>Motion-activated bathroom.</li><li>Senior fall prevention.</li><li>Safer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Motion bathroom</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Smart bulb + motion sensor.</li><li>$30 setup.</li><li>Auto-light at night.</li><li>Senior bathroom safety.</li><li>Fall prevention key.</li><li>Worth every $.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schedules</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-on sunset.</li><li>Off at bedtime.</li><li>Vacation random.</li><li>Senior set + forget.</li><li>Energy savings.</li><li>Free in app.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Color senior</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Warm evening.</li><li>Cool morning.</li><li>Circadian healthy.</li><li>Senior sleep better.</li><li>Hue best colors.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$30 motion bathroom light = senior fall prevention</h3><p className="text-sm text-muted-foreground">$30 motion-activated bathroom smart light = senior fall prevention. No fumbling switches at 2am. Plus &quot;Alexa, lights on&quot; from bed. Auto-on sunset. Vacation security. TP-Link Kasa cheapest entry. Most senior life-safety smart upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
