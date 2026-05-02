import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorColonoscopy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Colonoscopy for Seniors — TekSure" description="Colon cancer screening — when to stop, alternatives like Cologuard." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Colonoscopy for Seniors</h1>
          <p className="text-lg text-muted-foreground">Most preventable cancer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>Free colonoscopy every 10 years. Or every 4 years if high risk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cologuard</h2><p>FREE Medicare. Stool test mailed home. Less invasive.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FIT test</h2><p>FREE annual. Stool test at home. Mailed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to stop</h2><p>Most stop at 75. Doctor decides. Health more important than calendar.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best time</h2><p>50-75 most beneficial. Polyps found and removed = 90% cancer prevention.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Prep app</h2><p>Sutab, Plenvu newer prep. App reminds steps. Easier than older preps.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cologuard if you can&apos;t do prep. Same screening benefit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
