import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function SeniorStoveAutoShutoff() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stove Auto-Shutoff for Seniors — TekSure" description="iGuardStove and similar — prevent kitchen fires for seniors with memory issues." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stove Auto-Shutoff</h1>
          <p className="text-lg text-muted-foreground">Prevent kitchen fires.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iGuardStove</h2><p>$300. Auto-shuts stove after 5 min of no movement. Senior memory protection.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FireAvert</h2><p>$170. Plugs into stove. Smoke detector triggers shutoff.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pioneering Technology</h2><p>$300+. Used in nursing homes. Most reliable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Cooking fires are #1 senior home fire cause. Auto-shutoff saves lives.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap alternative</h2><p>$15 timer. Set every time you cook. Buzzer reminds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For dementia</h2><p>Some Medicaid waivers cover stove guard for cognitive impairment.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Replace stove with induction. No flame = much safer for seniors.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
