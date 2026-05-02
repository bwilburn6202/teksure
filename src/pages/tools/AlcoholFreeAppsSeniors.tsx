import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';

export default function AlcoholFreeAppsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alcohol Reduction Apps for Seniors | TekSure" description="I am Sober, Reframe apps for senior alcohol cutting back." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alcohol Reduction</h1>
          <p className="text-lg text-muted-foreground">Senior cutting back.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reframe</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/month.</li><li>Neuroscience-based.</li><li>Senior gradual reduction.</li><li>Daily lessons.</li><li>Tracking.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">I Am Sober</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + $50/year Premium.</li><li>Senior streak tracker.</li><li>Community.</li><li>Daily check-ins.</li><li>Free version solid.</li><li>Trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior considerations</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Alcohol affects more with age.</li><li>Medications interact.</li><li>Falls risk.</li><li>Senior cut back smart.</li><li>Doctor consult heavy drinkers.</li><li>Worth re-evaluating.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AA online</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free meetings.</li><li>Zoom abundant.</li><li>Senior community.</li><li>Anonymous.</li><li>aa.org find.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mocktail explore</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Athletic Brewing NA beer.</li><li>Lyre&apos;s NA spirits.</li><li>Senior alternatives.</li><li>Tasty.</li><li>Social-friendly.</li><li>Try.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Health benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Better sleep.</li><li>More energy.</li><li>Senior weight loss.</li><li>Sharper mind.</li><li>Lower BP.</li><li>30 days transform.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free I Am Sober + AA online = senior support</h3><p className="text-sm text-muted-foreground">Senior reducing alcohol — free I Am Sober app + free AA online meetings = community + tracking. Or $10/mo Reframe neuroscience-based. Athletic Brewing NA beer + Lyre&apos;s NA spirits = social-friendly alternatives. Health benefits in 30 days. Doctor consult heavy drinkers.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
