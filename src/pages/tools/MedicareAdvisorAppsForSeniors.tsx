import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function MedicareAdvisorAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Advisor Apps for Seniors | TekSure" description="Free Medicare guidance + plan comparison." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Advisors</h1>
          <p className="text-lg text-muted-foreground">Free senior guidance.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SHIP free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-877-839-2675.</li><li>State counselors.</li><li>Unbiased advice.</li><li>Senior trusted.</li><li>Volunteer trained.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medicare.gov</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plan finder.</li><li>Compare options.</li><li>Senior official source.</li><li>No sales pressure.</li><li>Free always.</li><li>Best start.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">eHealth Medicare</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free private comparison.</li><li>Licensed agents.</li><li>Senior shop options.</li><li>Multiple insurers.</li><li>Watch — they earn commissions.</li><li>Get unbiased SHIP first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medicare Plan Finder</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medicare.gov tool.</li><li>Add your meds.</li><li>See Part D costs.</li><li>Senior precise.</li><li>Free.</li><li>Annual check.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch out scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>TV ads pushy.</li><li>Cold callers.</li><li>Don&apos;t share Medicare#.</li><li>Senior caution.</li><li>Use SHIP unbiased.</li><li>Fraud common.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual review</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Oct 15-Dec 7 enrollment.</li><li>Plans change yearly.</li><li>Senior compare each year.</li><li>SHIP help free.</li><li>Save thousands sometimes.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free SHIP + Medicare.gov = senior unbiased</h3><p className="text-sm text-muted-foreground">Free SHIP counselor (1-877-839-2675) + free Medicare.gov plan finder = best senior unbiased Medicare guidance. Avoid TV ads + cold callers — they earn commissions. Annual Oct 15-Dec 7 review. Save thousands often. Don&apos;t pay advisors when free unbiased exists.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
