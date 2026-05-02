import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function SeniorScamReporting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Report Scams Online — Senior Guide" description="Where to report scam calls, texts, and emails." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Report Scams</h1>
          <p className="text-lg text-muted-foreground">Help stop scammers.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. FTC reportfraud.ftc.gov</h2><p>The most useful place. Reports help prosecute scammers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. AARP Fraud Watch</h2><p>1-877-908-3360 — free helpline. They help and report on your behalf.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Spam texts to 7726</h2><p>Forward to 7726 (SPAM). Carrier blocks the number for everyone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Phishing emails</h2><p>Forward to reportphishing@apwg.org. They take down fake sites fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Romance/grandparent scams</h2><p>Report to FBI's IC3.gov. They track international rings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Social Security scam</h2><p>oig.ssa.gov/report. Direct to inspector general.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Don't be embarrassed. Anyone can fall for a clever scam. Reporting helps stop the next one.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
