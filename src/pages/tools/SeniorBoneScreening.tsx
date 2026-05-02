import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorBoneScreening() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bone Density Screening for Seniors — TekSure" description="DEXA scans, FRAX risk score — bone health for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bone Density Screening</h1>
          <p className="text-lg text-muted-foreground">Catch osteoporosis early.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>FREE DEXA scan every 2 years for at-risk patients. 65+ women, 70+ men.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FRAX score</h2><p>Calculator. Estimates 10-year fracture risk. Most doctors use.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">T-score</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Above -1.0: normal</li><li>-1.0 to -2.5: osteopenia</li><li>Below -2.5: osteoporosis</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Treatment</h2><p>Bisphosphonates. Calcium + Vitamin D. Weight-bearing exercise. Newer drugs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Hip fracture = 25% mortality in 1 year for seniors. Prevention matters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Risk factors</h2><p>Female, thin, white, smoker, family history, steroids.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t skip DEXA. Catches osteoporosis silently progressing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
