import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

export default function SeniorWaterSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Safety + Detection for Senior Homes | TekSure" description="Smart water leak detection. Prevent damage with sensors + smart shutoffs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Safety</h1>
          <p className="text-lg text-muted-foreground">Detect leaks before damage.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why detect water?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Burst pipes cause $10,000+ damage average.</li>
              <li>Often happens while away.</li>
              <li>Hot water tank failures common.</li>
              <li>Slow leaks under sink go unnoticed.</li>
              <li>Insurance increasingly requires detection.</li>
              <li>Senior homes especially vulnerable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Basic sensors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Govee water sensor — $30 for 2-pack.</li>
              <li>Place under sinks, by water heater, washing machine.</li>
              <li>Beeps loudly when water detected.</li>
              <li>WiFi versions alert phone.</li>
              <li>$50 for 4-pack covers whole home.</li>
              <li>Battery-powered.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart shutoff valves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phyn Plus — $700, automatic shutoff.</li>
              <li>Flo by Moen — $400+, similar.</li>
              <li>Detects leaks AND closes water.</li>
              <li>Prevents catastrophic damage.</li>
              <li>Insurance discount sometimes.</li>
              <li>Install or have plumber.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hub-connected sensors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Aqara, Samsung SmartThings.</li>
              <li>Multiple sensors connect to hub.</li>
              <li>Alerts via app worldwide.</li>
              <li>Combined with smart shutoff = best.</li>
              <li>Snowbirds especially benefit.</li>
              <li>Peace of mind when away.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free preventive habits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace washing machine hoses every 5 years.</li>
              <li>Replace water heater at 8–12 years.</li>
              <li>Inspect under sinks monthly.</li>
              <li>Insulate pipes against freezing.</li>
              <li>Drip faucets in cold snaps.</li>
              <li>Know main shutoff location.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many insurers discount with detectors.</li>
              <li>5–15% off homeowners typical.</li>
              <li>Sometimes pays for sensor cost.</li>
              <li>Ask State Farm, Allstate, Nationwide.</li>
              <li>Document installation.</li>
              <li>Senior Travelers + USAA known to discount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$30 sensor pack starts you</h3>
            <p className="text-sm text-muted-foreground">For $30, buy a Govee 2-pack water sensor at Amazon. Place one under the kitchen sink, one near the washing machine. Loud beep when water detected. The $30 could save you a $10,000+ insurance claim. Many seniors who&apos;ve had floods say the only thing they wish they&apos;d done sooner is install these sensors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
