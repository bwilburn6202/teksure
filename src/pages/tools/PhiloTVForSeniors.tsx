import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv2 } from 'lucide-react';

export default function PhiloTVForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Philo TV for Seniors | TekSure" description="$28 streaming. Philo TV guide for senior budget cord-cutters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Philo TV</h1>
          <p className="text-lg text-muted-foreground">$28 cheap streaming.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$28/month.</li><li>70+ channels.</li><li>No sports/news.</li><li>HGTV, Food, Hallmark.</li><li>Discovery, History.</li><li>Senior comfort.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HGTV, Food Network.</li><li>Hallmark, AMC, Lifetime.</li><li>Discovery, Animal Planet.</li><li>Game Show Network.</li><li>MTV, BET.</li><li>Senior favorite mix.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DVR</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Unlimited DVR.</li><li>Save 1 year.</li><li>No extra cost.</li><li>Record everything.</li><li>Senior catch-up.</li><li>Big plus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">No locals/news/sports</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>By design — keeps cheap.</li><li>Pair with antenna.</li><li>$30 antenna for ABC/NBC/CBS/Fox.</li><li>Senior combo.</li><li>Total $28 + $30 once.</li><li>Best budget deal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cheapest cable replacement.</li><li>HGTV + Hallmark senior staples.</li><li>Unlimited DVR.</li><li>3 streams at once.</li><li>10 profiles.</li><li>Family share.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Philo.com.</li><li>Free 7-day trial.</li><li>App on Roku, Apple TV, Fire.</li><li>Cancel anytime.</li><li>Senior easy.</li><li>Try first.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$28 + antenna = best senior budget combo</h3><p className="text-sm text-muted-foreground">Philo at $28 + $30 antenna = best budget senior streaming. HGTV, Hallmark, Discovery, Food Network. Plus local broadcast via antenna. Save $150+/month over cable. Many seniors find perfect mix here. Try 7-day free trial.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
