import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function AppleICloudSecurity() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple iCloud Security for Seniors | TekSure" description="Lock down iCloud account. Plain-English Apple security guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iCloud Security</h1>
          <p className="text-lg text-muted-foreground">Apple ID compromise = identity disaster.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why iCloud security matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple ID = access to ALL Apple data.</li>
              <li>Photos, contacts, messages, banking apps.</li>
              <li>Hackers steal Apple ID to access everything.</li>
              <li>Reset locks you OUT of devices.</li>
              <li>Family Sharing = compromise spreads.</li>
              <li>Critical to lock down.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Essential settings (15 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Strong Apple ID password</strong> — 12+ chars, unique.</li>
              <li><strong>2FA on</strong> — required by Apple now.</li>
              <li><strong>Trusted phone numbers</strong> — your phone + spouse.</li>
              <li><strong>Recovery key</strong> — print + store in safe.</li>
              <li><strong>Trusted contact</strong> — family member can verify.</li>
              <li><strong>Find My iPhone ON</strong>.</li>
              <li><strong>Stolen Device Protection ON</strong> (iOS 17.3+).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stolen Device Protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Critical iOS 17.3+ feature.</li>
              <li>Settings → Face ID → Stolen Device Protection.</li>
              <li>Even if thief has passcode + phone — can&apos;t change Apple ID.</li>
              <li>1-hour delay on critical changes.</li>
              <li>Foils thief who saw passcode.</li>
              <li>Turn ON.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Advanced Data Protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>End-to-end encrypts more iCloud data.</li>
              <li>Settings → Apple ID → iCloud → Advanced Data Protection.</li>
              <li>Even Apple can&apos;t see your data.</li>
              <li>Requires recovery key OR contact.</li>
              <li>Lose recovery + contact = lose data forever.</li>
              <li>Skip if not tech-savvy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phishing scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Your Apple ID has been compromised&quot; texts/emails = scam.</li>
              <li>Apple doesn&apos;t send you texts about ID issues.</li>
              <li>NEVER click links.</li>
              <li>Type apple.com/account directly.</li>
              <li>Verify on YOUR phone&apos;s Apple ID settings.</li>
              <li>Apple doesn&apos;t call about virus or hack.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Recovery prep</h3>
            <p className="text-sm text-muted-foreground">If forget password / locked out — write recovery key down NOW. Set trusted contact (spouse, kid) who can verify identity. Without these — locked out of Apple ID forever. Apple can&apos;t override. Print recovery key, store in safe deposit. Critical.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
