import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function HomeWarrantyShoppingSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Warranty for Seniors | TekSure" description="Home warranty for senior homeowners. AHS, First American, Choice Home Warranty compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Warranty</h1>
          <p className="text-lg text-muted-foreground">Predictable repairs cost. Worth it?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is home warranty?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Covers home appliances + systems.</li>
              <li>NOT same as homeowners insurance.</li>
              <li>$50-$80/month + $75-$125 service fee.</li>
              <li>Covers HVAC, plumbing, electrical, appliances.</li>
              <li>Replaces expensive repairs.</li>
              <li>Especially older homes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major providers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>American Home Shield — largest.</li>
              <li>Choice Home Warranty.</li>
              <li>First American Home Warranty.</li>
              <li>Cinch Home Services.</li>
              <li>Liberty Home Guard.</li>
              <li>Compare BEFORE buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it when</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Older home (10+ years).</li>
              <li>Aging HVAC + appliances.</li>
              <li>Don&apos;t have plumber/electrician you trust.</li>
              <li>Want predictable budget.</li>
              <li>Seniors valuing peace of mind.</li>
              <li>Limited mobility for DIY.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drawbacks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Companies often deny claims.</li>
              <li>You don&apos;t pick the contractor.</li>
              <li>Cheap parts replacements.</li>
              <li>Pre-existing exclusion.</li>
              <li>Many require maintenance records.</li>
              <li>Self-insurance often better.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Math the value</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$60/month × 12 = $720/year.</li>
              <li>+ $100 service fee per call.</li>
              <li>HVAC replacement = $5,000-$10,000.</li>
              <li>Some seniors break even.</li>
              <li>Many pay more in premiums than save.</li>
              <li>Self-insurance often wins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-insurance approach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save $60/month in &quot;home repair fund.&quot;</li>
              <li>Build to $5,000+ over time.</li>
              <li>Pay actual repairs from fund.</li>
              <li>Excess stays your money.</li>
              <li>You pick best repair person.</li>
              <li>No claim denials.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Self-fund unless aging home</h3>
            <p className="text-sm text-muted-foreground">For most senior homeowners, putting $60/month in a home repair fund beats buying a home warranty. You control quality of repairs + keep extra funds. Home warranties make sense only if you have an aging home with multiple systems near failure. Read reviews carefully — many homeowners find warranties frustrating.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
