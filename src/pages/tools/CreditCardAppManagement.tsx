import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function CreditCardAppManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Card Apps for Seniors | TekSure" description="Manage credit cards through their apps. Lock, alerts, autopay, rewards for senior cardholders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Card Apps</h1>
          <p className="text-lg text-muted-foreground">Manage cards. Catch fraud. Earn rewards.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why use card apps?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Instant transaction alerts catch fraud immediately.</li>
              <li>Lock cards if lost — no waiting on hold.</li>
              <li>Set up autopay — never miss payment.</li>
              <li>See rewards balance + redeem easily.</li>
              <li>Pay bill, see statements, anywhere anytime.</li>
              <li>Free app from your card issuer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major card apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chase Mobile — Sapphire, Freedom, Slate.</li>
              <li>Capital One Mobile.</li>
              <li>Citi Mobile.</li>
              <li>American Express App.</li>
              <li>Discover Card App.</li>
              <li>Wells Fargo Mobile.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Critical alerts to set</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>EVERY transaction (catches fraud fast).</li>
              <li>Charges over $100.</li>
              <li>International transactions.</li>
              <li>Card-not-present transactions (online).</li>
              <li>ATM withdrawals.</li>
              <li>Payment due reminders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Card lock feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Toggle lock if card lost or stolen.</li>
              <li>Stops all new charges instantly.</li>
              <li>Unlock when found.</li>
              <li>Better than canceling — keeps recurring bills running.</li>
              <li>Faster than calling.</li>
              <li>Available in most major card apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Autopay setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Autopay or Automatic Payments.</li>
              <li>Pay full balance automatically each month.</li>
              <li>Avoids interest charges.</li>
              <li>Avoids late fees + credit damage.</li>
              <li>Linked to checking account.</li>
              <li>Set up once, forget about it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disputing charges</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See unfamiliar charge?</li>
              <li>Tap charge → &quot;Dispute&quot; or &quot;Report Issue.&quot;</li>
              <li>Process is digital, no phone call.</li>
              <li>Provisional credit while investigated.</li>
              <li>Most disputes resolved in your favor.</li>
              <li>Faster than calling customer service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up alerts on every card today</h3>
            <p className="text-sm text-muted-foreground">If you take one action this week: download every credit card app and turn on transaction alerts for ALL purchases. The text or push notification within minutes of any charge is the fastest fraud detection available. Many seniors who&apos;ve been hit with fraud caught it within minutes due to instant alerts — minimizing damage. Free, takes 2 minutes per card.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
