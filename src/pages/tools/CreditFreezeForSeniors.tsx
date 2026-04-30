import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function CreditFreezeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Freeze for Seniors | TekSure" description="Block fraudsters. Free credit freeze guide for senior identity protection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Freeze</h1>
          <p className="text-lg text-muted-foreground">Free fraud blocker.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Locks your credit report.</li><li>No new accounts opened in name.</li><li>Free since 2018.</li><li>From all 3 bureaus.</li><li>Best senior fraud protection.</li><li>Unfreeze when needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Three bureaus</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Equifax.com.</li><li>Experian.com.</li><li>TransUnion.com.</li><li>Freeze each separately.</li><li>30 minutes total.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup each</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Visit each site.</li><li>Create account.</li><li>Verify identity.</li><li>Click Freeze.</li><li>Save PIN/password.</li><li>Done.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Unfreeze (temporary)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apply for credit?</li><li>Login to bureau.</li><li>Lift freeze 1 hour-1 month.</li><li>Then auto-refreeze.</li><li>Free.</li><li>Senior plans ahead.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Equifax breach exposed many.</li><li>Senior IDs targeted.</li><li>Block before fraudster acts.</li><li>Free since 2018.</li><li>Most powerful fraud tool.</li><li>Should be default.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t lose PINs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save in password manager.</li><li>Or print + safe.</li><li>Need to thaw later.</li><li>Don&apos;t lose.</li><li>Senior important.</li><li>Recovery hassle if lost.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">30 min freeze = years of protection</h3><p className="text-sm text-muted-foreground">30 minutes to freeze 3 bureaus = lifetime senior fraud protection. Free since 2018. Block scammers from opening accounts in your name. Thaw temporarily when applying for credit. Best senior identity protection. Don&apos;t skip — set it up today.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
