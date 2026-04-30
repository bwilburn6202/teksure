import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function EmergencyKitChecklistSenior() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Emergency Kit Checklist | TekSure" description="Complete emergency preparedness kit for seniors. What to pack and where to keep it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Kit</h1>
          <p className="text-lg text-muted-foreground">3-day supplies. Built for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why every senior needs one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Power outages, storms, evacuations happen.</li>
              <li>Seniors often most affected — mobility, meds.</li>
              <li>3-day supply minimum (FEMA standard).</li>
              <li>Keep accessible — not buried in basement.</li>
              <li>One main kit + smaller go-bag near door.</li>
              <li>Cost: $50–$150 to assemble.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Water + food (3 days)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 gallon water per person per day = 3 gallons.</li>
              <li>Canned goods — soup, beans, fruit, vegetables.</li>
              <li>Manual can opener.</li>
              <li>Granola bars, crackers, peanut butter.</li>
              <li>Comfort foods — coffee, tea bags, hard candy.</li>
              <li>Rotate every 6 months — eat + replace.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medications + medical</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3-day supply of all prescription meds.</li>
              <li>Written list of medications + dosages.</li>
              <li>Doctor + pharmacist phone numbers.</li>
              <li>Insurance cards + Medicare card copies.</li>
              <li>First aid kit.</li>
              <li>Glasses, hearing aid batteries, dentures supplies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Power + light</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Battery-powered or hand-crank radio.</li>
              <li>Multiple flashlights (1 per room ideal).</li>
              <li>Spare batteries for everything.</li>
              <li>Phone charger + portable battery pack.</li>
              <li>Hand-crank phone charger as backup.</li>
              <li>Glow sticks — safer than candles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents + cash</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Copies of ID, insurance, bank info.</li>
              <li>Recent photo of yourself (in case missing).</li>
              <li>Family contact list — written, not just phone.</li>
              <li>$200 cash in small bills.</li>
              <li>House + car keys.</li>
              <li>All in waterproof bag.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Comfort + clothing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Change of clothes — weather appropriate.</li>
              <li>Sturdy shoes near bed at night.</li>
              <li>Blankets or sleeping bags.</li>
              <li>Toilet paper, hand sanitizer, soap.</li>
              <li>Personal hygiene items.</li>
              <li>Pet supplies if applicable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pre-built kits work too</h3>
            <p className="text-sm text-muted-foreground">If assembling a kit feels overwhelming, buy a pre-made one — Red Cross, Sustain Supply, or Ready America sell complete 3-day kits for $80–$150 on Amazon. Add your specific medications and you&apos;re done. The most important thing is HAVING the kit, not building it from scratch. Keep it where you can grab it in 60 seconds.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
