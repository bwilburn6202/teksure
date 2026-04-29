import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';

export default function TrustVsWillExplainer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Trust vs Will — Do You Need a Trust? | TekSure" description="Living trust vs simple will. Plain-English breakdown of when you need each, costs, and the surprising truth about probate." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScrollText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Trust vs Will</h1>
          <p className="text-lg text-muted-foreground">When a will is enough. When you need a trust.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📜 Will (simple, $200-500)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Says who gets your stuff when you die.</li>
              <li>Goes through PROBATE (public court process).</li>
              <li>Probate takes 6-18 months and costs 3-7% of estate.</li>
              <li>Only effective AFTER you die.</li>
              <li>Best for: simple estates under ~$500k, no minor kids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🏛️ Revocable Living Trust ($1,500-5,000)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You move your assets INTO the trust while alive.</li>
              <li>You\'re still in control as "trustee".</li>
              <li>Skips probate when you die — assets transfer privately to heirs in days, not months.</li>
              <li>Manages your assets if you become incapacitated.</li>
              <li>Best for: estates over $500k, real estate, blended families, privacy concerns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you NEED a trust (not just want)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Real estate in multiple states (avoids multi-state probate).</li>
              <li>Estate over your state\'s estate tax limit.</li>
              <li>Special needs heir (special needs trust protects benefits).</li>
              <li>Concerns about minor children inheriting.</li>
              <li>Want strict control over WHEN heirs get money.</li>
              <li>Privacy — trust contents stay private; wills become public.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When a will is enough</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Single state. Estate under your state\'s probate limit.</li>
              <li>Simple family — straightforward heirs.</li>
              <li>Most assets pass via beneficiary anyway (retirement accounts, life insurance, payable-on-death bank accounts).</li>
            </ul>
            <p className="text-sm mt-2">Many states have "small estate" or "summary probate" for under $50-150k — fast, cheap, no lawyer.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beneficiaries beat wills</h2>
            <p className="text-sm">For 401(k), IRA, life insurance, and bank accounts with "payable on death" — the BENEFICIARY designation overrides your will. Update beneficiaries directly with each company. Free.</p>
            <p className="text-sm mt-2">Many seniors have outdated beneficiaries (ex-spouse, deceased relatives). Take 30 minutes to update. More important than re-doing the will.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hybrid — pour-over will + trust</h2>
            <p className="text-sm">If you set up a trust, you also have a "pour-over will" that catches anything not formally moved into the trust. Common combo. Your attorney handles both.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get one or the other</h3>
            <p className="text-sm text-muted-foreground">Without a will OR trust, the state decides who gets your stuff. Probate court fees + delays cost your family thousands. The cheapest will (LegalZoom $200) beats nothing. The right plan beats the cheapest. Talk to a fee-only attorney once. Done.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
