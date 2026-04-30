import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function AutoFixDIYAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto DIY + Repair Apps for Seniors | TekSure" description="OBD-II scanners + apps to diagnose your car. Senior DIY auto repair." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Auto DIY Apps</h1>
          <p className="text-lg text-muted-foreground">Diagnose check engine + more.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">OBD-II scanner</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug under steering wheel.</li>
              <li>$30-$100 for Bluetooth scanner.</li>
              <li>Connects to phone app.</li>
              <li>Reads check engine codes.</li>
              <li>Save mechanic visit.</li>
              <li>Fixz — popular app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube auto fix</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ChrisFix — most popular.</li>
              <li>ScannerDanner — diagnostics.</li>
              <li>Search your make/model + problem.</li>
              <li>Free, infinite content.</li>
              <li>Watch first to assess.</li>
              <li>Decide DIY or pro.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RepairPal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Repair cost estimates.</li>
              <li>Find certified mechanics.</li>
              <li>Read shop reviews.</li>
              <li>Avoid getting overcharged.</li>
              <li>Free app + website.</li>
              <li>Negotiate with confidence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior DIY ok</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Air filter replacement.</li>
              <li>Wiper blades.</li>
              <li>Battery testing.</li>
              <li>Topping fluids.</li>
              <li>Bulb replacement.</li>
              <li>Tire pressure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Take to mechanic</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Brakes.</li>
              <li>Anything under car.</li>
              <li>Engine work.</li>
              <li>Transmission.</li>
              <li>Anything you don&apos;t feel safe about.</li>
              <li>Senior physical limitations matter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vetting mechanics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RepairPal certified shops.</li>
              <li>BBB rated.</li>
              <li>Yelp + Google reviews.</li>
              <li>Get 2nd opinion for expensive jobs.</li>
              <li>Senior discount — ask.</li>
              <li>Cash discount sometimes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$30 OBD scanner saves $$</h3>
            <p className="text-sm text-muted-foreground">Buy $30 BlueDriver OBD-II Bluetooth scanner. When check engine light comes on, plug in, see code, Google what it means. Often a sensor issue ($50 part), not engine failure ($3,000). Many seniors save thousands on unneeded mechanic visits. Free DIY help via YouTube.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
