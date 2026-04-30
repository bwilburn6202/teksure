import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv2 } from 'lucide-react';

export default function AcornTVForSeniorBritishFans() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Acorn TV for Senior British TV Fans | TekSure" description="British mysteries + dramas. Acorn TV senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Acorn TV</h1>
          <p className="text-lg text-muted-foreground">British mysteries + drama.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$7/month.</li><li>British TV library.</li><li>Mysteries + dramas.</li><li>Senior favorite niche.</li><li>Free trial.</li><li>Affordable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doc Martin.</li><li>Vera.</li><li>Foyle&apos;s War.</li><li>Midsomer Murders.</li><li>Senior cozy mystery.</li><li>Hours of content.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs BritBox</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Acorn — independent.</li><li>BritBox — BBC + ITV.</li><li>Both $7/month.</li><li>Different libraries.</li><li>Senior compare.</li><li>Try both free trials.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior love</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Slower pacing.</li><li>Less violence.</li><li>Smart writing.</li><li>Cozy mysteries.</li><li>Senior preferences.</li><li>Calm escapism.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch anywhere</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple TV, Roku, Fire.</li><li>Phone + iPad.</li><li>Web browser.</li><li>Senior cross-platform.</li><li>Closed captions standard.</li><li>British accent help.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free trial</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>7-day free.</li><li>Try shows.</li><li>Cancel anytime.</li><li>Senior risk-free.</li><li>Annual saves 20%.</li><li>Worth signing up.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$7 Acorn = senior British heaven</h3><p className="text-sm text-muted-foreground">Acorn TV $7/month = senior British mystery + drama heaven. Doc Martin, Vera, Foyle&apos;s War. Slower pacing, less violence, smart writing. Compare BritBox. 7-day free trial. Many senior couples watch nightly. Worth subscription.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
