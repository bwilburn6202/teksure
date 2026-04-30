import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function EyeCareAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Eye Care Apps for Seniors | TekSure" description="Eye exercises + screening apps. Senior eye health." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Eye Care Apps</h1>
          <p className="text-lg text-muted-foreground">Senior eye health.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eye Care 20/20/20</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>20-20-20 rule.</li><li>Every 20 min, look 20 ft, 20 sec.</li><li>App reminders.</li><li>Senior screen strain.</li><li>Free.</li><li>Helpful.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Visual acuity test</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free apps measure.</li><li>Eye Test by Pintia.</li><li>Senior between exams.</li><li>Screening only.</li><li>Real exam annual.</li><li>Track changes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Macular degeneration</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amsler grid free.</li><li>Daily check.</li><li>Senior catches early.</li><li>Lines wavy = call eye doctor.</li><li>Important if family history.</li><li>Free apps available.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Glasses online</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Zenni $20-$50.</li><li>EyeBuyDirect.</li><li>Save 50%+ vs LensCrafters.</li><li>Senior need prescription.</li><li>Try at home.</li><li>Worth comparing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Costco optical</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cheap eye exams.</li><li>$70.</li><li>Quality glasses cheap.</li><li>Senior member benefit.</li><li>Better than mall stores.</li><li>Worth trip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual exam</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Critical 60+.</li><li>Glaucoma + cataracts.</li><li>Macular degeneration.</li><li>Medicare partial coverage.</li><li>Senior never skip.</li><li>Catches early.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$70 Costco eye exam = senior must</h3><p className="text-sm text-muted-foreground">$70 Costco eye exam annually = senior glaucoma + cataracts + macular degeneration screening. Don&apos;t skip. Plus Zenni $20-$50 glasses online once have prescription. Free Amsler grid app daily macular check. Catch issues early.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
