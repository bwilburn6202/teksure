import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function SeniorRMDApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Required Minimum Distributions for Seniors — TekSure" description="RMD basics — calculate, schedule, avoid 25% penalty after age 73." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RMD Basics</h1>
          <p className="text-lg text-muted-foreground">Avoid the 25% penalty.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What RMDs are</h2><p>Required Minimum Distributions. The IRS requires withdrawals from traditional IRA/401(k) starting at age 73.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calculate yours</h2><p>IRS Worksheet. Or Schwab/Fidelity/Vanguard websites all have free calculators.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Penalty for missing</h2><p>25% tax on whatever you didn&apos;t withdraw. Reduced to 10% if corrected fast.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-RMD</h2><p>Set up automatic RMD payments at your brokerage. Never miss again.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Roth IRAs</h2><p>NO RMDs ever during your lifetime. Big advantage of Roth.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">QCD strategy</h2><p>Direct RMD to charity (up to $100,000). Counts as RMD without taxable income.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take RMD in January, not December. Less stress, more tax-planning time.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
