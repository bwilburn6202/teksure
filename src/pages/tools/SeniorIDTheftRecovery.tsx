import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorIDTheftRecovery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior ID Theft Recovery | TekSure" description="Step-by-step recovery if senior identity stolen." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ID Theft Recovery</h1>
          <p className="text-lg text-muted-foreground">Senior step-by-step.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">IdentityTheft.gov</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>FTC official.</li><li>Free recovery plan.</li><li>Senior step-by-step.</li><li>Personalized.</li><li>Print recovery letter.</li><li>Trusted source.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">First steps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Place fraud alert 1 bureau.</li><li>Get free credit reports.</li><li>FTC IdentityTheft.gov report.</li><li>Senior critical 24 hr.</li><li>File police report.</li><li>Document everything.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Freeze credit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>All 3 bureaus immediately.</li><li>Senior stops new accounts.</li><li>Free.</li><li>Equifax, Experian, TransUnion.</li><li>Critical.</li><li>30 min total.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bank/credit alerts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Call all banks immediately.</li><li>Cancel cards.</li><li>Senior change passwords.</li><li>Watch transactions.</li><li>Set alerts.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Long-term</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>7-yr extended fraud alert.</li><li>Monitor credit yearly.</li><li>Senior vigilance.</li><li>Tax IRS PIN.</li><li>Watch IRS letters.</li><li>Patient process.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AARP help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-877-908-3360 fraud hotline.</li><li>Free counseling.</li><li>Senior support.</li><li>Trusted org.</li><li>Don&apos;t face alone.</li><li>Worth calling.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">IdentityTheft.gov + AARP = senior recovery</h3><p className="text-sm text-muted-foreground">Senior ID theft: free IdentityTheft.gov FTC recovery plan + freeze 3 credit bureaus + cancel cards + AARP fraud hotline 1-877-908-3360 free counseling. 7-yr extended alert. IRS PIN. Don&apos;t face alone. Most stressful but recoverable. Free help.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
