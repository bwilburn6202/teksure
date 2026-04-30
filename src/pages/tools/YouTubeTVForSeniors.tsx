import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function YouTubeTVForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube TV for Seniors | TekSure" description="Cable replacement streaming. YouTube TV guide for senior cord-cutters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouTube TV</h1>
          <p className="text-lg text-muted-foreground">Cable replacement.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cable replacement.</li><li>$83/month.</li><li>100+ channels.</li><li>ABC, NBC, CBS, Fox.</li><li>Sports + news.</li><li>Cancel anytime.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free unlimited DVR.</li><li>Watch on phone, TV, computer.</li><li>6 family accounts.</li><li>No 2-year contract.</li><li>Cheaper than cable.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs cable</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cable $150-$250/month.</li><li>YouTube TV $83.</li><li>Save $1,000+/year.</li><li>Same channels.</li><li>No equipment fees.</li><li>Cord-cut savings.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>tv.youtube.com.</li><li>Free 1-week trial.</li><li>Sign in Google.</li><li>App on Apple TV/Roku/Fire.</li><li>Browse channels.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>By zip code.</li><li>Local news.</li><li>Local sports.</li><li>Most cities covered.</li><li>Senior local feel.</li><li>Better than antenna often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Try free week.</li><li>Cancel cable first.</li><li>Use big TV with Apple TV/Roku.</li><li>Voice search remote.</li><li>Auto-skip commercials in DVR.</li><li>Cancel if not using.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Cut cable, save $1,000+/year</h3><p className="text-sm text-muted-foreground">Many seniors pay $200/month cable + barely watch. YouTube TV at $83 = same channels, free DVR, no contract. Save $1,400/year. Try free week first. Cancel cable. Add Netflix/Apple TV+ separately as wanted. Senior cord-cutting most common path.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
