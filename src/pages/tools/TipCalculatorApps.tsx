import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function TipCalculatorApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tip Calculator Apps for Seniors | TekSure" description="Easy tip calculators on phone. Stop doing math at restaurants." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tip Calculators</h1>
          <p className="text-lg text-muted-foreground">No more mental math at dinner.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Built into iPhone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Calculator app — free, built in.</li>
              <li>Type bill amount.</li>
              <li>× 0.18 = 18% tip.</li>
              <li>× 0.20 = 20% tip.</li>
              <li>Or use Siri: &quot;What&apos;s 18% of $42?&quot;</li>
              <li>No app needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tip Calculator apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tip n Split — most popular free app.</li>
              <li>Includes split-bill feature.</li>
              <li>Round-up + adjustment.</li>
              <li>Multiple tip percentages.</li>
              <li>Free with optional ads removal.</li>
              <li>Senior-friendly large buttons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Standard tipping</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Restaurants — 18-20% standard.</li>
              <li>Bars — $1-2 per drink.</li>
              <li>Hairdresser — 15-20%.</li>
              <li>Taxi/Uber/Lyft — 15-20%.</li>
              <li>Hotel housekeeping — $2-5/night.</li>
              <li>Bag handler — $1-2/bag.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Splitting bills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Splitwise app — free.</li>
              <li>Track who owes whom.</li>
              <li>Settle up via Venmo.</li>
              <li>Vacation expense tracking.</li>
              <li>Family group expenses.</li>
              <li>No more spreadsheets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior dining tip</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many credit cards have built-in tip suggestions.</li>
              <li>Or look at bottom of receipt.</li>
              <li>Servers often pre-fill 18-22-25%.</li>
              <li>Tap percentage you want.</li>
              <li>Many restaurants now offer percentage selectors.</li>
              <li>Calculator becomes optional.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-tax vs post-tax</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tip on pre-tax amount technically correct.</li>
              <li>Many tip on total — easier math.</li>
              <li>Server doesn&apos;t care which.</li>
              <li>Round up generously.</li>
              <li>Cash tips appreciated.</li>
              <li>Don&apos;t stress over $1.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Just ask Siri</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t install a tip calculator app. Just ask Siri: &quot;Hey Siri, what&apos;s 20% of $47?&quot; She tells you instantly. Free, built in, no math required. Combined with restaurant&apos;s built-in tip suggestions on credit card readers, calculating tips becomes effortless. Modern dining made easy for seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
