import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function HuntingAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hunting Apps for Seniors | TekSure" description="Best hunting apps for seniors. OnX, HuntStand, weather apps, and safety tech." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hunting Apps</h1>
          <p className="text-lg text-muted-foreground">Maps, weather, and safety for senior hunters.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">OnX Hunt — most popular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Maps showing public + private land lines.</li>
              <li>Know exactly whose property you&apos;re on.</li>
              <li>Owner names + acreage shown.</li>
              <li>Works offline — download maps before trip.</li>
              <li>$30/year for one state, $100 for all states.</li>
              <li>Industry standard for serious hunters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HuntStand — free option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free version with property lines.</li>
              <li>Pro: $30/year — premium maps.</li>
              <li>Wind direction tracking.</li>
              <li>Stand and trail cam location markers.</li>
              <li>Solunar best hunting times.</li>
              <li>Good free starting option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weather + wind apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Windy — best wind direction tracking.</li>
              <li>HuntCast — hunting-specific weather.</li>
              <li>Solunar Forecast — best activity times.</li>
              <li>Moon phase tracker — important for some game.</li>
              <li>NOAA Weather — free official forecasts.</li>
              <li>Cold front predictions for big game.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety apps + devices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Garmin inReach — satellite SOS messenger.</li>
              <li>Works where cell phones don&apos;t.</li>
              <li>$300+ device, $15/month subscription.</li>
              <li>Apple Watch Ultra — emergency SOS.</li>
              <li>Share location with family back home.</li>
              <li>Critical for hunting alone in remote areas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">License + regulations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most states sell licenses through state app.</li>
              <li>Senior discounts often available 65+.</li>
              <li>Some states offer lifetime senior licenses.</li>
              <li>Carry digital + paper backup.</li>
              <li>Apps show season dates + bag limits.</li>
              <li>Report harvests through state app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Helpful gear tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Trail cameras — Reconyx, Browning, Stealth Cam.</li>
              <li>Cellular trail cams send photos to phone.</li>
              <li>Heated socks + jacket — battery powered.</li>
              <li>Hand warmers — chemical or rechargeable.</li>
              <li>Rangefinders — accurate distance to target.</li>
              <li>Lighter modern firearms easier on shoulders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Garmin inReach for solo hunters</h3>
            <p className="text-sm text-muted-foreground">If you hunt alone in areas without cell service, a Garmin inReach Mini ($300 + $15/month) is the best safety investment. It can send your GPS location to family every 10 minutes and trigger an SOS that satellite-dispatches search and rescue. Many older hunters say this device gave their spouse the peace of mind to keep supporting their hunting trips.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
