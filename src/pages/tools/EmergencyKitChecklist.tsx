import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Backpack } from 'lucide-react';

export default function EmergencyKitChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Kit Checklist | TekSure" description="3-day emergency kit for power outage, hurricane, earthquake, evacuation. Plain-English checklist with senior-specific additions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Backpack className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Kit Checklist</h1>
          <p className="text-lg text-muted-foreground">Build a "ready bag" before you need one.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Water + food (3 days)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 gallon water per person per day. 3 gallons total each.</li>
              <li>Manual can opener.</li>
              <li>Canned soup, beans, fruit, vegetables.</li>
              <li>Peanut butter, granola bars, dried fruit, nuts.</li>
              <li>Crackers, jerky, baby food (if needed).</li>
              <li>Pet food (3-7 days).</li>
              <li>Special diet food (diabetic, gluten-free, etc.).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Power + light</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flashlight + extra batteries (for each person).</li>
              <li>Battery-powered/hand-crank radio (NOAA weather radio).</li>
              <li>Big phone power bank (Anker 20K mAh, ~$50). Charge it monthly.</li>
              <li>Phone wall + car chargers.</li>
              <li>Headlamps — hands-free light.</li>
              <li>Glow sticks (last 8-12 hours, no batteries).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health + safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>First aid kit.</li>
              <li>7-day supply of medications (rotate every 6 months).</li>
              <li>Glasses + reading glasses (extra pair).</li>
              <li>Hearing aid batteries.</li>
              <li>Denture supplies.</li>
              <li>CPAP backup battery if needed.</li>
              <li>Mask (N95 + paper).</li>
              <li>Hand sanitizer + wet wipes.</li>
              <li>Whistle (signal for help).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents (in waterproof bag)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo ID + passport copies.</li>
              <li>Insurance cards.</li>
              <li>Medication list.</li>
              <li>Emergency contact list.</li>
              <li>Doctors&apos; phone numbers.</li>
              <li>Bank account list (numbers, NOT passwords).</li>
              <li>$200-500 cash in small bills (ATMs may be down).</li>
              <li>Recent photo of pets (in case lost).</li>
              <li>USB drive with backup of important files.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Comfort + practical</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blanket / sleeping bag per person.</li>
              <li>Change of clothes (closed-toe shoes!).</li>
              <li>Garbage bags + zip-lock bags.</li>
              <li>Multi-tool, scissors, duct tape.</li>
              <li>Notepad + pencil.</li>
              <li>Cash in small bills.</li>
              <li>Local map (phones may be down).</li>
              <li>Toilet paper.</li>
              <li>Plastic sheeting (shelter).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">By disaster type</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Power outage</strong> — flashlights, manual can opener, ice in freezer.</li>
              <li><strong>Hurricane</strong> — water, plywood, evacuation plan, pet carriers.</li>
              <li><strong>Earthquake</strong> — sturdy shoes by bed, water heater strap, secured shelves.</li>
              <li><strong>Wildfire</strong> — N95 masks, evacuation route, "go bag" by door.</li>
              <li><strong>Winter storm</strong> — extra blankets, propane heater, wood stove fuel.</li>
              <li><strong>Medical emergency</strong> — list of meds + ER preference.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>Ready.gov</strong> — federal emergency prep, all free. <strong>Red Cross First Aid app</strong> — free, walks you through emergencies. <strong>FEMA app</strong> — alerts + shelters. Sign up for local emergency text alerts (most counties have them — search "[county] emergency alerts").</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
