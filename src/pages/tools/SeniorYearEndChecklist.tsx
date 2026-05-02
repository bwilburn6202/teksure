import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function SeniorYearEndChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Year-End Senior Checklist — TekSure" description="December tasks for seniors — Medicare review, RMDs, charity, password audit." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Year-End Senior Checklist</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t miss December deadlines.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Open Enrollment</h2><p>Oct 15-Dec 7. Compare plans on Medicare.gov. Switch if needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RMDs</h2><p>Required Minimum Distributions due Dec 31. Take from IRA/401(k) at 73+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Charity gifts</h2><p>Tax-deductible if itemizing. QCDs from IRA tax-free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Password audit</h2><p>30 minutes. Update breached passwords. Especially banks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Backup photos</h2><p>Verify cloud backup is working. Try restoring one photo as test.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Subscription cleanup</h2><p>Cancel unused. Apple ID → Subscriptions. Often $30+/month forgotten.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tax docs</h2><p>Set up folder for 1099s arriving in January. Saves panic in March.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Block 1 December morning. Run through checklist. Stress-free new year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
