import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const SVCS = [
  { name: 'Trust &amp; Will', cost: '$199 will / $499 trust', best: 'Senior-friendly UI. Includes power of attorney + healthcare directive. Best support.', good: 'Best overall.' },
  { name: 'LegalZoom', cost: '$99-249 will / $279 trust', best: 'Biggest brand. Optional attorney consultation ($79).', good: 'Best name recognition.' },
  { name: 'FreeWill.com', cost: 'FREE will', best: 'Truly free. Funded by charities. Decent quality. Good for simple estates.', good: 'Best free.' },
  { name: 'NoLo Press / Quicken WillMaker', cost: '$100-180 software', best: 'Buy software, fill out at home. Most thorough for DIYers.', good: 'Best DIY thorough.' },
  { name: 'A real estate-planning attorney', cost: '$500-2,500', best: 'Custom drafted. Catches state-specific issues. Worth it for $500K+ estates or trusts.', good: 'Best for complex.' },
];

export default function WillSoftwareCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Will Software Compared | TekSure" description="DIY will and trust software. Plain-English picks for FreeWill, Trust &amp; Will, LegalZoom — and when to hire an attorney instead." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Will Software</h1>
          <p className="text-lg text-muted-foreground">A simple will is better than no will.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY OK if...</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Estate under $500,000.</li>
              <li>Married, simple — leave everything to spouse, then kids.</li>
              <li>No business ownership.</li>
              <li>No special-needs heirs.</li>
              <li>No second marriage with kids from prior marriage.</li>
              <li>Live in 1 state, no out-of-state property.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire an attorney if...</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$1M+ estate, or $500K + complex situation.</li>
              <li>Want a trust (more complex than will).</li>
              <li>Multiple marriages / step-children.</li>
              <li>Special-needs heirs (need a special-needs trust).</li>
              <li>Own a business.</li>
              <li>Out-of-state property (multiple probates).</li>
              <li>Charitable giving plans.</li>
              <li>Concerns about heirs disputing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What ALL wills must include</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Full legal name of testator (you).</li>
              <li>Statement that this is your "last will and testament".</li>
              <li>Executor name (who handles your affairs).</li>
              <li>List of beneficiaries.</li>
              <li>How assets are split.</li>
              <li>Guardianship for any minor children.</li>
              <li>Signed by you AND 2 witnesses (3 in some states).</li>
              <li>Notarized in most states.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beyond the will — full estate kit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Durable Power of Attorney</strong> — someone can manage your money if you can&apos;t.</li>
              <li><strong>Healthcare Power of Attorney</strong> — someone can make medical decisions.</li>
              <li><strong>Living Will / Advance Directive</strong> — your wishes if incapacitated.</li>
              <li><strong>HIPAA release</strong> — gives family access to medical info.</li>
              <li><strong>Beneficiary forms</strong> — for IRA, 401(k), life insurance — these OVERRIDE the will. Update them yearly.</li>
              <li><strong>Digital assets list</strong> — passwords, accounts (see /tools/digital-legacy-planner).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t put off</h3>
            <p className="text-sm text-muted-foreground">If you die without a will, your state writes one for you — and it&apos;s rarely what you wanted. Probate without a will costs more, takes longer, and may give your assets to people you wouldn&apos;t choose. A simple FreeWill.com document beats nothing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
