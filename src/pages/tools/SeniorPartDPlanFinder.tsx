import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorPartDPlanFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Part D Plan Finder — TekSure" description="Find best drug plan with your prescriptions — Medicare.gov Plan Finder." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Part D Plan Finder</h1>
          <p className="text-lg text-muted-foreground">Find cheapest plan for YOUR drugs.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FREE at Medicare.gov</h2><p>Plan Finder. Type your prescriptions. Shows plan-by-plan annual cost.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compare yearly</h2><p>Drugs change. Plans change. Save $1,000s/year by switching.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">$2,000 cap 2025</h2><p>NEW: Out-of-pocket capped at $2,000/year. Big savings for high-drug users.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Open Enrollment</h2><p>Oct 15-Dec 7 yearly. Window to change Part D plans.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Extra Help</h2><p>Low-income seniors get $0-$10 prescriptions. Apply at SSA.gov.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Insurance brokers may favor highest-commission plans. SHIP advisors are unbiased.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Run Plan Finder every November. Confirm or switch plans.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
