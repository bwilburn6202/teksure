import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function TsaPrecheckGlobal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TSA PreCheck vs Global Entry vs CLEAR | TekSure" description="Skip the airport line. Plain-English compare of TSA PreCheck, Global Entry, and CLEAR — and how to get them free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TSA PreCheck, Global Entry, CLEAR</h1>
          <p className="text-lg text-muted-foreground">Skip the long airport lines.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What each one does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TSA PreCheck</strong> — $78 for 5 years. Faster security in 200+ US airports. Keep shoes/belt on, keep laptop in bag.</li>
              <li><strong>Global Entry</strong> — $100 for 5 years. INCLUDES TSA PreCheck. Skip US Customs returning from abroad.</li>
              <li><strong>CLEAR</strong> — $189/year. Skips ID-check line (different from security). Some airports only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick decision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Travel domestic only</strong> → TSA PreCheck ($78).</li>
              <li><strong>Travel internationally</strong> → Global Entry ($100). It&apos;s only $22 more and includes PreCheck.</li>
              <li><strong>Fly often through busy airports</strong> (Atlanta, LAX, Newark) → also add CLEAR.</li>
              <li><strong>Fly twice a year max</strong> → skip them all. Lines aren&apos;t that bad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FREE through credit cards</h2>
            <p className="text-sm">Many credit cards reimburse the application fee:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
              <li><strong>Chase Sapphire Reserve</strong> ($550 annual fee) — covers Global Entry every 4 years.</li>
              <li><strong>AmEx Platinum</strong> ($695 annual fee) — covers Global Entry + CLEAR Plus.</li>
              <li><strong>Capital One Venture X</strong> ($395) — covers Global Entry.</li>
              <li><strong>United Club Card / Delta Reserve</strong> — covers Global Entry.</li>
              <li>Even some lower-tier cards: Capital One Venture, Bank of America Premium Rewards.</li>
            </ul>
            <p className="text-sm mt-3">Pay with one of these cards. Reimbursement appears as statement credit within a month.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply for Global Entry (best deal)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>ttp.dhs.gov</strong> (Trusted Traveler Programs).</li>
              <li>Create login. Pay $100.</li>
              <li>Wait for "conditionally approved" email (1-12 months).</li>
              <li>Schedule in-person interview at an airport or enrollment center.</li>
              <li>Or use "Enrollment on Arrival" — get interviewed when returning from a trip.</li>
              <li>Bring passport + drivers license. Photo + fingerprints taken.</li>
              <li>5 minutes. Card mailed in 1-2 weeks.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For 75+ travelers</h2>
            <p className="text-sm">TSA standard procedure for 75+:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Keep shoes, light jacket, and belt ON (already, no PreCheck needed).</li>
              <li>Pacemakers and joint replacements — tell agent. Hand-wand alternative.</li>
              <li>Wheelchair / scooter — TSA agents help, no need to stand.</li>
              <li>So PreCheck is less essential for 75+ — maybe skip and save $78.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t pay for CLEAR if...</h3>
            <p className="text-sm text-muted-foreground">CLEAR is $189/year. Many CLEAR lines are now LONGER than TSA PreCheck during peak hours. Only worth it if you fly weekly through Atlanta, LaGuardia, or Newark. Most travelers skip CLEAR and just use PreCheck.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
