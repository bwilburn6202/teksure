import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function TSAPreCheckGlobalEntryGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TSA PreCheck + Global Entry for Seniors | TekSure" description="Skip airport security lines. TSA PreCheck and Global Entry guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TSA PreCheck + Global Entry</h1>
          <p className="text-lg text-muted-foreground">Skip airport lines.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TSA PreCheck</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$78 for 5 years.</li><li>Domestic flights.</li><li>No removing shoes.</li><li>No removing belts.</li><li>Laptop stays in bag.</li><li>Shorter lines always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Global Entry</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$120 for 5 years.</li><li>Includes TSA PreCheck.</li><li>For international flights.</li><li>Skip customs lines.</li><li>Better deal if you fly abroad.</li><li>5 minutes vs 1 hour.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to apply</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>TTP.dhs.gov.</li><li>Pay fee online.</li><li>Schedule interview.</li><li>Bring passport + driver license.</li><li>Fingerprints + photo.</li><li>Approved 2-4 weeks.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free with credit cards</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chase Sapphire Reserve.</li><li>Amex Platinum.</li><li>Capital One Venture X.</li><li>Many cards reimburse fee.</li><li>Annual fee but credits stack.</li><li>Worth checking your cards.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior worth it?</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Fly 2+ times a year — yes.</li><li>Avoid bending to tie shoes.</li><li>Skip long standing in line.</li><li>Reduce travel stress.</li><li>5-year value strong.</li><li>Especially worth Global Entry.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior-specific TSA</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>75+ get easier screening anyway.</li><li>Keep shoes/light jacket on.</li><li>Wheelchair accessible lanes.</li><li>Medical device declarations.</li><li>Ask for help — TSA happy to.</li><li>Don&apos;t suffer in silence.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$120 / 5 years = best travel investment</h3><p className="text-sm text-muted-foreground">If you fly even once a year, Global Entry pays for itself. Skip 1-hour customs lines after international flights. Skip TSA shoe removal. For seniors with mobility issues, transformative. Apply now if you have any travel planned.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
