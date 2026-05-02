import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorHospiceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hospice Care for Seniors — TekSure" description="Hospice basics — Medicare benefit, when to call, comfort care." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hospice Care</h1>
          <p className="text-lg text-muted-foreground">Comfort care at home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>100%. No copays. Hospice is free Medicare benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to call</h2><p>Doctor estimates 6 months or less to live. Earlier is better.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it includes</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Nurse visits</li><li>Pain meds</li><li>Equipment</li><li>Counseling</li><li>Family bereavement support</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where</h2><p>Most hospice happens at home. Inpatient if needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find provider</h2><p>Medicare Care Compare. Visit medicare.gov/care-compare.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live longer</h2><p>Studies show hospice patients live LONGER than aggressive treatment patients.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Hospice isn&apos;t giving up. It&apos;s comfort with dignity. Call sooner not later.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
