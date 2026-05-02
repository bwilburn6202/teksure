import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorLowIncomeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Help Programs for Seniors — Senior Guide" description="Find food, utility, and rent help online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Help Programs</h1>
          <p className="text-lg text-muted-foreground">Get help paying bills, free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. BenefitsCheckUp</h2><p>Free at benefitscheckup.org. Find every senior program you qualify for.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. SNAP</h2><p>Food benefits. Apply online at fns.usda.gov. Many seniors qualify but never apply.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. LIHEAP</h2><p>Help with heating and cooling bills. Apply at energyhelp.us.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Lifeline</h2><p>Free or discount phone and internet for low-income. lifelinesupport.org.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Free dental clinics</h2><p>freedentalcare.us — free or sliding-scale dental clinics nationwide.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. NeedyMeds</h2><p>Free at needymeds.org. Discount cards for prescriptions. Free for many seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Eldercare Locator (1-800-677-1116) — one number connects you with all local programs.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
