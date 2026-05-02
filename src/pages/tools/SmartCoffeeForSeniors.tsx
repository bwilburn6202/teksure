import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

export default function SmartCoffeeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Coffee Makers for Seniors | TekSure" description="App-controlled coffee makers for senior morning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coffee className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Coffee Makers</h1>
          <p className="text-lg text-muted-foreground">Senior morning ease.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smart plug method</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15 smart plug.</li><li>Existing coffee maker.</li><li>Schedule auto-on.</li><li>Senior wakes to coffee.</li><li>Cheap upgrade.</li><li>Free senior fix.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smarter Coffee</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200-$300.</li><li>App-controlled.</li><li>Senior bedside scheduling.</li><li>WiFi.</li><li>Premium.</li><li>Worth coffee lovers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Keurig K-Supreme</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130.</li><li>Senior single-cup easy.</li><li>Pod variety.</li><li>App control K-Supreme Plus.</li><li>K-Cups expensive.</li><li>Worth single seniors.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-grind</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cuisinart $200 grind+brew.</li><li>Senior fresh coffee.</li><li>Schedule next morning.</li><li>Worth coffee snobs.</li><li>Less daily work.</li><li>Premium taste.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice control</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, brew coffee.&quot;</li><li>Smart plug + Alexa.</li><li>Senior morning voice.</li><li>Free magic.</li><li>$15 plug.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Maintenance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Descale monthly.</li><li>Vinegar + water.</li><li>Senior longer life.</li><li>Filter replace.</li><li>Free maintenance.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$15 smart plug = senior wake to coffee</h3><p className="text-sm text-muted-foreground">$15 smart plug + existing coffee maker = senior wakes to coffee. Schedule via Alexa or app. Don&apos;t need $300 smart coffee maker. Or Keurig $130 single-cup if solo. Most senior morning upgrade. Cheap + magic.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
