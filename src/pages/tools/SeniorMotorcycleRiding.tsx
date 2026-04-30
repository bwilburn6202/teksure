import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

export default function SeniorMotorcycleRiding() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Motorcycle Riding for Senior Riders | TekSure" description="Apps + safety tools for senior motorcyclists. GPS, weather, route planning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Motorcyclists</h1>
          <p className="text-lg text-muted-foreground">Apps + safety for older riders.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calimoto — twisty roads finder.</li>
              <li>REVER — track + share rides.</li>
              <li>EatSleepRIDE — group rides.</li>
              <li>Beeline — minimal GPS.</li>
              <li>Free + paid options.</li>
              <li>Pick what fits your style.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior rider safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reflexes slow with age — ride defensively.</li>
              <li>Eye exam annually — vision matters.</li>
              <li>ATGATT — All The Gear, All The Time.</li>
              <li>Bright clothing visibility.</li>
              <li>Riding course refresher.</li>
              <li>Know your limits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bluetooth helmets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sena, Cardo — top brands.</li>
              <li>$200-$400 for unit.</li>
              <li>Music + GPS + calls hands-free.</li>
              <li>Group communication.</li>
              <li>Quality important for senior ears.</li>
              <li>Highly recommended.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group ride apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find local riding clubs.</li>
              <li>Senior motorcycle groups.</li>
              <li>HOG (Harley Owners Group).</li>
              <li>Christian Motorcyclists Assoc.</li>
              <li>Local chapter events.</li>
              <li>Safer + more social.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weather + roads</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Storm radar before riding.</li>
              <li>Skip wet roads if possible.</li>
              <li>Note hazards in app.</li>
              <li>Plan stops every hour.</li>
              <li>Hydration + breaks.</li>
              <li>Senior fatigue real.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to slow down</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Honestly assess vision + reaction.</li>
              <li>Eye doctor consultation.</li>
              <li>Switch to trike if balance issues.</li>
              <li>Smaller bike if heavy gets hard.</li>
              <li>Day rides only as get older.</li>
              <li>Listen to your body + family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bluetooth helmet upgrade</h3>
            <p className="text-sm text-muted-foreground">If you ride and don&apos;t have Bluetooth helmet — biggest senior upgrade. Sena 50S or Cardo Packtalk Edge ($300-$400). Hear GPS directions, take phone calls, listen to music, talk to riding buddies. Especially valuable for senior riders. Worth every dollar for safety + enjoyment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
