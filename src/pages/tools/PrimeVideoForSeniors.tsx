import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function PrimeVideoForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Prime Video for Seniors | TekSure" description="Prime Video included with Prime. Senior streaming guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prime Video</h1>
          <p className="text-lg text-muted-foreground">Free with Prime.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What you get</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with Prime $139/yr.</li><li>Originals + classics.</li><li>Reacher, Jack Ryan.</li><li>Senior huge library.</li><li>Plus rentals + buys.</li><li>$3/month for ad-free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior 50% off</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Prime Access for low-income.</li><li>$7/month.</li><li>EBT, Medicaid eligible.</li><li>Senior discount.</li><li>Apply at amazon.com/prime/access.</li><li>Includes Prime Video.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FreeVee free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amazon&apos;s free tier.</li><li>Built into Prime Video.</li><li>Free with ads.</li><li>Big library.</li><li>Senior frugal.</li><li>No subscription needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add Max, Paramount+ inside Prime.</li><li>Bill in one place.</li><li>Cancel easy.</li><li>Senior simplify.</li><li>Same prices.</li><li>Convenience.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch anywhere</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Smart TVs.</li><li>Fire TV stick $30.</li><li>iPhone/iPad.</li><li>Computer.</li><li>Senior any device.</li><li>Cross-platform.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reacher.</li><li>The Boys.</li><li>Marvelous Mrs Maisel.</li><li>Bosch.</li><li>Senior wide variety.</li><li>Plus older shows.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Prime Access $7/mo = senior savings</h3><p className="text-sm text-muted-foreground">If senior on EBT/Medicaid, Prime Access = $7/month for full Prime including Video. Otherwise $139/year. Plus FreeVee free with ads. Many seniors already have Prime — Prime Video is &quot;free.&quot; Best value if Prime member.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
