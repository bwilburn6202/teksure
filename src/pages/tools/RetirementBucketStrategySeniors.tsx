import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function RetirementBucketStrategySeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Bucket Strategy for Seniors | TekSure" description="Three-bucket retirement income strategy explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bucket Strategy</h1>
          <p className="text-lg text-muted-foreground">Senior retirement income.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">3 buckets</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bucket 1 — 1-2 yrs cash.</li><li>Bucket 2 — 3-7 yrs bonds.</li><li>Bucket 3 — 8+ yrs stocks.</li><li>Senior weather markets.</li><li>Refill from 3 → 2 → 1.</li><li>Strategy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sequence of returns risk.</li><li>Bad early years devastate.</li><li>Senior bucket protects.</li><li>Sleep well at night.</li><li>Don&apos;t panic-sell.</li><li>Worth structure.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cash bucket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50k-$100k typical.</li><li>High-yield savings.</li><li>1-2 years expenses.</li><li>Senior emergency.</li><li>Marcus, Ally banks.</li><li>4-5% APY.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bond bucket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bond ladder.</li><li>Treasury, CDs.</li><li>Senior steady income.</li><li>3-7 years.</li><li>Refills cash.</li><li>Predictable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stock bucket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Index funds — VTI, VTSAX.</li><li>Senior 8+ years horizon.</li><li>Long-term growth.</li><li>Refills bonds.</li><li>Don&apos;t touch market drops.</li><li>Patience pays.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual rebalance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Refill cash from bonds.</li><li>Refill bonds from stocks (good years).</li><li>Senior set + forget.</li><li>Schwab, Vanguard help.</li><li>Or fee-only advisor.</li><li>Worth structure.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">3-bucket = senior sleep well</h3><p className="text-sm text-muted-foreground">Senior 3-bucket strategy: cash 1-2 yrs + bonds 3-7 yrs + stocks 8+ yrs. Protects from sequence of returns risk. Don&apos;t panic-sell market drops — cash bucket sustains. Annual rebalance refills downstream. Most senior retirement income strategy. Sleep well.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
