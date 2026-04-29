import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function EarthquakePrep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Earthquake Prep for Seniors | TekSure" description="California, Pacific NW, Alaska, Utah. Plain-English checklist for earthquake home preparation + during shaking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Earthquake Prep</h1>
          <p className="text-lg text-muted-foreground">Drop. Cover. Hold on.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During earthquake</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>DROP</strong> to hands + knees BEFORE shaking knocks you down.</li>
              <li><strong>COVER</strong> head + neck. Crawl under sturdy table.</li>
              <li><strong>HOLD ON</strong> — protect your head + neck.</li>
              <li>NOT in doorway (unsafe in modern homes).</li>
              <li>NOT outside running (falling debris).</li>
              <li>If in bed — stay, cover head with pillow.</li>
              <li>If driving — pull over away from buildings, trees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home prep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bolt water heater to wall (cheap, big effect).</li>
              <li>Strap tall bookcases + furniture to studs.</li>
              <li>Move heavy items to LOWER shelves.</li>
              <li>Glass + mirrors away from beds.</li>
              <li>Sturdy shoes by bed (broken glass after).</li>
              <li>Flashlight by bed.</li>
              <li>Know how to shut off gas + water + electric.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Aftershocks happen for hours-weeks. Stay alert.</li>
              <li>Check for injuries.</li>
              <li>Smell gas? Shut off + leave.</li>
              <li>Avoid downed power lines.</li>
              <li>Check water heater + appliances for damage.</li>
              <li>Photograph any damage for insurance.</li>
              <li>Don&apos;t cross damaged bridges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Earthquake insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NOT covered by standard homeowners.</li>
              <li>California: California Earthquake Authority (CEA).</li>
              <li>Other states: rider on existing insurance.</li>
              <li>Cost: $300-2,000/year depending on area + home value.</li>
              <li>15-25% deductible typical.</li>
              <li>For mortgaged homes near faults — strongly consider.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">ShakeAlert</h3>
            <p className="text-sm text-muted-foreground">USGS ShakeAlert app — gives 5-30 second warning before shaking arrives. Free. iOS + Android. Available California, Oregon, Washington. Earthquake Early Warning. Best free app for West Coast seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
