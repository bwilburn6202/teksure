import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorBalanceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Balance Apps for Seniors — TekSure" description="Improve balance to prevent falls — Tai Chi, BalanceBoss, Bold." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Balance Apps</h1>
          <p className="text-lg text-muted-foreground">Better balance = fewer falls.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bold</h2><p>$15/month. Designed for over 60. Strength + balance daily 15 min.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube Tai Chi</h2><p>FREE. Search &ldquo;Tai Chi for seniors.&rdquo; Slow. Effective.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Otago Exercise</h2><p>FREE. CDC-recommended. 30% reduction in fall risk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers Stability</h2><p>FREE with most Medicare Advantage. Specific balance class.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Simple at home</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Stand on one leg (with chair backup)</li><li>Heel-to-toe walking</li><li>Sit-to-stand 10 times</li><li>Tightrope walk along line</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">3x weekly</h2><p>15 minutes. 3 times a week. Real measurable reduction in fall risk.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Practice near sturdy chair. Use it for support if needed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
