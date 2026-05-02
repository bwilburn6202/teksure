import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorJointSupplements() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Joint Supplements for Seniors — TekSure" description="Glucosamine, turmeric, fish oil — what works for senior joints." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Joint Supplements</h1>
          <p className="text-lg text-muted-foreground">What helps senior joints?</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fish oil</h2><p>Strongest evidence. 1-2 grams daily. Reduces joint inflammation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Turmeric/Curcumin</h2><p>Mixed evidence. May help. 500mg twice daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Glucosamine</h2><p>Mixed evidence. Some seniors swear by it. Try 3 months.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vitamin D</h2><p>Critical. Most seniors deficient. Affects joint and bone health.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip</h2><p>Magic shilajit. Cure-all powders. Most studies show placebo only.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drug interactions</h2><p>Show pharmacist all supplements. Some interact with blood thinners.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Movement and weight loss matter more than any supplement.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
