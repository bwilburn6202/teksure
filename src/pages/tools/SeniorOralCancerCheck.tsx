import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorOralCancerCheck() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Oral Cancer Self-Check for Seniors — TekSure" description="Monthly self-exam — early oral cancer detection saves lives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Oral Cancer Self-Check</h1>
          <p className="text-lg text-muted-foreground">5-minute monthly exam saves lives.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Oral cancer 5-year survival is 84% if caught early. 39% if late. Early matters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Look for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>White or red patches</li><li>Sores that don&apos;t heal</li><li>Lumps in mouth or neck</li><li>Persistent hoarseness</li><li>Difficulty swallowing</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">How to check</h2><p>Bright light + mirror. Check tongue (top, bottom, sides). Inside cheeks. Roof. Floor of mouth.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Risk factors</h2><p>Smokers, drinkers, HPV positive. But many cases have no obvious cause.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dentist screen</h2><p>Every 6 months. Free during cleanings. They check what you can&apos;t see.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">If you find something</h2><p>2-week rule. If sore lasts 2+ weeks, see dentist or doctor immediately.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set monthly reminder. 5 minutes monthly is huge for early detection.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
