import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SocialSecurityClaimingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Security Claiming Calculator | TekSure" description="When to claim Social Security. Free calculators for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SS Claiming Apps</h1>
          <p className="text-lg text-muted-foreground">When to start claiming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SSA.gov free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>My Social Security account.</li><li>See estimated benefits.</li><li>Calculator built-in.</li><li>Free.</li><li>Senior official source.</li><li>Always start here.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Maximize My Social Security</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$40 software.</li><li>Couples scenarios.</li><li>Spousal + survivor.</li><li>Optimize claiming.</li><li>Senior detailed.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SS claim ages</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>62 — earliest, 25-30% reduced.</li><li>67 — full age.</li><li>70 — max benefit.</li><li>Each year delayed = 8% more.</li><li>Senior big decision.</li><li>Plan carefully.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to delay</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Healthy + family longevity.</li><li>Higher earner spouse.</li><li>Have other income.</li><li>Live past 80 = win.</li><li>Senior longevity bet.</li><li>Math favors waiting.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to claim early</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Health issues.</li><li>Need income now.</li><li>Spouse dependent on it.</li><li>Senior immediate need.</li><li>Discuss spouse.</li><li>Each situation unique.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free SHIP help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-877-839-2675.</li><li>State counselors.</li><li>Free Medicare + SS guidance.</li><li>Senior unbiased.</li><li>Trained volunteers.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">SSA.gov + SHIP = free senior planning</h3><p className="text-sm text-muted-foreground">Free SSA.gov My Social Security calculator + free SHIP counselor (1-877-839-2675) = best senior claiming planning. $40 Maximize software for couples optimization. Don&apos;t pay financial advisor for SS claiming alone — these free tools sufficient.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
