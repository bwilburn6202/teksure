import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorEstateApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Estate Planning Apps for Seniors — TekSure" description="Online wills, trusts, healthcare directives — Trust &amp; Will, FreeWill, Nolo." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Planning Apps</h1>
          <p className="text-lg text-muted-foreground">Wills, trusts, directives — affordably.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FreeWill.com</h2><p>FREE. Make a legal will. Often donates to charity.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trust &amp; Will</h2><p>$159 will. $599 trust. State-specific. Lawyer-reviewed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nolo Quicken WillMaker</h2><p>$99/year. Software. Wills + healthcare + financial powers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to see a lawyer</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Estate over $1 million</li><li>Blended families</li><li>Special needs heirs</li><li>Property in multiple states</li><li>Business ownership</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Healthcare directive</h2><p>Free at AARP.org. Or Five Wishes ($5). Tells doctors your wishes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update every 5 years</h2><p>Or after major life events. Marriage, death, new grandchild.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tell family where will is stored. Lost wills are useless.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
