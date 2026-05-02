import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function CalmRedSeniorMental() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calm App for Senior Mental Health | TekSure" description="Calm meditation + sleep app for senior wellness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calm App</h1>
          <p className="text-lg text-muted-foreground">Senior wellness.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$70/year.</li><li>Sleep stories.</li><li>Meditation.</li><li>Senior anxiety relief.</li><li>Music + nature.</li><li>7-day trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sleep stories</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Matthew McConaughey.</li><li>Stephen Fry.</li><li>Senior soothing voices.</li><li>Help insomnia.</li><li>Best feature.</li><li>Worth it alone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Headspace</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Calm — sleep focus.</li><li>Headspace — guided meditation.</li><li>Both $70/year.</li><li>Senior pick.</li><li>Try both trials.</li><li>Compare.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free Insight Timer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>10,000+ free meditations.</li><li>Senior frugal option.</li><li>Try first.</li><li>$60/yr Premium optional.</li><li>Often sufficient.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Health benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lower BP.</li><li>Better sleep.</li><li>Less anxiety.</li><li>Senior daily 10 min.</li><li>Studies-proven.</li><li>Worth investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Health insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some Medicare Advantage covers.</li><li>Aetna, BCBS reimburse Calm.</li><li>Senior check insurance.</li><li>Free if covered.</li><li>Worth asking.</li><li>Don&apos;t pay if covered.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$70 Calm = senior sleep relief</h3><p className="text-sm text-muted-foreground">$70 Calm = senior sleep stories + meditation. Matthew McConaughey + Stephen Fry voices. Studies show better sleep, lower BP. Some Medicare Advantage reimburses Calm — check insurance free. Or free Insight Timer abundant.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
