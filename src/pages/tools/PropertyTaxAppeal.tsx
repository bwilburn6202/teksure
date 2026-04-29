import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function PropertyTaxAppeal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Property Tax Appeal — DIY Guide | TekSure" description="Lower your property tax bill yourself. Plain-English guide to filing a property tax appeal — and senior exemptions worth thousands." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Property Tax Appeal</h1>
          <p className="text-lg text-muted-foreground">DIY. Save $500-3,000/year.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to appeal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Your assessment is HIGHER than recent comparable home sales.</li>
              <li>Square footage on assessor&apos;s records is wrong.</li>
              <li>Bedrooms/bathrooms count is wrong.</li>
              <li>Your home has issues the assessor doesn&apos;t know about (foundation, roof).</li>
              <li>Neighbor in identical home pays less.</li>
              <li>Your assessment went up MORE than market average.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — get your records</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>County assessor website — search your address.</li>
              <li>Verify square footage, bedroom/bath count, year built.</li>
              <li>Errors here = automatic appeal grounds.</li>
              <li>Print "Property Record Card".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — find comparables</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Look up 3-5 RECENT (within 6-12 months) sales of similar homes within 1 mile.</li>
              <li>Use Zillow, Redfin, Realtor.com — filter "Sold".</li>
              <li>Match: square footage within 10%, similar age, same school district.</li>
              <li>Calculate price per square foot.</li>
              <li>Apply to YOUR square footage.</li>
              <li>If lower than your assessment — you have a case.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — file the appeal</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to county assessor website. Search "appeal" or "grievance day".</li>
              <li>Strict deadlines — usually 30-60 days after assessment notice.</li>
              <li>Fill out form. Attach comparables + photos of your home&apos;s issues.</li>
              <li>Submit online or by mail.</li>
              <li>Hearing scheduled — usually 30-90 days later.</li>
              <li>Show up calm + factual.</li>
              <li>Decision in 2-8 weeks.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior exemptions — APPLY ONCE</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior Citizen Exemption</strong> — most states give 65+ a partial property tax exemption. $1,000-10,000+/year savings.</li>
              <li><strong>Homestead exemption</strong> — primary residence break.</li>
              <li><strong>Disability exemption</strong>.</li>
              <li><strong>Veterans exemption</strong>.</li>
              <li><strong>Property tax FREEZE</strong> — Texas, Illinois, others freeze rates after 65.</li>
              <li>Apply through your county assessor. Forms vary by state.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax-assessment companies</h2>
            <p className="text-sm">Companies like Ownwell, Reduce Property Tax handle appeals for 25-40% of first-year savings. No-cost-up-front. Worth it if you don&apos;t want hassle, or if first appeal lost. DIY is free though.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">It&apos;s easier than you think</h3>
            <p className="text-sm text-muted-foreground">Roughly 30-60% of property tax appeals succeed. Most are simple. Two hours of your time can save thousands of dollars over the years you stay in the house. Even if it doesn&apos;t work the first year, comparables change — try again next year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
