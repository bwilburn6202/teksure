import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function ContractorVetting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Contractor Vetting — Find Honest Help | TekSure" description="Roofer, plumber, painter — how to find a real one. Plain-English checklist for vetting any contractor before signing anything." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contractor Vetting</h1>
          <p className="text-lg text-muted-foreground">Avoid the bad ones. Find the good ones.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Get 3 quotes (always)</h2>
            <p className="text-sm">For any job over $500, get THREE estimates in writing. Three quotes will be:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Low (sometimes the scammer)</li>
              <li>Reasonable (often the right pick)</li>
              <li>High (sometimes a real expert worth it)</li>
            </ul>
            <p className="text-sm mt-2">Don\'t go with the cheapest reflexively. Don\'t go with the priciest. Go with the most-trusted.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Find candidates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Word of mouth</strong> — ask 3 neighbors who they\'ve used. Best signal.</li>
              <li><strong>Nextdoor (free app)</strong> — neighbors post recommendations. Filter by your neighborhood.</li>
              <li><strong>Yelp</strong> — real reviews. Look at photos and 3-star reviews (most balanced).</li>
              <li><strong>Better Business Bureau (BBB)</strong> — bbb.org. Look for "A" or higher rating, few complaints, "Accredited Business" status.</li>
              <li><strong>Angi (formerly Angie\'s List)</strong> — pre-vetted contractors. Free for members.</li>
              <li><strong>HomeAdvisor / Thumbtack</strong> — fast quotes. Lower screening — verify the contractor yourself.</li>
              <li><strong>Local trade associations</strong> — local chapters of Master Plumbers, NARI (remodelers).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — Check the contractor</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>License:</strong> Search "[your state] contractor license lookup". Confirm it\'s active and not expired.</li>
              <li><strong>Insurance:</strong> Ask for proof of general liability ($1M minimum) and workers comp. Real contractors will email a "Certificate of Insurance" (COI) without hesitation.</li>
              <li><strong>References:</strong> Ask for 3 recent customers. CALL them. Ask "Was the work done on time? On budget? Would you hire them again?"</li>
              <li><strong>Reviews:</strong> Read the 1-star and 3-star reviews specifically. 5-star reviews are easy; the bad ones reveal patterns.</li>
              <li><strong>BBB:</strong> Search company name. Are there many complaints? Were they resolved?</li>
              <li><strong>Lawsuits:</strong> Quick Google search "[company name] lawsuit" or "[company name] complaint" — sometimes shocking.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags during the meeting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Demands cash only.</li>
              <li>Pushes you to sign today.</li>
              <li>Wants more than 30% upfront. Standard is 10-20% for materials.</li>
              <li>No written contract, just a handshake.</li>
              <li>Vague timeline, vague prices.</li>
              <li>"My usual roofer is sick, but I can do it" (subcontracting to who-knows).</li>
              <li>Won\'t pull permits — usually because they\'re not licensed for that work.</li>
              <li>Pressure not to call the city or get permits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Once you\'ve picked one</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Get a written contract. Read every line.</li>
              <li>Specify materials, brands, model numbers — not "high quality flooring".</li>
              <li>Specify start and end dates.</li>
              <li>Specify payment schedule. "10% down, 40% at midpoint, 50% on completion" is typical.</li>
              <li>Pay with credit card or check, never cash. Reverses if needed.</li>
              <li>Don\'t pay the final installment until the job is done AND you\'ve walked through.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If something goes wrong</h3>
            <p className="text-sm text-muted-foreground">File with the BBB. File with your state\'s licensing board. For amounts under your small claims limit ($5k-15k), file in small claims court — often the contractor pays just to avoid showing up. Keep all records.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
