import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorLandlineSolutions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Landline Phone Solutions for Seniors — TekSure" description="Cheap landlines for seniors — Ooma, Magic Jack, Internet phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Landline Solutions</h1>
          <p className="text-lg text-muted-foreground">Keep landline cheap.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ooma</h2><p>$100 device + $5/month taxes. FREE phone service forever. Internet-based.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Jack</h2><p>$40/year. Cheap. Some quality issues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Verizon Phone-In-One</h2><p>$10/month. Unlimited US/Canada calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why keep landline</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Reliable in power outages (with battery)</li><li>911 location accurate</li><li>Backup for cell phone</li><li>Familiar for very-senior parents</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip if</h2><p>Cell phone works fine. Saves $20-$50/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voip 911</h2><p>Internet phones (Ooma) require setup for 911 location accuracy.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ooma pays for itself in 5 months vs $20/month landline.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
