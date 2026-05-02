import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorIRSApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRS Online — Senior Guide" description="File and track taxes safely with the IRS online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IRS Online</h1>
          <p className="text-lg text-muted-foreground">Tax tools straight from IRS.gov.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. IRS2Go app</h2><p>Free official app from the IRS in App Store and Play Store.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Where's My Refund</h2><p>Check refund status 24 hours after filing electronically. Updates daily.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Free tax filing</h2><p>If income is under about $84,000, IRS Free File Direct File is no-cost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Make payments</h2><p>Pay tax bills directly from a bank account at no extra charge.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Past tax returns</h2><p>Get transcripts of old returns at irs.gov/transcript. Free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. IRS scam warnings</h2><p>IRS never calls demanding payment. Never threatens arrest. Always uses postal mail first.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a caller claims to be IRS and demands gift cards, it is 100% a scam. Hang up.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
