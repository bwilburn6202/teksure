import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function UberLyftForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Uber and Lyft for Seniors | TekSure" description="Use Uber and Lyft confidently as a senior. Step-by-step guide with safety tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Uber + Lyft</h1>
          <p className="text-lg text-muted-foreground">Get rides anywhere from your phone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What are they?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apps that let you order a car ride.</li>
              <li>Driver picks you up + takes you anywhere.</li>
              <li>Pay through app — no cash or card swipe.</li>
              <li>Cheaper than taxis usually.</li>
              <li>Available in most cities + suburbs.</li>
              <li>Car arrives in 5–15 minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First time setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Uber or Lyft from app store.</li>
              <li>Create account — phone, email, password.</li>
              <li>Add credit card or PayPal.</li>
              <li>Verify phone number — gets text code.</li>
              <li>Set home address for easy reuse.</li>
              <li>Free to download + sign up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ordering a ride</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open app — your location auto-fills.</li>
              <li>Type destination address.</li>
              <li>Choose ride type (UberX = cheapest).</li>
              <li>Tap &quot;Confirm&quot; — see price + driver coming.</li>
              <li>Wait at curb — car comes to you.</li>
              <li>Driver name, photo, license plate shown.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety verification</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check license plate matches before getting in.</li>
              <li>Ask driver: &quot;What&apos;s my name?&quot;</li>
              <li>If wrong — don&apos;t get in.</li>
              <li>Share trip with family — &quot;Share Trip&quot; button.</li>
              <li>Family sees your route real-time.</li>
              <li>911 button in app for emergencies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>UberWAV — wheelchair-accessible vehicle.</li>
              <li>Uber Assist — drivers trained to help seniors.</li>
              <li>Lyft Healthcare — for medical appointments.</li>
              <li>Schedule rides in advance.</li>
              <li>Larger SUV options for groups.</li>
              <li>Quiet mode — no chat with driver.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">No smartphone? Try GoGoGrandparent</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>GoGoGrandparent — order rides by PHONE CALL.</li>
              <li>Call 1-855-464-6872 to set up.</li>
              <li>Operator orders Uber/Lyft for you.</li>
              <li>$0.27/minute service fee.</li>
              <li>Receive call when driver arrives.</li>
              <li>Family gets text notifications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try one short ride first</h3>
            <p className="text-sm text-muted-foreground">If you&apos;ve never used a rideshare app, ask an adult child to set up Uber on your phone and walk you through one short trip — like to a nearby restaurant. After one experience, you&apos;ll see how easy it is. Many seniors say Uber/Lyft restored independence after they stopped driving. The peace of mind for adult children is invaluable too.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
