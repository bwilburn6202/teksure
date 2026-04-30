import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function IpadVsFireTabletSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad vs Fire Tablet for Seniors | TekSure" description="Apple iPad vs Amazon Fire HD vs Samsung Galaxy Tab compared for senior tablet buyers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tablet Comparison</h1>
          <p className="text-lg text-muted-foreground">iPad, Fire HD, Galaxy — which fits you?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple iPad — best overall</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPad (10th gen) — $349, great starter.</li>
              <li>iPad Air — $599, more power.</li>
              <li>Best app selection — every major app available.</li>
              <li>Easiest if you have iPhone.</li>
              <li>Smoothest user experience.</li>
              <li>Lasts 5+ years with software updates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Amazon Fire HD — cheapest</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fire HD 8 — $90, basic tasks.</li>
              <li>Fire HD 10 — $150, larger screen.</li>
              <li>Excellent for Amazon Prime Video, Kindle books.</li>
              <li>Limited app selection (Amazon Appstore only).</li>
              <li>Slower than iPad.</li>
              <li>Great budget pick.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Samsung Galaxy Tab</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Galaxy Tab A9 — $200, good Android tablet.</li>
              <li>Galaxy Tab S9 — $700, premium.</li>
              <li>Best if you have Samsung Galaxy phone.</li>
              <li>Full Google Play store.</li>
              <li>S Pen included on Tab S series.</li>
              <li>Wider price range than iPad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GrandPad — senior specialty</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$50/month subscription including device.</li>
              <li>Big buttons, simple icons.</li>
              <li>Pre-loaded with family contacts.</li>
              <li>24/7 customer support.</li>
              <li>No app store confusion.</li>
              <li>For seniors who want minimal tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which to choose?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Already have iPhone? → iPad (10th gen).</li>
              <li>Tight budget? → Fire HD 10.</li>
              <li>Have Samsung phone? → Galaxy Tab.</li>
              <li>Just want simple? → GrandPad.</li>
              <li>Heavy reader? → iPad with Kindle app.</li>
              <li>Drawing/notes? → iPad with Apple Pencil.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior accessibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All have text size adjustment.</li>
              <li>iPad: best built-in voice control.</li>
              <li>Fire: simpler home screen layout.</li>
              <li>Samsung: excellent S Pen for stylus users.</li>
              <li>All have video chat capability.</li>
              <li>All work with Bluetooth keyboards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">iPad 10th gen for most</h3>
            <p className="text-sm text-muted-foreground">For most seniors, the iPad 10th gen at $349 is the right tablet. Best app support, easiest interface, and lasts 5+ years. If you&apos;re on a budget under $200, the Amazon Fire HD 10 ($150) handles email, video calls, and Kindle reading well. Avoid generic Android tablets — they often get abandoned without updates after a year or two.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
