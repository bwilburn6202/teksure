import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fish } from 'lucide-react';

export default function FishbrainAnglerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fishing Apps for Senior Anglers | TekSure" description="Best fishing apps for seniors. Find spots, log catches, identify fish, check weather." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fish className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fishing Apps</h1>
          <p className="text-lg text-muted-foreground">Find spots. Log catches. Catch more fish.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why fishing apps?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find proven fishing spots near you.</li>
              <li>See what others caught + when.</li>
              <li>Identify mystery fish from photo.</li>
              <li>Log your own catches with date + size.</li>
              <li>Weather + tide info in one place.</li>
              <li>Connect with fishing community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fishbrain — most popular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with limits — Pro: $9.99/month.</li>
              <li>15 million users worldwide.</li>
              <li>Fishing spot maps with depth contours.</li>
              <li>Recent catch reports from other anglers.</li>
              <li>Fish ID by photo — free with app.</li>
              <li>Detailed weather + barometric pressure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FishAngler — free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Completely free — no premium.</li>
              <li>Catch logging + community.</li>
              <li>Weather and solunar (best fishing times).</li>
              <li>Fish identification.</li>
              <li>Less data than Fishbrain but free.</li>
              <li>Good for casual anglers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Navionics — for boaters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Marine charts for boat fishing.</li>
              <li>Detailed lake + ocean depth maps.</li>
              <li>Annual subscription required.</li>
              <li>Used by serious bass fishermen.</li>
              <li>Works with boat depth finder.</li>
              <li>Best for those who own a fishing boat.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weather + tide apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tides Near Me — free, simple tide tracker.</li>
              <li>Windy — wind forecasting essential for fishing.</li>
              <li>Solunar Forecast — best fishing times by moon.</li>
              <li>NOAA Weather — free official forecasts.</li>
              <li>Fish Track — saltwater specific.</li>
              <li>Most are free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">License + regulations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most states sell fishing license through state app.</li>
              <li>Some states free for seniors 65+.</li>
              <li>Check state fish + wildlife website.</li>
              <li>Apps show catch limits + size requirements.</li>
              <li>Special senior licenses often discounted or lifetime.</li>
              <li>Always carry license when fishing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with Fishbrain free</h3>
            <p className="text-sm text-muted-foreground">Download Fishbrain free version first. The fishing spot map alone is worth it. You can see exactly where local anglers caught fish recently. Many seniors discover great fishing spots a few miles from home they never knew existed. The Pro upgrade is worth it if you fish 2+ times a month and want all the depth charts and detailed data.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
