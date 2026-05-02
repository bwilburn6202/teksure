import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorAmateurRadio() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amateur Radio for Seniors — TekSure" description="Ham radio for seniors — license, equipment, emergency communication." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amateur Radio</h1>
          <p className="text-lg text-muted-foreground">Senior hobby + emergency comm.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Technician license</h2><p>$15 + study. Most basic. Free practice tests online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap radio</h2><p>$30 Baofeng UV-5R. Beginner radio. Talk to other hams.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Emergency communication</li><li>Connect during disasters</li><li>Active social hobby</li><li>Brain workout</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local clubs</h2><p>ARRL.org. Find clubs. Mentors help seniors learn.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Field Day</h2><p>4th weekend in June. Public events. Try radios. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Emergency value</h2><p>When power/cell fails, ham radio works. Real lifesaver.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many seniors love ham radio. Lifelong learning hobby.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
