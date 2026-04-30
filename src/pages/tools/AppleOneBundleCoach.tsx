import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function AppleOneBundleCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple One Bundle — Worth It? | TekSure" description="Apple One bundles Music, TV+, iCloud+, and more. Plain-English breakdown of when the bundle saves money vs paying separately." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple One Bundle</h1>
          <p className="text-lg text-muted-foreground">Worth $20/month? Depends on you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Three tiers (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Individual: $20/mo</strong> — Music + TV+ + Arcade + 50GB iCloud+.</li>
              <li><strong>Family: $26/mo</strong> — Same as Individual but shared with 6 people. 200GB iCloud+.</li>
              <li><strong>Premier: $38/mo</strong> — Adds News+ + Fitness+. 6 people. 2TB iCloud+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Math vs separate</h2>
            <p className="text-sm">Buying separately:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Apple Music: $11/mo.</li>
              <li>Apple TV+: $10/mo.</li>
              <li>Apple Arcade: $7/mo.</li>
              <li>iCloud+ 50GB: $1/mo.</li>
              <li>Apple News+: $13/mo.</li>
              <li>Apple Fitness+: $10/mo.</li>
              <li>iCloud+ 2TB: $10/mo.</li>
              <li><strong>Premier ($38/mo)</strong> = $62 if bought separately. Saves $24/mo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When Apple One is worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You\'re already paying for 3+ Apple services.</li>
              <li>You have multiple Apple devices (iPhone + iPad + Mac).</li>
              <li>Family of 4-6 — Family Sharing splits cost.</li>
              <li>Need iCloud storage for photo library (200GB+).</li>
              <li>Watch Apple TV+ shows + listen to Apple Music.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When it\'s NOT worth it</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You only use 1-2 services — pay for those individually.</li>
              <li>You use Spotify instead of Apple Music — most overlap of bundle is wasted.</li>
              <li>Don\'t play Apple Arcade games.</li>
              <li>Don\'t need iCloud+ (using Google or Dropbox).</li>
              <li>Don\'t care about News+ or Fitness+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family Sharing — share with adult kids</h2>
            <p className="text-sm">Up to 6 people share Apple One Family or Premier. Even if family lives separately. Adult children + you can split a $38/mo Premier — about $7/person. Best Apple subscription deal.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick test</h3>
            <p className="text-sm text-muted-foreground">List Apple subs you currently pay for. If total &gt; $20/mo for individual, $26/mo for family, or $38/mo for premier — bundle saves money. Check your Apple ID Subscriptions page (Settings → tap your name → Subscriptions).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
