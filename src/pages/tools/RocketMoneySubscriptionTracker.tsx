import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function RocketMoneySubscriptionTracker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rocket Money Subscription Tracker for Seniors | TekSure" description="Find + cancel forgotten subscriptions. Rocket Money (formerly Truebill) for senior money management." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rocket Money</h1>
          <p className="text-lg text-muted-foreground">Find forgotten subscriptions. Cancel them.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Connects to your bank securely.</li>
              <li>Lists all recurring charges.</li>
              <li>Catches subscriptions you forgot.</li>
              <li>Cancels unwanted subscriptions for you.</li>
              <li>Negotiates lower bills.</li>
              <li>Average user saves $720/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free version — see all subscriptions.</li>
              <li>Premium: $4–$12/month (you set price).</li>
              <li>Premium adds bill negotiation.</li>
              <li>Free version often enough.</li>
              <li>Cancel + save typically pays for premium.</li>
              <li>30-day free trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Rocket Money app.</li>
              <li>Create account.</li>
              <li>Securely connect bank/credit card.</li>
              <li>Wait while it scans transactions.</li>
              <li>App lists all recurring charges.</li>
              <li>Tap any to cancel or learn more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common forgotten subscriptions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Magazine subscriptions auto-renewing for years.</li>
              <li>Free trials that became paid.</li>
              <li>Old gym memberships.</li>
              <li>Apps your grandkids signed you up for.</li>
              <li>Cable + streaming services not used.</li>
              <li>Insurance riders + extras.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bill negotiation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium feature.</li>
              <li>App negotiates with cable, internet, phone bills.</li>
              <li>Often saves $20–$100/month.</li>
              <li>You only pay if savings achieved.</li>
              <li>40% commission on first year savings.</li>
              <li>Net savings still significant.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Owned by Rocket Companies (large public company).</li>
              <li>Bank-level encryption.</li>
              <li>Read-only access — can&apos;t move your money.</li>
              <li>Doesn&apos;t sell data per their privacy policy.</li>
              <li>Generally trusted — millions of users.</li>
              <li>Disconnect anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DIY check first — free</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re uncomfortable connecting bank accounts to apps, manually review last 3 months of bank/credit card statements. Highlight every recurring charge. Cancel what you don&apos;t use. Same result, no app needed. Many seniors save $50–$200/month doing this manual review once a year. Or use Rocket Money for the convenience.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
