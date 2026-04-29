import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cigarette } from 'lucide-react';

export default function QuitSmokingSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Quit Smoking for Seniors | TekSure" description="Never too late. Plain-English quit smoking guide for senior smokers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cigarette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Quit Smoking</h1>
          <p className="text-lg text-muted-foreground">Quitting at 65+ adds years.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it at any age</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quit at 65 = add 1.4 years to life.</li>
              <li>BP, heart rate normalize within hour.</li>
              <li>Lung capacity improves 30% in 9 months.</li>
              <li>Heart attack risk halves in 1 year.</li>
              <li>Stroke risk lower in 5 years.</li>
              <li>Even 1 month no smoke = significant health gains.</li>
              <li>Never too late.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best quit methods</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chantix (varenicline)</strong> — pill, 12 weeks. Most effective.</li>
              <li><strong>Nicotine replacement</strong> — patches, gum, lozenges.</li>
              <li><strong>Bupropion (Wellbutrin/Zyban)</strong> — pill.</li>
              <li><strong>Cognitive Behavioral Therapy</strong>.</li>
              <li><strong>Combine</strong> — most effective.</li>
              <li>Medicare covers all.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free quit help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-800-QUIT-NOW</strong> — federal hotline. Free counseling.</li>
              <li><strong>Smokefree.gov</strong> — free quit plan.</li>
              <li><strong>QuitGuide app</strong> — free.</li>
              <li><strong>Nicotine Anonymous</strong> — free meetings.</li>
              <li><strong>State quit lines</strong> — free counseling + sometimes free patches.</li>
              <li>Free + effective.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vaping is NOT safer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>EVALI — vaping lung disease, sometimes fatal.</li>
              <li>Still nicotine = addiction.</li>
              <li>Long-term effects unknown.</li>
              <li>Not approved as quit aid by FDA.</li>
              <li>Use FDA-approved methods instead.</li>
              <li>Don&apos;t replace one bad habit with another.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to try harder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most quitters need 5-7 attempts.</li>
              <li>Each attempt is progress.</li>
              <li>Slip ≠ failure.</li>
              <li>Tell family — accountability.</li>
              <li>Find triggers — replace habits.</li>
              <li>Get cravings? 5-min exercise breaks them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For loved ones</h3>
            <p className="text-sm text-muted-foreground">If you smoke, your spouse/grandchild&apos;s exposure to secondhand smoke = real harm. Many quit FOR family. Set quit date. Get support. Quitting hardest at first 30 days. Worth it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
