import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function CreditKarmaForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Karma for Seniors | TekSure" description="Free credit score + monitoring. Credit Karma guide for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Karma</h1>
          <p className="text-lg text-muted-foreground">Free credit score + alerts.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free credit scores.</li><li>Free credit reports.</li><li>Identity monitoring.</li><li>Updates weekly.</li><li>Free, no credit card.</li><li>Owned by Intuit/TurboTax.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>CreditKarma.com or app.</li><li>Email + password.</li><li>Verify identity questions.</li><li>See score in 5 min.</li><li>No credit hit.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Identity alerts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free dark web monitoring.</li><li>Email if SSN leaked.</li><li>New account alerts.</li><li>Senior fraud catcher.</li><li>Catch before damage.</li><li>Email + app push.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Catch ID theft early.</li><li>Score before applying for loan.</li><li>Track score over time.</li><li>See report errors.</li><li>Dispute online.</li><li>Free education.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Plus AnnualCreditReport</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AnnualCreditReport.com — official.</li><li>Free reports weekly (post-pandemic).</li><li>From all 3 bureaus.</li><li>Use both Credit Karma + this.</li><li>Senior thorough.</li><li>Government site.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Credit card recommendations — biased.</li><li>You don&apos;t need to apply.</li><li>Just for free monitoring.</li><li>Don&apos;t click ads.</li><li>Use score + alerts only.</li><li>Senior guard up.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free credit watch = senior fraud catcher</h3><p className="text-sm text-muted-foreground">Free Credit Karma + free AnnualCreditReport.com = best senior identity theft protection. New account opens fraudulently — alert in days. Senior catches early before damage. Free, no subscription. Take 30 minutes to set up. Saves thousands in potential fraud.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
