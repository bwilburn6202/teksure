import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function ElderLawAttorneyFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Elder Law Attorney Finder | TekSure" description="Find specialized elder law attorneys. Plain-English guide for seniors needing legal help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Elder Law Attorneys</h1>
          <p className="text-lg text-muted-foreground">Specialized lawyers worth every penny.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to hire one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Estate planning beyond simple will.</li>
              <li>Medicaid asset protection planning.</li>
              <li>Long-term care planning.</li>
              <li>Special needs trusts (children with disabilities).</li>
              <li>Guardianship proceedings.</li>
              <li>Senior real estate (selling family home).</li>
              <li>Veterans benefits applications.</li>
              <li>Elder abuse cases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NAELA</strong> — National Academy of Elder Law Attorneys. naela.org. Best directory.</li>
              <li><strong>National Elder Law Foundation</strong> — Certified Elder Law Attorneys (CELA).</li>
              <li><strong>State bar association</strong> — referral services.</li>
              <li><strong>AARP Legal Services Network</strong> — discounted.</li>
              <li><strong>Local Area Agency on Aging</strong> — recommendations.</li>
              <li>Look for &quot;CELA&quot; certification — gold standard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost ranges</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Initial consult: $0-300 (often free).</li>
              <li>Simple POA: $200-500.</li>
              <li>Will + POA + Healthcare directive bundle: $500-1,500.</li>
              <li>Living trust: $1,500-3,500.</li>
              <li>Medicaid planning: $2,000-10,000.</li>
              <li>Guardianship: $5,000-15,000.</li>
              <li>Hourly: $200-500/hr.</li>
              <li>Flat fees common — ask.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vetting questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>How long practiced elder law specifically?</li>
              <li>What % of practice is elder law?</li>
              <li>Are you a CELA?</li>
              <li>How handle Medicaid in this state?</li>
              <li>Fee structure — flat or hourly?</li>
              <li>Initial consult free?</li>
              <li>Communication: phone/email + how often?</li>
              <li>References from other seniors?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + low-cost options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Legal Services Corporation</strong> — lsc.gov. Free if low income.</li>
              <li><strong>Legal Aid</strong> — local nonprofits, free.</li>
              <li><strong>Senior Legal Hotline</strong> — many states have free.</li>
              <li><strong>AARP Free Legal Help</strong> — for some matters.</li>
              <li><strong>Law school clinics</strong> — students supervised by professors.</li>
              <li><strong>VA legal services</strong> — for veterans.</li>
              <li><strong>Justice in Aging</strong> — justiceinaging.org.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid these</h3>
            <p className="text-sm text-muted-foreground">Avoid &quot;estate planning seminars&quot; that pitch overpriced trusts. Avoid attorneys who push annuities. Avoid generalist lawyers for complex elder matters. Avoid online-only services for complex situations. Avoid pressure to make decisions same day. Take time to research.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
