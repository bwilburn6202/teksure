import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarCheck } from 'lucide-react';

export default function AutoBillPaySetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Bill Pay Setup for Seniors | TekSure" description="Never miss a bill. Plain-English auto-pay setup guide for senior bills, mortgage, utilities." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CalendarCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Auto Bill Pay Setup</h1>
          <p className="text-lg text-muted-foreground">Never late. Stress-free. Set + forget.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why auto-pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Never late = better credit score.</li>
              <li>Avoids late fees ($25-100/missed).</li>
              <li>One less thing to remember.</li>
              <li>Critical if hospitalized / traveling.</li>
              <li>Family doesn&apos;t worry about you forgetting bills.</li>
              <li>Some bills DISCOUNT for auto-pay (mortgage 0.25% rate cut).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2 ways to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Through bank&apos;s bill pay</strong> — bank sends payment. Easiest to control.</li>
              <li><strong>Through company website</strong> — they pull from bank. More automatic.</li>
              <li>Mix both — pick what works per bill.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to auto-pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FIXED bills</strong> — same every month. Mortgage, car loan, insurance.</li>
              <li><strong>Subscriptions</strong> — Netflix, Hulu, Costco.</li>
              <li><strong>Internet, phone, cable</strong> — same monthly.</li>
              <li><strong>Most utilities</strong> — but VARIABLE bills.</li>
              <li><strong>NOT credit cards</strong> — pay manually OR auto-pay STATEMENT BALANCE.</li>
              <li><strong>NOT first time</strong> — verify amount manually for 3 months first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Variable bill caution</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Electric, gas, water — changes monthly.</li>
              <li>Set MAXIMUM cap with bank.</li>
              <li>Or get email notice each month with amount, then auto-pay.</li>
              <li>Review monthly — catch errors.</li>
              <li>Some elderly hit by water leak = $1,000+ bill auto-paid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety + control</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use ONE checking account for all auto-payments.</li>
              <li>Keep 1.5-2x monthly bills as cushion.</li>
              <li>Email notifications for every payment.</li>
              <li>Review checking account weekly.</li>
              <li>Cancel unused subscriptions (see /tools/subscription-canceler).</li>
              <li>Update card if it changes/expires.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you&apos;re hospitalized</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bills keep getting paid.</li>
              <li>Trusted family member with Power of Attorney can manage.</li>
              <li>List of all auto-payments somewhere safe.</li>
              <li>Bank app on phone — POA can monitor.</li>
              <li>Best protection against late-fee accumulation during illness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bill list document</h3>
            <p className="text-sm text-muted-foreground">Keep ONE document listing all auto-pays: company name, account #, monthly cost, bank account used, due date. Share with spouse + POA. Update yearly. Critical if you become incapacitated. Stored in secure but accessible location.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
