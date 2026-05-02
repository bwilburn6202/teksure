import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorOsteoporosisTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Osteoporosis Management for Seniors — TekSure" description="Track bone health — DEXA scans, calcium tracking, weight-bearing exercise." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Osteoporosis Management</h1>
          <p className="text-lg text-muted-foreground">Strong bones. Fewer fractures.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DEXA scan</h2><p>Medicare covers every 2 years. T-score below -2.5 = osteoporosis.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calcium</h2><p>1,200 mg daily. Best from food: dairy, leafy greens, sardines.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vitamin D</h2><p>800-1,000 IU daily. Sun + supplement. Most seniors deficient.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Weight-bearing exercise</h2><p>Walking, dancing, light weights. 30 min, 3x weekly. Builds bone density.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medications</h2><p>Bisphosphonates. Prolia. Forteo. Doctor decides based on fracture risk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Track in Apple Health</h2><p>FREE. Log calcium, exercise, BMD. Pattern over years.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Hip fracture from fall = 25% mortality within 1 year. Bones matter.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
