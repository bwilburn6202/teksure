import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorOnlineCharityGiving() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Charity Giving for Seniors — TekSure" description="Donate safely online — Charity Navigator, GuideStar, GoFundMe tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Charity Giving</h1>
          <p className="text-lg text-muted-foreground">Give safely. Avoid scams.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Charity Navigator</h2><p>FREE. Rates 200,000 charities. Pick 4-star ones.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GuideStar</h2><p>FREE. Detailed financial reports for any charity.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GoFundMe</h2><p>FREE. Personal crowdfunding. Verify person before donating.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for scams</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Unsolicited calls/texts</li><li>Fake police/fire fund</li><li>Pressure to give now</li><li>Asking for cryptocurrency</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">QCDs from IRA</h2><p>Direct charity giving from IRA = tax-free. Saves on taxes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tax records</h2><p>Save donation receipts. Itemized seniors deduct charitable giving.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Give to charities you research, not ones that contact you. Avoids 90% of scams.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
