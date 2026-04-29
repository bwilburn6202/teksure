import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SubscriptionAuditCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Subscription Audit Coach — Find Hidden Charges | TekSure" description="Average household pays \$200+/month for subscriptions they forgot about. Plain-English steps to find every recurring charge and cancel what you don&apos;t use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Subscription Audit Coach</h1>
          <p className="text-lg text-muted-foreground">Average household has $200+/month in subs they forgot.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Find them all</h2>
            <p className="text-sm mb-2">Subscriptions hide in 3 places:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Credit card / bank statement</strong> — scroll the last 90 days. Highlight every recurring charge. Most banks now flag "subscription" charges.</li>
              <li><strong>Apple App Store</strong> — Settings → tap your name → Subscriptions. ALL Apple-billed subs.</li>
              <li><strong>Google Play</strong> — Play Store → tap your photo → Payments & subscriptions → Subscriptions.</li>
              <li><strong>Amazon</strong> — amazon.com → Account → "Memberships and Subscriptions".</li>
              <li><strong>PayPal</strong> — Settings → Payments → Manage automatic payments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps that find them for you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rocket Money (free version)</strong> — links to bank, lists every recurring charge, lets you cancel inside the app.</li>
              <li><strong>Empower (free)</strong> — same, focused on retirement/net worth + subs.</li>
              <li><strong>Truebill (now Rocket Money)</strong> — same as above.</li>
              <li><strong>Bobby (free)</strong> — manual but simple.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common forgotten subscriptions</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Streaming you don\'t watch (Hulu, Showtime, Peacock).</li>
              <li>Free trial that auto-renewed.</li>
              <li>Audiobook services for one book purchased years ago.</li>
              <li>Magazine apps after the introductory offer ends.</li>
              <li>Cloud storage you don\'t need anymore.</li>
              <li>Antivirus auto-renewing for $80-100/year.</li>
              <li>Printer ink subscription (HP Instant Ink) you forgot.</li>
              <li>Dating apps from years ago.</li>
              <li>Gym memberships you don\'t use.</li>
              <li>Identity theft monitoring duplicating your credit card\'s free service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Cancel without pain</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>For App Store / Play Store / Amazon — cancel in 2 taps.</li>
              <li>For others — go to the company\'s website. Look for "Cancel" deep in account settings.</li>
              <li>For ones that hide cancel buttons — chat with their support and demand cancellation.</li>
              <li>For phone-only cancel — call. Some require it (gym, cable). Be polite, persistent, repeat "I want to cancel" — they\'ll try retention offers.</li>
              <li>If a company stalls — call your credit card and dispute future charges.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Negotiate down what you keep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cable/Internet</strong> — call once a year. "I\'m considering switching to [competitor]. What can you do?" Saves $20-40/month for 30 minutes of work.</li>
              <li><strong>Streaming bundles</strong> — Disney+ Hulu Max bundle is $17/mo vs $40 separately.</li>
              <li><strong>Annual vs monthly</strong> — most services 15-25% cheaper if paid yearly.</li>
              <li><strong>Family plans</strong> — split with adult kids. 6-person Apple/Google music plans cost $17/mo total.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First-time discovery</h3>
            <p className="text-sm text-muted-foreground">First-time users of Rocket Money typically discover $40-100/month they had no idea they were paying. That\'s $480-1,200/year saved with one Saturday morning of work.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
