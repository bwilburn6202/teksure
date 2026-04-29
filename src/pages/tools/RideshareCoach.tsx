import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car, ShieldCheck } from 'lucide-react';

export default function RideshareCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Uber & Lyft Coach — First Ride for Beginners | TekSure" description="Cab on demand from your phone. Plain-English steps to set up Uber or Lyft, take your first ride safely, and avoid surprise charges." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Uber & Lyft Coach</h1>
          <p className="text-lg text-muted-foreground">Cab on demand. Cheaper than taxis. Set up once, use anywhere.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What Uber and Lyft are</h2>
            <p className="text-sm">Apps that connect you with a nearby driver in their own car. You tap a button, a driver shows up in 3-10 minutes. The price is shown before you confirm — no meter surprise. You don't pay cash; the credit card on file is charged automatically.</p>
            <p className="text-sm mt-2"><strong>Uber and Lyft are nearly identical.</strong> Lyft is sometimes cheaper, Uber sometimes faster. Many people install both and pick whichever shows the better price that day.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Set up the app</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Uber</strong> or <strong>Lyft</strong> from the App Store or Play Store.</li>
              <li>Sign up — phone number, email, name.</li>
              <li>Type a credit or debit card number. (Or link Apple Pay / Google Pay.)</li>
              <li>Add an Emergency Contact in the app's safety settings.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Book your first ride</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the app. It already knows where you are.</li>
              <li>Type where you want to go in the box at the top — restaurant, doctor's office, grandkid's school.</li>
              <li>App shows the price and how long the wait is. Different ride types — UberX (cheap), Comfort (newer car), XL (van for 6 people).</li>
              <li>Tap "Confirm" or "Request".</li>
              <li>A photo of your driver, the car make/color, and license plate appears. Watch the map — you can see them coming.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Step 3 — Verify before you get in</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>BEFORE you open the door, check the license plate matches the app.</li>
                  <li>Ask the driver, "Who are you here to pick up?" — they should say YOUR name. (Don't say your name first.)</li>
                  <li>Look at the driver's face — should match the photo.</li>
                  <li>If anything is off, walk away. Cancel in the app. Wait for a different driver.</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During the ride</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Sit in the back seat unless you have a reason to sit up front.</li>
              <li>Wear your seatbelt.</li>
              <li>You can share trip details with family — tap "Share Trip" in the app. They see your route in real time.</li>
              <li>If anything feels unsafe, tap the shield icon → "Emergency" or "911".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After the ride</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>App shows the final price — pulled from your card automatically. No cash needed.</li>
              <li>Rate the driver 1-5 stars. (5 unless something was wrong.)</li>
              <li>Tip is optional but appreciated — $2-$5 for short trips, 15-20% for longer.</li>
              <li>Receipt emails to you instantly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid surprise charges</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Surge" pricing</strong> — when demand is high (rush hour, rain, after concerts), prices jump 1.5x to 3x. The app warns you before you confirm.</li>
              <li><strong>Cancellation fee</strong> — if you cancel after 2 minutes, $5-$10 charge.</li>
              <li><strong>Cleaning fee</strong> — if you spill or worse, drivers can report — up to $150.</li>
              <li><strong>Long pickup</strong> — if the driver waits more than 2-5 minutes for you, a wait fee starts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-friendly options</h3>
            <p className="text-sm text-muted-foreground">Uber and Lyft both have <strong>"Older Adult"</strong> phone support — call to book a ride without using the app. Uber: 1-833-USE-UBER. Lyft: 1-855-865-9553. Some Medicare Advantage plans also cover free Lyft rides to medical appointments — check with your plan.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
