import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function PhishingTrainingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phishing Training for Seniors | TekSure" description="Spot phishing emails + texts. Senior fraud prevention training." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spot Phishing</h1>
          <p className="text-lg text-muted-foreground">Senior fraud training.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Common red flags</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Urgent — &quot;act now!&quot;</li><li>Wrong email domain.</li><li>Spelling errors.</li><li>Generic &quot;Dear Customer.&quot;</li><li>Strange links.</li><li>Senior pause + verify.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bank emails</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Banks NEVER ask password by email.</li><li>Hover links — see real URL.</li><li>Type bank.com directly instead.</li><li>Call bank if unsure.</li><li>Senior healthy paranoia.</li><li>Don&apos;t click.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Smishing (text)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>USPS package alerts.</li><li>Tax refund scams.</li><li>Senior verify direct.</li><li>USPS — informeddelivery.</li><li>IRS — irs.gov.</li><li>Don&apos;t click links.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vishing (calls)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>IRS doesn&apos;t call.</li><li>Medicare doesn&apos;t cold call.</li><li>Microsoft doesn&apos;t call about virus.</li><li>Hang up.</li><li>Senior never engage.</li><li>Block + report.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Practice quiz</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google&apos;s Phishing Quiz.</li><li>Free.</li><li>Test yourself.</li><li>Senior learning.</li><li>10 examples.</li><li>Build awareness.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">If you clicked</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t panic.</li><li>Change passwords.</li><li>Run virus scan.</li><li>Watch accounts.</li><li>Senior call bank.</li><li>Most senior fraud caught early.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Senior healthy paranoia = fraud prevention</h3><p className="text-sm text-muted-foreground">Senior most-targeted demographic for phishing. Healthy paranoia: never click links from unsolicited emails/texts/calls. Banks/IRS/Medicare never ask password. Verify direct via bookmarked sites or known phone numbers. Take Google Phishing Quiz. Free training.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
