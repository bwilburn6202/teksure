import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorScamReporting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scam Reporting for Seniors — TekSure" description="Where to report scams — FTC, AARP Fraud Watch, FBI IC3, state attorney general." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Where to Report Scams</h1>
          <p className="text-lg text-muted-foreground">Help catch criminals. Help other seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FTC ReportFraud.ftc.gov</h2><p>FREE. Federal Trade Commission. All scams.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP Fraud Watch</h2><p>FREE 877-908-3360. Specialized senior advice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FBI IC3.gov</h2><p>FREE. Internet crime. International scams.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">State Attorney General</h2><p>Each state has consumer protection. Search &ldquo;[state] AG consumer&rdquo; online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senate Fraud Hotline</h2><p>1-855-303-9470. Senate Special Committee on Aging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bank/credit card</h2><p>Call back of card. Dispute charges. Often refunded.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Don&apos;t feel ashamed</h2><p>Smart, educated people fall for scams. Reporting helps everyone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save recent scam call screenshots. Helps investigators identify patterns.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
