import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bus } from 'lucide-react';

export default function SeniorParatransitGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paratransit and Free Senior Rides | TekSure" description="Free or low-cost senior transportation. Paratransit, ITNAmerica, and local programs explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Transportation</h1>
          <p className="text-lg text-muted-foreground">Free + low-cost rides for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Paratransit (ADA service)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federally required by Americans with Disabilities Act.</li>
              <li>Door-to-door rides for those who can&apos;t use buses.</li>
              <li>Wheelchair accessible.</li>
              <li>Costs same as bus fare ($1–$5).</li>
              <li>Schedule 1–7 days in advance.</li>
              <li>Apply through local transit authority.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ITNAmerica</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Independent Transportation Network.</li>
              <li>Volunteer drivers for seniors.</li>
              <li>Operating in many cities nationwide.</li>
              <li>Door-to-door + arm-through-arm assistance.</li>
              <li>$1–$5 per ride typically.</li>
              <li>Find at ITNAmerica.org.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior center transportation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most senior centers offer free rides.</li>
              <li>To medical appointments, grocery stores.</li>
              <li>Door-to-door usually.</li>
              <li>Need to be registered with center.</li>
              <li>Schedule a few days in advance.</li>
              <li>Free or donation-based.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Religious + nonprofit programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many churches offer transportation ministry.</li>
              <li>Free rides to medical appointments.</li>
              <li>Synagogues, mosques, all faiths.</li>
              <li>Salvation Army has programs.</li>
              <li>Knights of Columbus — Catholic.</li>
              <li>Ask your local clergy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicaid medical transportation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEMT — Non-Emergency Medical Transportation.</li>
              <li>Free for Medicaid recipients.</li>
              <li>Rides to doctor appointments.</li>
              <li>Schedule 2–14 days advance (varies by state).</li>
              <li>Must be qualifying medical visit.</li>
              <li>Call your state Medicaid office.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eldercare Locator</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal hotline: 1-800-677-1116.</li>
              <li>Free service.</li>
              <li>Connects to local transportation options.</li>
              <li>Tells you what&apos;s available in your zip.</li>
              <li>Available weekdays.</li>
              <li>One call finds many programs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Call Eldercare Locator today</h3>
            <p className="text-sm text-muted-foreground">If you or a loved one struggles with transportation, call the free Eldercare Locator at 1-800-677-1116. They&apos;ll connect you with all transportation programs available in your specific zip code — paratransit, volunteer drivers, senior centers, religious programs, medical transport. One free call can open up multiple options most seniors didn&apos;t know existed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
