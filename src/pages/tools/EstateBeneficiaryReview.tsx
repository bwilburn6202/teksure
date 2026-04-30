import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';

export default function EstateBeneficiaryReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Annual Beneficiary Review for Seniors | TekSure" description="Update beneficiaries on retirement, life insurance, bank accounts. Critical estate planning for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScrollText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Beneficiary Review</h1>
          <p className="text-lg text-muted-foreground">Annual checkup of who inherits.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why this matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beneficiary designations OVERRIDE your will.</li>
              <li>If ex-spouse listed, they inherit — not current spouse.</li>
              <li>If deceased child still listed, complicated probate.</li>
              <li>Outdated beneficiaries = family chaos.</li>
              <li>Easy to fix — just update online or via form.</li>
              <li>Most seniors haven&apos;t reviewed in 10+ years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accounts to check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>401(k) — old + current employers.</li>
              <li>IRA accounts — Traditional + Roth.</li>
              <li>Life insurance policies.</li>
              <li>Annuities.</li>
              <li>Bank accounts (POD/TOD designations).</li>
              <li>Brokerage accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to update</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After marriage or divorce.</li>
              <li>Birth of grandchildren.</li>
              <li>Death of named beneficiary.</li>
              <li>Family conflict (cut someone out, add someone).</li>
              <li>Annual review regardless.</li>
              <li>Any major life change.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Primary + contingent</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Primary — first in line.</li>
              <li>Contingent — backup if primary dies.</li>
              <li>Always name BOTH.</li>
              <li>Common: spouse primary, kids contingent.</li>
              <li>Without contingent, account goes through probate.</li>
              <li>Probate = expensive + slow + public.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to update</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most retirement accounts — update in app/online.</li>
              <li>Life insurance — call insurer for form.</li>
              <li>Bank — visit branch with ID.</li>
              <li>Spouse may need to consent on 401(k).</li>
              <li>Save confirmation in your records.</li>
              <li>Tell your executor where to find documents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trust as beneficiary</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If you have a trust, name it as beneficiary.</li>
              <li>Trustees inherit + distribute per trust terms.</li>
              <li>More control over how money is used.</li>
              <li>Especially helpful if heirs are minors or struggling.</li>
              <li>Talk to estate attorney for setup.</li>
              <li>Worth consideration for $500K+ assets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Schedule annual review</h3>
            <p className="text-sm text-muted-foreground">Pick a memorable date — birthday, anniversary, January 1. Once a year, log into each retirement account, life insurance, and bank account. Verify beneficiaries are still correct. 30 minutes saves your family weeks of legal hassle and possibly tens of thousands in probate fees. Many seniors discover ex-spouses or deceased people still listed. Easy fix, huge consequences.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
