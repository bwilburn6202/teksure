import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { House } from 'lucide-react';

export default function SeniorPropertyTaxRelief() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Property Tax Relief for Seniors — Senior Guide" description="Apply online for senior property tax breaks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <House className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Property Tax Relief</h1>
          <p className="text-lg text-muted-foreground">Lower your property tax bill.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Senior exemption</h2><p>Most states offer reduced property tax for seniors 65+. Apply at county assessor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Homestead exemption</h2><p>Lowers taxable value if your home is primary residence. Apply once, renews automatic.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Property tax freeze</h2><p>Some states freeze your tax amount once you turn 65. Saves a lot over time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Veteran exemptions</h2><p>Veterans get more breaks. Disabled veterans often pay zero property tax.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Deferral programs</h2><p>Some states let you skip paying property tax until home is sold. Saves cash flow.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Apply online</h2><p>Most counties have online forms. Search [your state] senior property tax relief.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Re-apply each year if state requires it. Saves thousands annually.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
