import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorPassportRenewal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passport Renewal Online — Senior Guide" description="Renew your US passport online or by mail." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passport Renewal</h1>
          <p className="text-lg text-muted-foreground">Skip the post office line.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Online renewal</h2><p>travel.state.gov has online renewal for adults. Saves trips to post office.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Eligible if</h2><p>Adult passport, expired in last 5 years, US address.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Cost</h2><p>$130 for passport book. $30 extra for passport card. Same as mail-in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Photos</h2><p>Submit a digital photo. CVS/Walgreens take USPS-approved photos for $15.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Wait time</h2><p>4-8 weeks. Pay $60 for expedited (2-3 weeks).</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Travel within 14 days</h2><p>Make a passport agency appointment. Real ID needed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Renew at least 9 months before expiration. Many countries deny entry to passports expiring soon.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
