import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SocialMediaPrivacyAudit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Media Privacy Audit for Seniors | TekSure" description="Lock down your accounts. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Privacy Audit</h1>
          <p className="text-lg text-muted-foreground">30-min senior privacy lockdown.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why audit?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduce scammer access.</li>
              <li>Protect your photos.</li>
              <li>Stop strangers seeing personal info.</li>
              <li>Limit data sold to advertisers.</li>
              <li>Family privacy too.</li>
              <li>Quarterly = wise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Facebook</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy.</li>
              <li>&quot;Who can see your future posts?&quot; → Friends.</li>
              <li>&quot;Who can look you up by phone?&quot; → Friends.</li>
              <li>&quot;Profile and Tagging&quot; → friends only tagged.</li>
              <li>Off-Facebook activity → clear.</li>
              <li>Ad preferences → opt out.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Instagram</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy.</li>
              <li>Switch to private account.</li>
              <li>Block + restrict harassers.</li>
              <li>Story controls — close friends only.</li>
              <li>Activity status off.</li>
              <li>Read receipts off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">All accounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Enable 2FA everywhere.</li>
              <li>Strong unique passwords.</li>
              <li>Recovery email + phone updated.</li>
              <li>Security questions challenging.</li>
              <li>Logout other devices.</li>
              <li>Review login history.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Birthday + location</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hide birth year (= identity theft).</li>
              <li>Hide hometown.</li>
              <li>Don&apos;t post home address.</li>
              <li>Don&apos;t check in to home location.</li>
              <li>Don&apos;t announce vacations live.</li>
              <li>Post AFTER returning home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Advertising opt-outs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Facebook ad preferences.</li>
              <li>Google ad personalization.</li>
              <li>Apple iOS — limit ad tracking.</li>
              <li>Android — opt out personalized.</li>
              <li>National Do Not Call Registry.</li>
              <li>Reduces spam significantly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick win: family photos</h3>
            <p className="text-sm text-muted-foreground">Stop sharing grandchildren photos publicly. Friends-only or private. Predators scan public profiles. Can ID school, route, family. Set kids&apos; photos friends-only. Don&apos;t tag minors in public posts. Family group chat better. Print + mail still meaningful. Privacy + protection.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
