import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

export default function CreditFreezeForSeniorsDeep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Freeze for Seniors Deep | TekSure" description="Step-by-step credit freeze all 3 bureaus for senior protection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Freeze Deep</h1>
          <p className="text-lg text-muted-foreground">Senior fraud protection.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why critical</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior fraud target #1.</li><li>Identity theft devastating.</li><li>Free since 2018.</li><li>Best protection.</li><li>Don&apos;t skip.</li><li>Most underused tool.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">All 3 bureaus</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Equifax.com.</li><li>Experian.com.</li><li>TransUnion.com.</li><li>Senior 30 min total.</li><li>Free freeze + thaw.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Steps each</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Visit site.</li><li>Create account.</li><li>Verify identity.</li><li>Click Freeze.</li><li>Save PIN/password.</li><li>10 min each.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Save PINs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print + store safe.</li><li>Or password manager.</li><li>Senior critical save.</li><li>Need to thaw later.</li><li>Recovery hassle if lost.</li><li>Don&apos;t lose.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Thaw temporary</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apply for credit?</li><li>Login to bureau.</li><li>Lift 1 hour-1 month.</li><li>Auto-refreezes.</li><li>Free.</li><li>Senior plans ahead.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Plus monitor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Credit Karma alerts.</li><li>AnnualCreditReport.com weekly free.</li><li>Senior catch fraud early.</li><li>Free combo.</li><li>Best practice.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">30 min freeze + Credit Karma = senior fraud protection</h3><p className="text-sm text-muted-foreground">Senior 30 min credit freeze 3 bureaus + free Credit Karma alerts + AnnualCreditReport weekly = best fraud protection. Free since 2018. Save PINs critical. Thaw temporarily for credit applications. Most underused senior protection tool. Don&apos;t skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
