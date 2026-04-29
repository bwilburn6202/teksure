import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function CohousingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cohousing for Seniors | TekSure" description="Intentional senior community. Plain-English cohousing guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cohousing for Seniors</h1>
          <p className="text-lg text-muted-foreground">Own home + shared community.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is cohousing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Own private home.</li>
              <li>Shared common spaces.</li>
              <li>Group meals 1-3x/week.</li>
              <li>Garden, workshops, library shared.</li>
              <li>Designed for community.</li>
              <li>Self-governing — residents decide.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific cohousing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Age-restricted communities (55+ or 60+).</li>
              <li>20-40 households typical.</li>
              <li>Built around aging-in-place.</li>
              <li>Universal design throughout.</li>
              <li>Community supports as needs change.</li>
              <li>Often self-organized.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$200K-700K to buy.</li>
              <li>Monthly fees: $300-800 for shared services.</li>
              <li>Equity ownership.</li>
              <li>Some affordable cohousing options.</li>
              <li>Cheaper than assisted living.</li>
              <li>More expensive than 55+ HOA.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Famous senior cohousing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Silver Sage Village (CO)</strong> — pioneer.</li>
              <li><strong>Glacier Circle (CA)</strong> — first US senior cohousing.</li>
              <li><strong>Burlington Cohousing East Village (VT)</strong>.</li>
              <li><strong>Wolf Creek Lodge (CA)</strong>.</li>
              <li>200+ in US growing.</li>
              <li>cohousing.org for directory.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs other options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>vs 55+ community</strong> — smaller, more involvement.</li>
              <li><strong>vs assisted living</strong> — cheaper, residents independent.</li>
              <li><strong>vs CCRC</strong> — community without medical contracts.</li>
              <li><strong>vs ADU</strong> — no family next door.</li>
              <li>Each fits different needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try first</h3>
            <p className="text-sm text-muted-foreground">Visit communities. Stay overnight if possible. Attend community meeting. See if community feels right. Cohousing requires commitment to consensus + meetings. Not for everyone. For those it fits — best aging experience.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
