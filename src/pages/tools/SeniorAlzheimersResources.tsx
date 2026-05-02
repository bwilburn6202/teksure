import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorAlzheimersResources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alzheimer's Resources for Seniors — TekSure" description="Free Alzheimer's resources — alz.org, helpline, support groups." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alzheimer&apos;s Resources</h1>
          <p className="text-lg text-muted-foreground">Help for patients and families.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alz.org</h2><p>FREE. Alzheimer&apos;s Association. Trusted info.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">24/7 Helpline</h2><p>FREE. 1-800-272-3900. Counselors in 200+ languages.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Support groups</h2><p>FREE in-person or online. For patients AND caregivers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trial Match</h2><p>FREE clinical trial finder. New treatments emerging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walk to End Alzheimer&apos;s</h2><p>Free annual community walks. Fundraise + connect.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MedicAlert</h2><p>$30/year. ID bracelet for wandering risk. Emergency notification.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 24/7 Helpline answers any question. Free. Even at 3 AM.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
