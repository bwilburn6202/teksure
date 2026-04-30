import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function PlumberHandymanAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plumber + Handyman Apps for Seniors | TekSure" description="Find trusted home repair. Senior handyman + plumber apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Handyman Apps</h1>
          <p className="text-lg text-muted-foreground">Trusted home repair.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Angi (Angie&apos;s List)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reviewed pros.</li><li>Free to use.</li><li>Get quotes.</li><li>Senior trusted.</li><li>Background checks.</li><li>Multi-trade.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Thumbtack</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Get bids fast.</li><li>Local pros.</li><li>Reviews.</li><li>Senior compare.</li><li>Free.</li><li>Quote in hour.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Nextdoor neighbors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Neighbor referrals.</li><li>Trusted local.</li><li>Senior community.</li><li>Free.</li><li>Often cheapest.</li><li>Real reviews.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Door-knockers — refuse.</li><li>Pressure tactics — walk away.</li><li>Cash up front — no.</li><li>Senior careful.</li><li>Get 3 quotes.</li><li>Verify license.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">License check</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>State licensing site.</li><li>Verify before hire.</li><li>Insurance proof.</li><li>Bonded ideal.</li><li>Senior protection.</li><li>Free check.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family member present.</li><li>Get written quotes.</li><li>Don&apos;t prepay big.</li><li>Pay when complete.</li><li>Senior protected.</li><li>Document with photos.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Nextdoor + Angi = senior trusted repair</h3><p className="text-sm text-muted-foreground">Senior home repair: Nextdoor neighbor referrals best. Angi/Thumbtack vetted pros backup. Always get 3 quotes. Verify state license. Pay on completion. Have family member present. Most senior repair scams avoidable with these habits.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
