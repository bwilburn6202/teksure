import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorVeterans() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Veteran Resources for Seniors — TekSure" description="VA benefits, Aid &amp; Attendance, veteran communities." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Veteran Resources</h1>
          <p className="text-lg text-muted-foreground">Earned benefits. Use them.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VA.gov</h2><p>FREE. Apply for benefits. Healthcare. Pension.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aid &amp; Attendance</h2><p>Up to $2,727/month for veterans needing assistance. Many qualify.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VA Healthcare</h2><p>FREE for many veterans. Covers more than Medicare alone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Veterans Service Organizations</h2><p>VFW, American Legion. Help apply for benefits FREE.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PACT Act</h2><p>2022 law. Expanded benefits for burn pit, Agent Orange exposure.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">National cemetery</h2><p>FREE burial for veterans + spouse. Honor guard ceremony.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 60% of eligible veterans don&apos;t apply for Aid &amp; Attendance. Don&apos;t miss out.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
