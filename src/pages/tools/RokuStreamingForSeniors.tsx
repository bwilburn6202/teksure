import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function RokuStreamingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roku Streaming for Seniors | TekSure" description="Senior-friendly Roku streaming devices." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roku</h1>
          <p className="text-lg text-muted-foreground">Senior streaming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Roku Express</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30.</li><li>Cheapest streaming.</li><li>HD enough most TVs.</li><li>Senior simple.</li><li>Most apps.</li><li>Great value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Roku Ultra</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100.</li><li>4K + voice remote.</li><li>Headphone jack — private listening.</li><li>Senior favorite feature.</li><li>Lost remote finder.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Headphone jack</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug in remote.</li><li>Spouse asleep — listen private.</li><li>Senior hearing helper.</li><li>Best Roku feature.</li><li>$100 worth alone.</li><li>Game-changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice remote</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Find Yellowstone.&quot;</li><li>Across all apps.</li><li>Senior no typing.</li><li>Find remote button.</li><li>Free with Ultra.</li><li>Easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free Roku Channel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free movies + TV.</li><li>With ads.</li><li>Senior frugal.</li><li>Live news channels free.</li><li>Tubi + Pluto too.</li><li>Endless content.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug HDMI.</li><li>Wifi connect.</li><li>Add channels.</li><li>Senior 30 min.</li><li>Family help first time.</li><li>Then easy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 Roku Ultra = senior headphone jack</h3><p className="text-sm text-muted-foreground">$100 Roku Ultra = senior headphone jack on remote — listen private while spouse sleeps. Voice remote &quot;find Yellowstone.&quot; Lost remote finder. Plus free Roku Channel + Tubi + Pluto. Most senior streaming feature ever.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
