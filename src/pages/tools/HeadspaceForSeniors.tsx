import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function HeadspaceForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Headspace for Senior Meditation | TekSure" description="Headspace meditation app for seniors. Stress + sleep + focus." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Headspace</h1>
          <p className="text-lg text-muted-foreground">Meditation made simple.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Guided meditations.</li><li>Sleep stories.</li><li>Stress relief.</li><li>Focus exercises.</li><li>$70/year.</li><li>14-day free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>10-min daily routine.</li><li>Bedtime sleep stories.</li><li>Anxiety relief.</li><li>Beginner-friendly.</li><li>Andy&apos;s soothing voice.</li><li>Not religious.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calm vs Headspace</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Calm — more nature/celebrities.</li><li>Headspace — clinical, structured.</li><li>Both ~$70/year.</li><li>Try free trials of both.</li><li>Pick what calls.</li><li>Senior preference.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Insight Timer — free.</li><li>10,000+ free meditations.</li><li>YouTube — Yoga With Kassandra.</li><li>UCLA Mindful App — free.</li><li>Senior frugal option.</li><li>Try before paying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Health benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lower blood pressure.</li><li>Better sleep.</li><li>Less anxiety.</li><li>Pain management.</li><li>Improved focus.</li><li>Studies-proven.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Getting started</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>10 minutes morning.</li><li>Or before bed.</li><li>Same time daily.</li><li>Comfortable chair.</li><li>Headphones nice.</li><li>Don&apos;t skip days.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">10 min daily = senior life upgrade</h3><p className="text-sm text-muted-foreground">10 minutes meditation daily measurably improves senior blood pressure, sleep, anxiety. Free Insight Timer if budget tight. $70/yr Headspace if you want premium guide. Studies show effective at any age. Sleep stories help senior insomnia. Try 30 days.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
