import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cat } from 'lucide-react';

export default function CatBehaviorAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cat Behavior Apps for Seniors | TekSure" description="Cat care + behavior apps for senior cat owners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cat Care Apps</h1>
          <p className="text-lg text-muted-foreground">Senior cat owners.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">MeowTalk</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5/month.</li><li>AI cat meow translator.</li><li>Senior fun + maybe insightful.</li><li>Free trial.</li><li>Hit or miss.</li><li>Try free first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pretty Litter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$25-$30/month.</li><li>Color changes detect health.</li><li>Senior cat health monitor.</li><li>Delivery.</li><li>Worth health peace.</li><li>Older cats benefit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Litter Robot</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$700.</li><li>Self-cleaning.</li><li>Senior arthritis fix.</li><li>App tracks usage.</li><li>Health monitoring.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-feeder</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130 PetSafe Smart.</li><li>Senior schedule meals.</li><li>Diabetic cats critical.</li><li>Travel safe 3 days.</li><li>App control.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vet telehealth</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chewy Connect free w/ Autoship.</li><li>Vetster $60/visit.</li><li>Senior cat triage.</li><li>Save vet trips.</li><li>Quick questions.</li><li>Worth knowing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior cat care</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Annual vet visits.</li><li>Dental cleanings.</li><li>Watch weight.</li><li>Senior cat 7+.</li><li>Bloodwork annually.</li><li>Catch issues early.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Litter Robot + auto-feeder = senior arthritis</h3><p className="text-sm text-muted-foreground">Senior arthritis cat owner: $700 Litter Robot + $130 auto-feeder = transformative. No more bending or scooping. App monitors health. Plus annual vet + Chewy Connect telehealth free. Pretty Litter $25/mo color-detects illness. Most senior cat care upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
