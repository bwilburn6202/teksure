import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorNationalParks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="National Parks for Seniors — TekSure" description="Senior pass, accessibility, ranger-led tours for senior visitors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">National Parks</h1>
          <p className="text-lg text-muted-foreground">Senior pass = lifetime access.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Pass</h2><p>$80 lifetime. ALL US national parks free. Buy at park or store.recreation.gov.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual Senior</h2><p>$20/year. Same benefits. Try before lifetime.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best senior parks</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Acadia (Maine, easy)</li><li>Glacier (Montana)</li><li>Smoky Mountains (TN/NC)</li><li>Grand Canyon (AZ)</li><li>Zion (Utah)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Accessibility</h2><p>Most parks have wheelchair-friendly trails. Check park website ahead.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free shuttles</h2><p>Many parks have shuttles. No driving in park needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ranger programs</h2><p>FREE. Daily walks, talks. Senior-friendly pace.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Senior pass also covers spouse and kids in same car. Family discount.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
