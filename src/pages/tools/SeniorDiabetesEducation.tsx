import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorDiabetesEducation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Diabetes Education for Seniors — TekSure" description="Free diabetes education — ADA, CDC, Medicare-covered DSMES." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Diabetes Education</h1>
          <p className="text-lg text-muted-foreground">Knowledge controls diabetes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare DSMES</h2><p>Diabetes Self-Management Education. Free. 10 hours covered yearly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ADA</h2><p>diabetes.org. FREE. Trusted source. Recipes, tips, support.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CDC</h2><p>cdc.gov/diabetes. National Diabetes Prevention Program. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mayo Clinic</h2><p>FREE app. Doctor-quality diabetes content.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CGM training</h2><p>Free if you have continuous monitor. Dexcom, Libre offer training.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Diabetes coaching</h2><p>Livongo (now Teladoc Health). Often free through Medicare Advantage.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take Medicare DSMES. Cuts hospital visits 30%. Better control.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
