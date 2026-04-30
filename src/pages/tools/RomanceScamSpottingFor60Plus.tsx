import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function RomanceScamSpottingFor60Plus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Romance Scam Defense for Senior Daters | TekSure" description="Spot romance scams targeting 60+. Common tactics, warning signs, and how to protect yourself." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Romance Scam Defense</h1>
          <p className="text-lg text-muted-foreground">Spot the patterns. Save your heart + money.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors targeted</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Often have savings + retirement.</li>
              <li>May be lonely after spouse loss.</li>
              <li>Less familiar with online tactics.</li>
              <li>Trust people more.</li>
              <li>$1.3 billion lost yearly (FTC).</li>
              <li>Average loss: $9,000+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Falls in love quickly (1–2 weeks).</li>
              <li>Wants to switch off-app immediately.</li>
              <li>Refuses video chat — &quot;camera broken.&quot;</li>
              <li>Always traveling, military, doctor abroad.</li>
              <li>Refuses to meet in person.</li>
              <li>Photos look professional/model-like.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The money request</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eventually asks for money.</li>
              <li>&quot;Stuck overseas, need ticket home.&quot;</li>
              <li>&quot;Medical emergency.&quot;</li>
              <li>&quot;Investment opportunity for our future.&quot;</li>
              <li>Cryptocurrency very common now.</li>
              <li>NEVER send money — it&apos;s a scam.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify identity</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reverse image search their photos.</li>
              <li>Use Google Images, TinEye.</li>
              <li>Stolen photos appear elsewhere online.</li>
              <li>Insist on video call early.</li>
              <li>Real people will video chat.</li>
              <li>Scammers will refuse or stall.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you suspect scam</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stop all communication immediately.</li>
              <li>Don&apos;t confront — they&apos;ll manipulate.</li>
              <li>Block + report on dating site.</li>
              <li>Report to FTC.gov.</li>
              <li>Tell trusted family member.</li>
              <li>Don&apos;t feel ashamed — millions targeted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Talk to family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adult children should ask about online dates.</li>
              <li>Senior should share suspicions with family.</li>
              <li>Bank may flag wire transfers to scammers.</li>
              <li>Friends/family can spot what you can&apos;t.</li>
              <li>No shame in being nearly scammed.</li>
              <li>Trust those who love you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Money = scam, every time</h3>
            <p className="text-sm text-muted-foreground">The simplest rule: anyone you&apos;ve never met in person who asks for money is a scammer. No exceptions. Real partners don&apos;t need money from someone they haven&apos;t met. Block them and report. Tell family even if embarrassing. The earlier you stop, the less you lose. Many seniors lose retirement savings to these schemes — don&apos;t become a statistic.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
