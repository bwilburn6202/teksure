import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function EVChargingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="EV Charging for Senior Drivers | TekSure" description="Electric car charging apps for seniors. Tesla, ChargePoint, EVgo explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">EV Charging</h1>
          <p className="text-lg text-muted-foreground">For senior electric car drivers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home charging</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Level 2 charger — $500-$1,500.</li>
              <li>Plus electrician install $500-$2,000.</li>
              <li>Charge overnight cheap.</li>
              <li>Full charge in 8-10 hours.</li>
              <li>Most seniors charge mostly at home.</li>
              <li>Convenient + affordable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Public charging apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>PlugShare — find any charger.</li>
              <li>ChargePoint — payment + locate.</li>
              <li>EVgo — fast chargers.</li>
              <li>Electrify America — Walmart locations.</li>
              <li>Tesla Supercharger — Tesla owners.</li>
              <li>Each has app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior road trip planning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>A Better Routeplanner — EV-aware GPS.</li>
              <li>Tesla maps — supercharger network.</li>
              <li>Plan stops every 200 miles.</li>
              <li>15-30 min charging breaks.</li>
              <li>Restroom + meal time.</li>
              <li>Slower trips, healthier breaks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$0.10-$0.30/kWh home electricity.</li>
              <li>$3-$8 per full charge.</li>
              <li>vs $40-$80 gas tank.</li>
              <li>$500-$2,000/year savings.</li>
              <li>Plus federal tax credit.</li>
              <li>State rebates often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best EVs for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hyundai Kona Electric — small SUV.</li>
              <li>Toyota bZ4X — Toyota reliability.</li>
              <li>Subaru Solterra — high seating.</li>
              <li>Chevy Bolt — affordable.</li>
              <li>Tesla Model Y — popular but pricier.</li>
              <li>Test drive before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Charging is different</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plan ahead more than gas car.</li>
              <li>Apps make it manageable.</li>
              <li>Don&apos;t let battery go below 20%.</li>
              <li>Cold weather drops range.</li>
              <li>Check range before trips.</li>
              <li>New habit, but easier than expected.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">EVs underrated for seniors</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re considering EV, the seniors who own them often love them. No oil changes, no gas stations, smooth quiet driving, lower maintenance. Charge at home overnight = full tank every morning. Best for short-trip suburban driving. Long road trips need planning but doable. Many seniors save $1,500+/year vs gas.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
