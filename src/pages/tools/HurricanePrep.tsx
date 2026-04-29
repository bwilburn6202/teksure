import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function HurricanePrep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hurricane Prep for Seniors | TekSure" description="Florida + Gulf + Atlantic Coast. Plain-English checklist for hurricane preparation, evacuation, after-storm recovery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hurricane Prep</h1>
          <p className="text-lg text-muted-foreground">Days BEFORE matter most.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">June 1 — start of hurricane season</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check insurance — flood + windstorm separate.</li>
              <li>Trim trees away from home.</li>
              <li>Test generator (if owned).</li>
              <li>Stock up emergency kit (see /tools/emergency-kit-checklist).</li>
              <li>Review evacuation plan + routes.</li>
              <li>Identify shelter-in-place safest room.</li>
              <li>Know your evacuation zone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3-5 days before storm</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fill gas tank.</li>
              <li>Stock 1 week food + water.</li>
              <li>Cash from ATM.</li>
              <li>Charge phones + power banks.</li>
              <li>Refill prescriptions early.</li>
              <li>Get cash for 1-2 weeks.</li>
              <li>Decide: stay or evacuate.</li>
              <li>Tell family of your plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If staying — 1 day before</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Board / shutter windows.</li>
              <li>Move outdoor furniture inside.</li>
              <li>Fill bathtubs with water (toilet flushing).</li>
              <li>Charge laptop, phone, devices to 100%.</li>
              <li>Fill freezer with water bottles (helps keep cold).</li>
              <li>Park car somewhere safe (NOT under trees).</li>
              <li>Take photos of home for insurance claims.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If evacuating</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Leave EARLY — gridlock by Day -1.</li>
              <li>Bring evacuation go-bag.</li>
              <li>Bring medications + medical equipment.</li>
              <li>Bring photo ID + insurance papers.</li>
              <li>Know pet-friendly shelter / hotel ahead.</li>
              <li>Special-needs evacuation registry — sign up your county BEFORE.</li>
              <li>Cash. Charger. Snacks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-specific resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Special-needs evacuation registry</strong> — many coastal counties. Lets first responders know seniors needing help. Sign up at county emergency management. Free transportation in some areas.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
