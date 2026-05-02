import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorMedicareOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare.gov for Seniors — TekSure" description="How to use Medicare.gov account — claims, plan compare, prescription drug pricing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare.gov Account</h1>
          <p className="text-lg text-muted-foreground">Manage Medicare from any device.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sign up</h2><p>Visit medicare.gov. Use your Medicare card to verify identity. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you can do</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>See claims status</li><li>Print Medicare card</li><li>Compare drug plans</li><li>Find doctors</li><li>Order replacement card</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plan Finder</h2><p>Compare Part D and Medicare Advantage plans by your prescription list. Saves $1,000+/year.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Open Enrollment</h2><p>Oct 15 - Dec 7 yearly. Best time to change plans.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free help</h2><p>SHIP counselors free. Call 1-800-633-4227 to find a local SHIP advisor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch for scams</h2><p>Medicare NEVER calls without you initiating. Hang up on cold callers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Update your prescription list yearly in Plan Finder. Plans change pricing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
