import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function ApplePrivacyReport() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Privacy Report Walkthrough | TekSure" description="iPhone privacy controls. Plain-English walkthrough of App Privacy Report, App Tracking Transparency, Mail Privacy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Privacy Report</h1>
          <p className="text-lg text-muted-foreground">See what&apos;s tracking you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Turn ON App Privacy Report</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Privacy &amp; Security → App Privacy Report.</li>
              <li>Tap "Turn On App Privacy Report".</li>
              <li>Wait 1 week.</li>
              <li>Come back — see what every app accessed.</li>
              <li>Shocking — many apps access mic, camera, photos in background.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App Tracking Transparency</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Privacy &amp; Security → Tracking.</li>
              <li>"Allow Apps to Request to Track" — turn OFF.</li>
              <li>Apps can&apos;t track you across other apps + websites.</li>
              <li>Saves about 70-80% of cross-app tracking.</li>
              <li>Best Apple privacy feature.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mail Privacy Protection</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Mail → Privacy Protection.</li>
              <li>"Protect Mail Activity" — turn ON.</li>
              <li>Hides your IP from email senders.</li>
              <li>Stops "we see you opened our email" tracking.</li>
              <li>Apple loads remote content privately.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hide My Email</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iCloud+ feature ($1/mo for 50GB iCloud).</li>
              <li>Generates random @icloud.com address per signup.</li>
              <li>Forwards to your real email.</li>
              <li>Can disable any address — sender can&apos;t reach you again.</li>
              <li>Best spam reduction tool around.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Per-app permissions</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Privacy &amp; Security.</li>
              <li>Tap each: Location Services, Camera, Microphone, Photos, etc.</li>
              <li>Review every app.</li>
              <li>Location: "While Using" or "Never" for most apps.</li>
              <li>Camera/mic: only ones you actively use them in.</li>
              <li>Photos: "Limited Access" instead of "All Photos" for most apps.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple cares more than Google</h3>
            <p className="text-sm text-muted-foreground">Apple makes money from hardware, NOT ads. Their privacy features are aggressive — by design. iPhone is privacy-strongest mainstream phone. Combine with the steps above = senior-friendly + private.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
