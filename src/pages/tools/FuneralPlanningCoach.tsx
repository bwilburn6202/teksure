import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flower } from 'lucide-react';

export default function FuneralPlanningCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Funeral Planning Coach — Pre-plan and Save | TekSure" description="Pre-plan to save your family thousands and emotional stress. Plain-English guide to funeral options, costs, and pitfalls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flower className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Funeral Planning Coach</h1>
          <p className="text-lg text-muted-foreground">A loving gift to your family. Plan ahead.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why pre-plan</h2>
            <p className="text-sm">Average funeral costs $8,000-15,000. In grief, families overspend by 30-50%. Pre-planning means YOU choose what fits your wishes and budget — not your kids in tears at 3am.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost ranges (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Direct cremation</strong> — $700-2,500. No service, just cremation.</li>
              <li><strong>Cremation with memorial</strong> — $2,500-5,000.</li>
              <li><strong>Direct burial</strong> — $1,500-3,500. No viewing, no embalming.</li>
              <li><strong>Traditional funeral with viewing + burial</strong> — $8,000-15,000+ (casket, embalming, plot, headstone, service).</li>
              <li><strong>Green/natural burial</strong> — $1,500-4,000. Biodegradable casket, no embalming.</li>
              <li><strong>Body donation to medical school</strong> — FREE (often includes free cremation back to family).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Get the FTC "General Price List"</strong> — by law, every funeral home must provide one. Compare 3 homes — prices vary 2-3x for the same services.</li>
              <li><strong>Funeralocity / Parting.com</strong> — compare prices online by zip code.</li>
              <li><strong>Costco caskets</strong> — federal "Funeral Rule" lets you buy elsewhere. Costco/Walmart caskets are $900-1,500 vs $3,000-5,000 at funeral homes.</li>
              <li><strong>Memorial society membership</strong> — $20-50 lifetime. Negotiated lower rates with member funeral homes. Search "memorial society [your state]".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Funding methods</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pay-on-death savings account</strong> — simplest. Names beneficiary; bypasses probate.</li>
              <li><strong>Pre-paid funeral contract</strong> — careful: company may go out of business. Check if it\'s in a state-protected trust.</li>
              <li><strong>Burial insurance / Final Expense Life Insurance</strong> — small life policy ($5,000-30,000). Often heavily marketed; usually overpriced.</li>
              <li><strong>Life insurance you already have</strong> — may cover funeral costs.</li>
              <li><strong>Veterans benefits</strong> — $796-2,000 burial allowance, free Arlington/national cemetery burial.</li>
              <li><strong>Social Security $255 lump sum</strong> — to spouse.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Document and tell family</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Write down your wishes — "Five Wishes" form covers this. Include: cremation/burial, location, music, who speaks.</li>
              <li>Tell your spouse and adult kids where the document is.</li>
              <li>If pre-paid: keep the contract with your will.</li>
              <li>Pre-write your obituary draft (relieves family of one painful task).</li>
              <li>List passwords needed to access digital accounts and photos.</li>
              <li>Tell veterans where DD-214 is (needed for VA benefits).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Funeral Consumers Alliance (funerals.org)</strong> — non-profit advocate, brilliant guides. <strong>Compassion & Choices</strong> for end-of-life options. <strong>Veterans Funeral Care</strong> for vets. <strong>"Final Plans" by AARP</strong> — free 32-page workbook.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
