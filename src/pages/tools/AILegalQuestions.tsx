import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function AILegalQuestions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Legal Questions for Seniors | TekSure" description="AI for legal info safely. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Legal Help</h1>
          <p className="text-lg text-muted-foreground">Educational use. Real attorney for action.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Good AI uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Understanding legal terms.</li>
              <li>Reading contracts before signing.</li>
              <li>Knowing your tenant rights.</li>
              <li>Will + estate basics.</li>
              <li>Senior consumer protection laws.</li>
              <li>Understanding court documents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-yellow-700">Don&apos;t do without lawyer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign legal documents.</li>
              <li>File court papers.</li>
              <li>Sign settlement agreements.</li>
              <li>Make legally binding decisions.</li>
              <li>Power of attorney.</li>
              <li>Real estate transactions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sample questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;What is a living trust?&quot;</li>
              <li>&quot;Explain power of attorney types.&quot;</li>
              <li>&quot;What does this contract clause mean?&quot;</li>
              <li>&quot;What are senior tenant rights?&quot;</li>
              <li>&quot;Help me understand this insurance denial.&quot;</li>
              <li>&quot;What is fiduciary duty?&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free senior legal aid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eldercare Locator — 1-800-677-1116.</li>
              <li>Legal Aid — eligible by income.</li>
              <li>State Bar Lawyer Referral — free 30 min.</li>
              <li>AARP Foundation Litigation.</li>
              <li>Senior Centers — legal clinic days.</li>
              <li>Law school clinics — free help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online legal AI</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LegalZoom</strong> — wills + estates.</li>
              <li><strong>Rocket Lawyer</strong> — documents.</li>
              <li><strong>Trust &amp; Will</strong> — estate plans.</li>
              <li><strong>FreeWill.com</strong> — free wills.</li>
              <li>Cheaper than full attorney.</li>
              <li>Verify simple cases only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you need real lawyer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Disputes — landlord, neighbor, contractor.</li>
              <li>Sued — defending case.</li>
              <li>Suing — pursuing case.</li>
              <li>Complex estate plans.</li>
              <li>Divorce, custody.</li>
              <li>Criminal defense.</li>
              <li>Senior law specialty for elder issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Verify all AI legal advice</h3>
            <p className="text-sm text-muted-foreground">Lawyer scolds AI hallucinations. AI sometimes invents fake cases. Always cross-check. Use AI as starting point — never as legal authority. State law varies. Federal vs state matters. Consultation often free first 30 minutes. Power of attorney + will = invest in actual lawyer. Save thousands prevent mistakes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
