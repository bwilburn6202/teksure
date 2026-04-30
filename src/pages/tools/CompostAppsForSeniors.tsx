import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Recycle } from 'lucide-react';

export default function CompostAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Composting Apps for Seniors | TekSure" description="Senior-friendly composting apps + tips. Reduce waste." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Recycle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Composting Apps</h1>
          <p className="text-lg text-muted-foreground">Senior eco-living.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lomi countertop</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$500.</li><li>Electric kitchen composter.</li><li>20 hours = soil.</li><li>Senior arthritis-friendly.</li><li>No bin in yard.</li><li>Worth high price.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mill</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$33/month.</li><li>Drys + grinds food waste.</li><li>Senior less smell.</li><li>Mail pickup.</li><li>Becomes chicken feed.</li><li>Innovative.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free outdoor bin</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50-$150 tumbler.</li><li>Senior easy turn.</li><li>Browns + greens balance.</li><li>Free soil result.</li><li>Garden ready.</li><li>Reduce trash.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apps + guides</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>EPA composting app.</li><li>State extension guides.</li><li>Free.</li><li>What to compost.</li><li>Senior reference.</li><li>Troubleshoot.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local pickup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many cities have programs.</li><li>Free or cheap.</li><li>Senior no work.</li><li>Curbside food scrap.</li><li>Check local.</li><li>Easy option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Less garbage.</li><li>Free garden soil.</li><li>Eco-virtuous.</li><li>Senior simple.</li><li>Reduce odors compared bin.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 tumbler + city pickup = senior eco</h3><p className="text-sm text-muted-foreground">Senior $100 outdoor tumbler composter + free city pickup if available = senior easy composting. Skip $500 Lomi unless arthritis prevents tumbler. Less garbage, free garden soil. EPA app guides what compostable. Easy senior eco-living.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
