import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorMedigapTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Compare Tools — Senior Guide" description="Compare Medicare and Medigap plans online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Compare</h1>
          <p className="text-lg text-muted-foreground">Pick the right Medicare plan.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Medicare.gov tool</h2><p>Official. Free at medicare.gov/plan-compare. Add medications and pharmacies.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. SHIP counselors</h2><p>Free Medicare counseling by trained volunteers. shiphelp.org.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. AARP Medicare</h2><p>aarp.org/medicare has plain-language explainers. AARP-branded plans through UnitedHealthcare.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. eHealth Medicare</h2><p>Free private comparison tool. Search by ZIP, see all plans side by side.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Open Enrollment</h2><p>Oct 15 - Dec 7 each year. Switch plans without penalty.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip pushy salesmen</h2><p>If a TV commercial or door-knocker pressures you, walk away. Use official tools.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Free help: Call 1-800-MEDICARE. Real people who walk you through choices.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
