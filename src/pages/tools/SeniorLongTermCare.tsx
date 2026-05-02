import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorLongTermCare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Long-Term Care Planning for Seniors — TekSure" description="Long-term care insurance, hybrid policies, Medicaid planning — senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Long-Term Care Planning</h1>
          <p className="text-lg text-muted-foreground">Plan now. Avoid family crisis later.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost reality</h2><p>Nursing home: $9,000+/month. Home health aide: $5,000+/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare doesn&apos;t cover</h2><p>Long-term care is NOT covered by Medicare. Major surprise for many seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Long-term care insurance</h2><p>Best bought ages 55-65. Premiums $2,000-$5,000/year.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hybrid policies</h2><p>Life insurance + long-term care. Less use-it-or-lose-it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicaid for nursing home</h2><p>Covers nursing home if you spend down assets. Plan 5+ years ahead with elder law attorney.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Genworth Cost of Care</h2><p>FREE. genworth.com. Estimates costs in your specific state.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even self-paying for 2 years of care wipes out average retirement savings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
