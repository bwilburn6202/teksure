import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorSocialSecurityApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Security Online — Senior Guide" description="Manage Social Security benefits online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Social Security Online</h1>
          <p className="text-lg text-muted-foreground">Check benefits without standing in line.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Make a my Social Security account</h2><p>Visit ssa.gov. Click my Social Security. Set up with Login.gov or ID.me.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Check estimated benefit</h2><p>See your projected monthly check at any future age.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Print 1099-SSA</h2><p>Download your tax form anytime. Tax preparers love this.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Update direct deposit</h2><p>Change the bank account where checks go without mailing forms.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Replace SSA card</h2><p>If you lose it, request a replacement online — no trip needed in most states.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Beware fakes</h2><p>SSA never calls and threatens. They never demand gift cards. Hang up on those.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Real Social Security questions? Call 1-800-772-1213 — never the number from a strange call.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
