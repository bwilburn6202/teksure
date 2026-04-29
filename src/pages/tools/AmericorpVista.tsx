import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HandHeart } from 'lucide-react';

export default function AmericorpVista() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AmeriCorps Senior Programs | TekSure" description="Foster Grandparents, Senior Companion, RSVP. Plain-English picks for federal senior service programs with stipends." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HandHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AmeriCorps Senior Programs</h1>
          <p className="text-lg text-muted-foreground">Federal volunteer + stipend.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Three programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Foster Grandparent</strong> — read to kids at school. 15-40 hrs/week. $4-5/hr stipend (tax-free).</li>
              <li><strong>Senior Companion</strong> — visit homebound elders 1-on-1. Same hours + stipend.</li>
              <li><strong>RSVP (Retired Senior Volunteer Program)</strong> — flexible volunteering, your skills, no stipend but mileage reimbursement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>55+ years old.</li>
              <li>Foster Grandparent + Senior Companion — income-limited (200% poverty line OR $30K single).</li>
              <li>RSVP — ANY senior, no income limit.</li>
              <li>Background check required.</li>
              <li>Free training provided.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tax-free stipend (doesn&apos;t affect Social Security or food stamps).</li>
              <li>Free meals during service.</li>
              <li>Mileage reimbursement.</li>
              <li>Free supplemental insurance during service.</li>
              <li>Annual recognition.</li>
              <li>Many lifelong friends.</li>
              <li>Real research-shown health benefits — life satisfaction, lower depression, longer life.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>americorps.gov/serve/americorps-seniors</strong>.</li>
              <li>Click "Find an opportunity" + your zip.</li>
              <li>Local sponsor (school district, senior center, church) lists openings.</li>
              <li>Apply, interview, background check.</li>
              <li>Free training.</li>
              <li>Start serving.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other federal senior programs</h3>
            <p className="text-sm text-muted-foreground"><strong>Senior Community Service Employment Program (SCSEP)</strong> — paid training + part-time job, 55+. <strong>VITA tax volunteers</strong> — train + help low-income tax filing. <strong>Peace Corps Response</strong> — short-term overseas, all ages. All free + meaningful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
