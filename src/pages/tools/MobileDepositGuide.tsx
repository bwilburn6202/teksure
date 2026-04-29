import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function MobileDepositGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mobile Check Deposit Guide | TekSure" description="Deposit checks via phone photo. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mobile Check Deposit</h1>
          <p className="text-lg text-muted-foreground">Photograph a check. No bank trip.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you need</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smartphone with camera.</li>
              <li>Bank&apos;s app installed.</li>
              <li>Login to bank app.</li>
              <li>Pen for endorsement.</li>
              <li>Good lighting.</li>
              <li>Dark surface (table).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step by step</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1. Endorse check back: signature.</li>
              <li>2. Add &quot;For mobile deposit only&quot; or your bank&apos;s phrase.</li>
              <li>3. Open bank app.</li>
              <li>4. Find &quot;Deposit&quot; button.</li>
              <li>5. Choose account.</li>
              <li>6. Type amount.</li>
              <li>7. Photo of front (corner-aligned).</li>
              <li>8. Photo of back.</li>
              <li>9. Submit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flat surface — table.</li>
              <li>Dark contrast background.</li>
              <li>All 4 corners visible.</li>
              <li>No shadows.</li>
              <li>Good lighting (daylight).</li>
              <li>Camera straight above.</li>
              <li>App auto-captures.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After deposit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Money appears in 1-2 business days.</li>
              <li>Some hold larger checks longer.</li>
              <li>Email confirmation usual.</li>
              <li>Don&apos;t throw check away yet.</li>
              <li>Wait until cleared (3-5 days).</li>
              <li>Then write &quot;DEPOSITED&quot; + date.</li>
              <li>Shred after 60 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common errors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Image unclear&quot; — retake with better light.</li>
              <li>&quot;Endorsement missing&quot; — sign back first.</li>
              <li>&quot;Amount mismatch&quot; — type exact amount.</li>
              <li>&quot;Deposit limit&quot; — call bank for raise.</li>
              <li>&quot;Stale check&quot; — over 6 months old.</li>
              <li>Try again from beginning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When NOT to mobile deposit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Foreign currency checks.</li>
              <li>Postdated checks.</li>
              <li>Checks for tax payments.</li>
              <li>Cashier&apos;s checks (varies).</li>
              <li>Money orders (varies).</li>
              <li>Over your bank&apos;s limit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save trips to bank</h3>
            <p className="text-sm text-muted-foreground">Mobile deposit replaces bank trips for most checks. Faster than mailing. Sister cards / birthday checks deposited from couch. Pension checks. Refund checks. Save $5 in gas every time. 95% of US banks offer. Call your bank if you don&apos;t see &quot;Deposit&quot; — they activate it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
