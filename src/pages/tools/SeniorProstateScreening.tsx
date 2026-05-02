import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorProstateScreening() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prostate Screening for Senior Men — TekSure" description="PSA testing, prostate health — when to screen, when to stop." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prostate Screening</h1>
          <p className="text-lg text-muted-foreground">Talk to doctor. Personal decision.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PSA blood test</h2><p>Medicare covers annually after 50. Decide with doctor if 70+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Often slow-growing</h2><p>Many seniors die WITH prostate cancer, not FROM it. Watchful waiting common.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Symptoms to watch</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Frequent urination</li><li>Weak stream</li><li>Blood in urine</li><li>Bone pain</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">BPH (enlarged)</h2><p>Common. Different from cancer. Medications help. Ask doctor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Treatment</h2><p>Surgery, radiation, hormones, watchful waiting. Doctor explains options.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Don&apos;t skip checkups</h2><p>BPH treatment improves quality of life dramatically.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Discuss screening with doctor. Personal decision based on your health.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
