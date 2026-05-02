import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function Hims4SeniorTelehealth() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hims/Hers Telehealth for Seniors | TekSure" description="Online prescriptions for senior common conditions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hims/Hers</h1>
          <p className="text-lg text-muted-foreground">Online prescriptions.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$100/month.</li><li>Hair loss, ED, mental health.</li><li>Online consultation.</li><li>Senior privacy.</li><li>Mailed prescription.</li><li>Convenient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior conditions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>ED treatment.</li><li>Hair loss.</li><li>Skincare.</li><li>Mental health.</li><li>Senior discreet.</li><li>Free consult often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Compare prices</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Generic Sildenafil $1/pill.</li><li>Hims $30-$60/month.</li><li>Senior Costco generic cheaper.</li><li>GoodRx coupons.</li><li>Compare.</li><li>Senior frugal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discreet packaging.</li><li>Senior dignity.</li><li>Online consult.</li><li>No waiting room.</li><li>Worth it some.</li><li>Read terms.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Roman alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Men&apos;s health.</li><li>Similar service.</li><li>Senior compare.</li><li>Some insurance accepted.</li><li>$30+/month.</li><li>Try free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Better with PCP</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discuss with primary doctor.</li><li>Insurance covers.</li><li>Senior continuity care.</li><li>Telehealth via doctor.</li><li>Cheaper often.</li><li>Worth asking.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">PCP first then Hims if want</h3><p className="text-sm text-muted-foreground">Senior ED/hair loss/mental health — discuss with primary doctor first. Insurance often covers + cheaper. Hims $30-$60/mo for privacy + convenience. Or generic Sildenafil $1/pill via GoodRx Costco. Compare options. Senior dignity multiple paths.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
