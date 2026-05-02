import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorMammogramSchedule() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mammograms for Senior Women — TekSure" description="When to keep getting mammograms — Medicare coverage, dense breast." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mammograms for Seniors</h1>
          <p className="text-lg text-muted-foreground">Continue or stop?</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>FREE annual screening mammogram. Continue every 1-2 years.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to stop</h2><p>Most experts say age 75. Some 70 or 80. Discuss with doctor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">3D mammography</h2><p>Better for dense breasts. Most insurance covers now.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Self-exams</h2><p>Monthly. Same time each month. Look for changes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family history</h2><p>BRCA gene test if family cancer. Medicare covers if criteria met.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tomosynthesis</h2><p>Newer 3D. Reduces false positives. Worth requesting.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 70+ years old? Discuss continued screening with primary doctor.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
