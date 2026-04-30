import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyAuditChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Privacy Audit Checklist | TekSure" description="One-hour privacy audit. Plain-English checklist for senior digital privacy on phone, computer, social media." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Privacy Audit Checklist</h1>
          <p className="text-lg text-muted-foreground">1 hour. Lock down your digital life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phone (15 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy &amp; Security → review every app permission.</li>
              <li>Apps with location: only when needed.</li>
              <li>Apps with camera/mic: disable for ones that don&apos;t need it.</li>
              <li>Settings → Tracking → "Allow Apps to Request to Track" OFF.</li>
              <li>Apple → Privacy &amp; Security → Analytics → OFF.</li>
              <li>Settings → Safari → "Prevent Cross-Site Tracking" ON.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google account (10 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>myaccount.google.com</strong>.</li>
              <li>Privacy + Personalization → Activity controls.</li>
              <li>Web + App Activity — auto-delete every 3 months.</li>
              <li>Location History — OFF.</li>
              <li>YouTube History — auto-delete or off.</li>
              <li>Ad personalization — OFF.</li>
              <li>Privacy Checkup — runs you through everything.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Facebook (10 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Privacy Checkup.</li>
              <li>Audience for posts: Friends only.</li>
              <li>Profile photo + cover: Public OK.</li>
              <li>Location, religion, politics: Friends only OR remove.</li>
              <li>Off-Facebook Activity → Disconnect Future Activity.</li>
              <li>Settings → Apps and Websites → Remove unused.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free privacy tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>DuckDuckGo Privacy Pro</strong> — $10/mo. VPN + email aliasing + data broker removal.</li>
              <li><strong>Mullvad VPN</strong> — $5/mo. Privacy-first.</li>
              <li><strong>Have I Been Pwned</strong> — free. Check if your email leaked in any breach.</li>
              <li><strong>Apple Hide My Email</strong> — generate throwaway addresses.</li>
              <li><strong>Bitwarden / 1Password</strong> — strong unique passwords (free + paid).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual maintenance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Run privacy audit every January.</li>
              <li>Check breached emails on haveibeenpwned.com.</li>
              <li>Pull free credit report (annualcreditreport.com).</li>
              <li>Review Medicare statement for unfamiliar charges.</li>
              <li>Delete old apps you don&apos;t use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Mostly free</h3>
            <p className="text-sm text-muted-foreground">90% of senior privacy needs covered by FREE built-in tools. Don&apos;t pay $30/mo for "identity protection" — credit freeze (free) + this audit covers most of what they offer.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
