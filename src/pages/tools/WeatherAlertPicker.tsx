import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudLightning } from 'lucide-react';

export default function WeatherAlertPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Weather Apps — Storm and Hurricane Alerts | TekSure" description="Tornado, hurricane, ice storm? The right weather app warns you in time. Free picks for accurate alerts that save lives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudLightning className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weather Alert App Picker</h1>
          <p className="text-lg text-muted-foreground">Get warned in time. The right apps wake you up at 3 AM.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Already on your phone (free)</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>iPhone Weather app</strong> — improved a lot in the last few years. Live radar, hour-by-hour, severe weather alerts.</li>
              <li><strong>Google's weather</strong> on Android — pull down on your home screen, type "weather". Built into the Google app.</li>
              <li><strong>Wireless Emergency Alerts</strong> — federal system. Tornado warnings, AMBER alerts, presidential alerts. Already on by default. (Settings → Notifications → scroll down → Government Alerts.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top picks (all free)</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">RadarScope (free version) or RadarOmega (free)</p>
                <p className="text-muted-foreground">Same maps the National Weather Service uses. Sees storms 30+ minutes before regular weather apps. Best for tornado country.</p>
              </div>
              <div>
                <p className="font-bold">My Radar</p>
                <p className="text-muted-foreground">Smooth animated radar. Free version is plenty. Great hurricane tracker.</p>
              </div>
              <div>
                <p className="font-bold">The Weather Channel app</p>
                <p className="text-muted-foreground">Big-name app. Lots of ads in the free version, but reliable alerts.</p>
              </div>
              <div>
                <p className="font-bold">FEMA app</p>
                <p className="text-muted-foreground">Direct National Weather Service alerts plus FEMA disaster info. The official US emergency app.</p>
              </div>
              <div>
                <p className="font-bold">Watch Duty</p>
                <p className="text-muted-foreground">For wildfires — California, Colorado, Oregon, Washington, etc. Real-time fire alerts run by volunteer fire-watchers. Free.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hurricane prep — best free apps</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>National Hurricane Center</strong> via the Hurricane app or Twitter @NHC_Atlantic.</li>
              <li><strong>The Weather Channel</strong> for the cone forecast.</li>
              <li><strong>Power outage maps</strong> from your local utility (FPL, Duke Energy, etc.) — usually have free apps too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Also have a NOAA Weather Radio</h2>
            <p className="text-sm">Phone batteries die in storms. A $30 NOAA weather radio with battery backup wakes you up if a tornado warning hits at 3 AM, even if the power and cell tower are out. Get one with the SAME (Specific Area Message Encoder) feature so it only alerts for your county.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For grandparents who live elsewhere</h3>
            <p className="text-sm text-muted-foreground">Add their city to your iPhone or Android weather app. When a storm is heading their way, you'll see it. Many seniors can use a friendly text — "Heads up, big storm coming through your area Tuesday night, charge your phone."</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
