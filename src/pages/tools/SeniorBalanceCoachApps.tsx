import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function SeniorBalanceCoachApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Balance Coach Apps | TekSure" description="Daily balance training apps. Senior fall prevention." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Balance Coach Apps</h1>
          <p className="text-lg text-muted-foreground">Senior fall prevention.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SteadyMD</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free senior balance app.</li><li>Daily 5-min routines.</li><li>Track over time.</li><li>Senior life-saver.</li><li>Falls #1 senior injury.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why critical</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1 in 4 seniors fall yearly.</li><li>Hospitalization #1 cause.</li><li>Independence lost.</li><li>Senior balance trainable.</li><li>10 min daily prevents.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch fall</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-detect.</li><li>SOS calls.</li><li>Senior peace.</li><li>$249-$400.</li><li>Worth it solo seniors.</li><li>Family alerted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tai Chi free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube tai chi for arthritis.</li><li>Senior balance + flexibility.</li><li>Studies prove fall prevention.</li><li>Free.</li><li>Daily practice.</li><li>Best activity.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PT balance check</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Yearly PT visit.</li><li>Medicare covers.</li><li>Senior assessment.</li><li>Custom routine.</li><li>Catch decline early.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Home fall-proof</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Remove rugs.</li><li>Grab bars bathroom.</li><li>Night lights.</li><li>Senior safer home.</li><li>$50-$200 setup.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">10-min daily balance = senior fall prevention</h3><p className="text-sm text-muted-foreground">Senior falls #1 injury. 10 min daily balance training prevents. Free YouTube tai chi for arthritis. Apple Watch fall detect $249. Yearly PT balance check Medicare covers. Plus home fall-proof: remove rugs + grab bars. Most senior life-extending habit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
