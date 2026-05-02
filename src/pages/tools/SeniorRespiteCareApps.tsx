import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function SeniorRespiteCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Respite Care Apps for Seniors — TekSure" description="Find caregivers and respite help — Care.com, Honor, Visiting Angels." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Respite Care Apps</h1>
          <p className="text-lg text-muted-foreground">Family caregivers need breaks too.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Care.com</h2><p>$40/month. Largest. Hire by hour, day, or 24/7 caregivers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Honor</h2><p>Higher-quality service. App tracks visits in real time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Visiting Angels</h2><p>Established agency. In all 50 states.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Papa</h2><p>Companion care + transportation. Often covered by Medicare Advantage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free / low-cost</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Local Area Agency on Aging</li><li>VA Caregiver Support</li><li>Faith communities</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$25-$35/hour typical. Some Medicaid waivers cover up to 240 hours/year free.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even 4 hours/week of respite reduces caregiver burnout dramatically.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
