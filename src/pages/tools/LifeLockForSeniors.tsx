import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function LifeLockForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="LifeLock Identity Protection for Seniors | TekSure" description="LifeLock for senior identity theft protection. Worth the cost? Alternatives explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">LifeLock</h1>
          <p className="text-lg text-muted-foreground">Identity protection. Worth it?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What LifeLock does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Monitors your identity online.</li>
              <li>Alerts to suspicious activity.</li>
              <li>$1M insurance coverage.</li>
              <li>Restoration help if stolen.</li>
              <li>$120-$330/year tiers.</li>
              <li>Can be useful but...</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives — better</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free credit freeze at 3 bureaus.</li>
              <li>Free Credit Karma alerts.</li>
              <li>Bank fraud alerts free.</li>
              <li>Free annual reports at AnnualCreditReport.com.</li>
              <li>Most LifeLock features free elsewhere.</li>
              <li>Skip $120/year often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Credit freeze — best move</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free at all 3 credit bureaus.</li>
              <li>Equifax, Experian, TransUnion.</li>
              <li>Prevents new credit opening.</li>
              <li>Most effective single step.</li>
              <li>Unfreeze temporarily for new credit.</li>
              <li>Stronger than LifeLock alone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Aura alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$120/year — similar to LifeLock.</li>
              <li>Identity + credit + device.</li>
              <li>Better customer service reviews.</li>
              <li>VPN included.</li>
              <li>Antivirus included.</li>
              <li>Better all-in-one bundle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When LifeLock-type services help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Already victim of identity theft.</li>
              <li>Restoration support useful.</li>
              <li>Don&apos;t want to monitor own credit.</li>
              <li>Insurance peace of mind.</li>
              <li>Less tech-savvy.</li>
              <li>Worth premium for these users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY identity protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Freeze credit at 3 bureaus (free).</li>
              <li>Sign up Credit Karma (free).</li>
              <li>Enable bank/card alerts (free).</li>
              <li>Strong unique passwords + 2FA.</li>
              <li>Annual credit report check (free).</li>
              <li>Saves $120-$330/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free credit freeze first</h3>
            <p className="text-sm text-muted-foreground">Before paying $120-$330/year for LifeLock, freeze your credit at all 3 bureaus FREE. This single step prevents most identity theft. Combined with bank alerts + Credit Karma monitoring, you have most LifeLock features free. LifeLock&apos;s value is the restoration insurance + service if you do get hit. Tech-comfortable seniors save money DIY.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
