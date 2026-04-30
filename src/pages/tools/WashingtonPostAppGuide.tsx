import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function WashingtonPostAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Washington Post App for Seniors | TekSure" description="Washington Post subscription guide for senior subscribers. Politics, news, audio." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Washington Post</h1>
          <p className="text-lg text-muted-foreground">Politics + national news. Cheaper than NYT.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subscription</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$10/month or $100/year.</li>
              <li>Often $50/year deal for first year.</li>
              <li>Government employees free (.gov email).</li>
              <li>Military free with .mil email.</li>
              <li>Education staff $50/year.</li>
              <li>Senior discount $30/year sometimes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strong politics + investigative coverage.</li>
              <li>Audio versions of articles.</li>
              <li>Listen to news while walking.</li>
              <li>Adjustable text size.</li>
              <li>Save articles for later.</li>
              <li>Push notifications customizable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-loved sections</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Politics — most thorough coverage.</li>
              <li>Local DC area news.</li>
              <li>Carolyn Hax advice column.</li>
              <li>Going Out Guide.</li>
              <li>Health + Science section.</li>
              <li>Real Estate (especially DC area).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs NYT</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>WaPo cheaper ($10 vs $25 NYT).</li>
              <li>NYT has more games + cooking.</li>
              <li>WaPo stronger on DC politics.</li>
              <li>Both have audio articles.</li>
              <li>Many subscribe to both.</li>
              <li>Or alternate years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple News — limited free WaPo articles.</li>
              <li>Library access — many libraries provide.</li>
              <li>Local newspaper digital subscription.</li>
              <li>NPR + BBC for free news.</li>
              <li>Reuters AP + Wires — free.</li>
              <li>News aggregators like Google News.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cancel without hassle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal &quot;click to cancel&quot; rule helps.</li>
              <li>Cancel online at WashingtonPost.com.</li>
              <li>Or call: 1-800-477-4679.</li>
              <li>They may offer retention deal.</li>
              <li>Ignore guilt trips — just cancel if unused.</li>
              <li>Easy to resume later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it for politics fans</h3>
            <p className="text-sm text-muted-foreground">If you follow politics closely, the Washington Post at $10/month delivers the strongest political coverage in America at half the NYT price. Audio articles let you listen while walking. Combine with a free local newspaper digital subscription for full coverage. Cancel and resume anytime — sometimes a year off saves money + reduces news fatigue.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
