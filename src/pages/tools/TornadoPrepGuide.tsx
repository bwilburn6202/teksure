import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function TornadoPrepGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tornado Prep for Seniors | TekSure" description="Prepare for tornadoes safely. Plain-English senior tornado guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tornado Prep</h1>
          <p className="text-lg text-muted-foreground">Plan now. Save lives later.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch vs Warning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Watch</strong> — conditions favorable. Be ready.</li>
              <li><strong>Warning</strong> — tornado spotted. Take shelter NOW.</li>
              <li>Don&apos;t wait to see it.</li>
              <li>Tornado sirens audible 2-3 miles.</li>
              <li>NOAA radio for in-home alerts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to shelter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>BEST</strong>: storm shelter / underground.</li>
              <li><strong>2nd best</strong>: basement.</li>
              <li><strong>3rd</strong>: interior bathroom (mid-house, no windows).</li>
              <li><strong>4th</strong>: hallway closet.</li>
              <li>NEVER: trailer, mobile home, car.</li>
              <li>Cover with mattress / heavy blanket.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tornado kit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Closed-toe shoes (debris).</li>
              <li>Flashlight + battery.</li>
              <li>Phone fully charged.</li>
              <li>Glasses + hearing aids.</li>
              <li>Medications.</li>
              <li>Water + snacks.</li>
              <li>Whistle.</li>
              <li>Helmet (bike helmet works).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If mobile home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>LEAVE — get to nearest sturdy building.</li>
              <li>Many parks have community shelters.</li>
              <li>Plan ahead — know where to go.</li>
              <li>Know neighbor with basement.</li>
              <li>Don&apos;t wait until last minute.</li>
              <li>Mobile homes destroyed easily by tornadoes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After tornado</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stay in shelter 30 min after.</li>
              <li>Watch for downed power lines.</li>
              <li>Don&apos;t step on debris (nails).</li>
              <li>Sturdy shoes essential.</li>
              <li>Help neighbors.</li>
              <li>Take photos for insurance.</li>
              <li>Avoid scams (door-to-door contractors).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Storm shelter</h3>
            <p className="text-sm text-muted-foreground">$3K-15K install. Tax-deductible in some states. Above-ground steel safer than basement (basement could collapse). FEMA has free design plans. <strong>Tornado Alley states</strong> — worth investing if no basement. Could save lives.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
