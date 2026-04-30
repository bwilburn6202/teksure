import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function HRBlockForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="H&R Block for Senior Tax Filers | TekSure" description="H&R Block in-person + online options for senior tax filers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">H&amp;R Block</h1>
          <p className="text-lg text-muted-foreground">In-person + online tax help.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-person service</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>10,000+ retail offices.</li>
              <li>Sit with tax pro for hour.</li>
              <li>$200–$400 per return typical.</li>
              <li>Senior discount sometimes offered.</li>
              <li>Same-day service.</li>
              <li>Best for tax-anxious seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online software</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Edition — simple returns.</li>
              <li>Deluxe — $35.</li>
              <li>Premium — $55.</li>
              <li>Self-Employed — $85.</li>
              <li>Cheaper than TurboTax usually.</li>
              <li>Same accuracy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax Pro Review</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online software + pro review.</li>
              <li>Pay extra $50–$100.</li>
              <li>Tax pro reviews your DIY return.</li>
              <li>Compromise between DIY + full service.</li>
              <li>Catches mistakes.</li>
              <li>Audit support included.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When in-person worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>First time using software.</li>
              <li>Major life changes (death of spouse, retirement).</li>
              <li>Complex investments + estates.</li>
              <li>Anxious about taxes.</li>
              <li>Deductions you can&apos;t identify.</li>
              <li>Worth the extra cost for peace of mind.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Year-round services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tax planning consultations.</li>
              <li>Audit support.</li>
              <li>Help with IRS letters.</li>
              <li>Tax debt resolution.</li>
              <li>Available year-round, not just March-April.</li>
              <li>Keeps records of past returns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs accountants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CPA — $300–$1,000+ per return.</li>
              <li>H&amp;R Block — $200–$400.</li>
              <li>CPA expertise more comprehensive.</li>
              <li>H&amp;R Block fine for most seniors.</li>
              <li>CPA worth it for high net worth.</li>
              <li>For complex business owners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">In-person if anxious about taxes</h3>
            <p className="text-sm text-muted-foreground">For seniors who feel anxious about taxes or have had significant life changes (spouse death, retirement, big inheritance), the $250–$400 H&amp;R Block in-person service gives peace of mind. They handle the form-filling, you just provide documents. For straightforward retired seniors with just Social Security + pension, free Tax-Aide is sufficient.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
