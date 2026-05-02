import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function SeniorAdvanceDirectives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Advance Directives | TekSure" description="Living wills, POLST, healthcare proxy for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Advance Directives</h1>
          <p className="text-lg text-muted-foreground">Senior medical wishes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Five Wishes $5</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plain language living will.</li><li>Senior write wishes.</li><li>Legal 42 states.</li><li>FiveWishes.org.</li><li>Family knows.</li><li>Worth $5.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Healthcare proxy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Designate trusted person.</li><li>Senior decisions if can&apos;t.</li><li>State-specific form.</li><li>Free.</li><li>Critical document.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">POLST</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Physician Orders Life-Sustaining Treatment.</li><li>Senior end-of-life specific.</li><li>Doctor signs.</li><li>EMTs follow.</li><li>Worth if frail.</li><li>State varies.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DNR if want</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Do Not Resuscitate.</li><li>Senior thoughtful decision.</li><li>Doctor signs.</li><li>Wear bracelet.</li><li>EMTs need to see.</li><li>Personal choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Where to keep</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Refrigerator door magnet.</li><li>Wallet card.</li><li>Family copies.</li><li>Doctor file.</li><li>MyChart upload.</li><li>Worth multiple copies.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Update every 5 years</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wishes change.</li><li>Senior reflect periodically.</li><li>Health changes.</li><li>Family discuss.</li><li>Worth updating.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$5 Five Wishes = senior medical wishes documented</h3><p className="text-sm text-muted-foreground">Senior $5 Five Wishes living will + free healthcare proxy + POLST if frail + DNR if wanted = comprehensive medical wishes documented. Refrigerator + wallet + family copies. EMTs follow. Family relieved decisions. Update every 5 years. Most loving senior estate prep.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
