import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function ContractorVettingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Contractor Vetting Guide for Seniors | TekSure" description="Hire safely. Plain-English contractor vetting checklist for senior home repairs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contractor Vetting</h1>
          <p className="text-lg text-muted-foreground">Seniors lose $$$ to bad contractors. Vet carefully.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find candidates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Word-of-mouth from neighbors.</li>
              <li><strong>Angi.com</strong> — vetted with reviews.</li>
              <li><strong>Thumbtack</strong> — local pros.</li>
              <li><strong>HomeAdvisor</strong> — verified.</li>
              <li><strong>Nextdoor</strong> — neighborhood recs.</li>
              <li>Local hardware stores often know good contractors.</li>
              <li>Avoid door-to-door + unsolicited calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Licensed</strong> — check state contractor board.</li>
              <li><strong>Insured</strong> — liability + workers comp. Ask for certificate.</li>
              <li><strong>Bonded</strong> — protects you if they vanish.</li>
              <li><strong>5+ years in business</strong> at same address.</li>
              <li><strong>BBB rating</strong> — A or A+.</li>
              <li><strong>Reviews</strong> — Google, Yelp, BBB. Read recent.</li>
              <li><strong>References</strong> — 3 recent jobs you can drive by.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 quotes ALWAYS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get 3 written estimates.</li>
              <li>Same scope of work.</li>
              <li>Compare materials + labor breakdown.</li>
              <li>Suspicious if much lower than others.</li>
              <li>Detailed estimate — not vague &quot;repairs $5,000.&quot;</li>
              <li>Cost-only competitive bids on Angi.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Contract MUST include</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Contractor name + license # + address.</li>
              <li>Detailed scope of work.</li>
              <li>Materials list with brands/models.</li>
              <li>Payment schedule.</li>
              <li>Start + completion dates.</li>
              <li>Warranty terms.</li>
              <li>Cleanup + disposal terms.</li>
              <li>3-day cancellation right (federal law).</li>
              <li>Both signatures.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Payment rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER pay 100% upfront.</li>
              <li>Max 1/3 deposit (some states limit to 10% by law).</li>
              <li>Progress payments tied to milestones.</li>
              <li>Withhold final 10% until satisfied.</li>
              <li>Pay by check or credit card (NOT cash/wire).</li>
              <li>Get receipt for every payment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-targeting scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Door-to-door claiming damage you didn&apos;t know about.</li>
              <li>&quot;Doing work in neighborhood, special price.&quot;</li>
              <li>Pressure for cash + immediate decision.</li>
              <li>Out-of-state license plates.</li>
              <li>No written contract.</li>
              <li>Half-finish + disappear.</li>
              <li>Demand more money mid-job.</li>
              <li>Hang up + slam door is okay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior trusted advocates</h3>
            <p className="text-sm text-muted-foreground">Bring family member to estimates + signing — second eyes catch issues. Some Area Agencies on Aging have <strong>Senior Companion</strong> programs that visit + help review home repairs. State <strong>Attorney General</strong> handles contractor fraud — file complaint if scammed. Senior helpline: 1-877-908-3360 AARP Fraud Watch.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
