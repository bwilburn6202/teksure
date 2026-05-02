import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

export default function SeniorPrivacyChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Privacy Checklist | TekSure" description="One-time setup, lifetime senior privacy + protection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Privacy Checklist</h1>
          <p className="text-lg text-muted-foreground">Senior all-in-one.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free essentials</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Credit freeze 3 bureaus.</li><li>Free Credit Karma alerts.</li><li>Carrier PIN required.</li><li>Robocall blocking on.</li><li>2FA all important sites.</li><li>Strong unique passwords.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Worth paying</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Password manager $36/yr.</li><li>iCloud 200GB $36/yr backup.</li><li>DeleteMe $130/yr.</li><li>Senior $202/yr complete.</li><li>Best protection.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family safe word AI scams.</li><li>Apple ID Recovery Contact.</li><li>Estate planning current.</li><li>POA + living will.</li><li>Senior critical.</li><li>30-min discussion.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily habits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t click email links.</li><li>Verify caller direct call back.</li><li>Senior healthy paranoia.</li><li>Trust gut.</li><li>Hang up.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual review</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Subscriptions audit.</li><li>Privacy settings social.</li><li>Senior 30-min annually.</li><li>Software updates auto.</li><li>Estate update.</li><li>Worth time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Resources</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AARP fraud hotline 1-877-908-3360.</li><li>IdentityTheft.gov.</li><li>FTC.gov.</li><li>Senior trusted help.</li><li>Free.</li><li>Don&apos;t face alone.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200/yr + 30-min annual = senior bulletproof privacy</h3><p className="text-sm text-muted-foreground">Senior $200/yr (password mgr + iCloud + DeleteMe) + free essentials (credit freeze, Credit Karma, robocall block, 2FA) + family safe word + 30-min annual review = bulletproof privacy. AARP hotline if breach. Most senior protection setup. Worth investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
