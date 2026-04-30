import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function CrackedScreenRepairForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cracked Screen Repair for Seniors | TekSure" description="Fix cracked iPhone or Android screen. Senior repair options + costs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cracked Screen Repair</h1>
          <p className="text-lg text-muted-foreground">Options + costs.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Store</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Genuine repair.</li><li>$129-$329 depending on phone.</li><li>1-2 hour wait.</li><li>Schedule appointment.</li><li>Senior trustworthy.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AppleCare+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200/2yr or monthly.</li><li>Screen repair $29.</li><li>Worth it for clumsy.</li><li>Buy at phone purchase.</li><li>Senior insurance.</li><li>Recommended.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Third-party shops</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>uBreakiFix, CPR.</li><li>$80-$200.</li><li>Same-day usually.</li><li>Aftermarket parts.</li><li>Cheaper than Apple.</li><li>Senior option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Carrier insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Verizon, ATT, T-Mobile.</li><li>$15/mo per line.</li><li>$29-$249 deductible.</li><li>Adds up over years.</li><li>Senior do math.</li><li>AppleCare often better.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Use cracked phone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cracks not always urgent.</li><li>Tape over until repair.</li><li>Senior caution glass shards.</li><li>Backup before repair.</li><li>iCloud auto.</li><li>Don&apos;t lose data.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Prevention</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tempered glass screen protector $15.</li><li>Senior shockproof case.</li><li>Don&apos;t put in back pocket.</li><li>Don&apos;t leave on car roof.</li><li>Pop socket grip.</li><li>Senior smart habits.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Buy AppleCare+ at purchase</h3><p className="text-sm text-muted-foreground">If senior buys new iPhone, $200 AppleCare+ covers 2 years of accidents. Screen repair $29 instead of $329. Battery replace included. Worth it for most seniors. Or skip + buy tempered glass + case for $30. Don&apos;t use uninsured + caseless.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
