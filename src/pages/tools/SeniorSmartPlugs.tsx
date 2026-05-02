import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plug } from 'lucide-react';

export default function SeniorSmartPlugs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Plugs for Seniors — TekSure" description="Turn any lamp or appliance into a smart device for $10. Step-by-step for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Plugs for Seniors</h1>
          <p className="text-lg text-muted-foreground">$10 to make any lamp smart.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What they do</h2><p>Plug into the wall, plug your lamp or fan into them. Voice or app turns power on/off.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best picks</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Amazon Smart Plug — $24, easiest with Alexa</li><li>Wyze Plug — $15 for 2-pack</li><li>TP-Link Kasa — $20, very reliable</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior uses</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Coffee pot starts at 6 AM</li><li>Fan turns off at bedtime</li><li>Holiday lights on at sunset</li><li>Heating pad shuts off after 30 min</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug into wall. Open app. Press button on plug. App finds it. Connect Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice setup</h2><p>In Alexa app: tap &ldquo;Devices&rdquo; → plus sign → &ldquo;Add device.&rdquo; Done in 2 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Safety</h2><p>Don&apos;t use with high-watt heaters or AC units. Check the watt limit on the box.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Name plugs clearly: &ldquo;Living Room Lamp&rdquo; not &ldquo;Plug 1.&rdquo;</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
